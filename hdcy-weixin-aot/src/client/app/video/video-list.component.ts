/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {ListComponent} from "../shared/component/list.component";
import {ActivatedRoute, Router} from "@angular/router";
import {VideoService} from "./video.service";
import {LoadingService} from "../shared/service/loading.service";

@Component({
  moduleId: module.id,
  selector: 'video-list',
  templateUrl: 'video-list.component.html',
  styleUrls: ['video.module.css']
})
export class VideoListComponent extends ListComponent implements OnInit {

  totalvideos=[1];
  
  num;  
  totalPages;  
  currentTag = 1;
  tagWidths: number = 0;
  
  videos: Array<any>;

  topVideos: Array<any>;

  condition = {enable: 'true', liveForWeixin: 'true', top: 'false'};

  cntsboxHeight: number = document.body.clientHeight - 50;

  swiperOptions = {
    loop: false,
    autoplay: 3000,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    centeredSlides: true,
    slidesPerView: 1.2,
    watchActiveIndex: true,
  };

  constructor(route: ActivatedRoute, public router: Router, public videoService: VideoService, public loadingService: LoadingService) {
    super(route);

  }

  ngOnInit() {
    this.loadingService.loadingEvent.emit(true);
    this.videoService.query(super.buildCondition(this.condition)).subscribe(res => {
      this.videos = res.json().content;
      this.totalPages=res.json().totalPages;
      this.tagWidths=this.totalPages*48;
      for (let i=2;i<=this.totalPages;i++) {    	
    	this.totalvideos.push(i);    	
   	  }
      this.loadingService.loadingEvent.emit(false);
    });
    this.videoService.query(super.buildCondition({
      top: 'true',
      liveForWeixin: 'true',
      enable: 'true'
    })).subscribe(res => this.topVideos = res.json().content);
  }

  navToDetail(video:any) {
    if (video.live) {
      let begin = new Date().getTime() - new Date(video.startTime).getTime() > 0;
      if (begin) {
        window.location.href = video.liveLink;
      } else {
        this.router.navigateByUrl('/show/' + video.id);
      }
    } else {
      if (video.replay) {
        this.router.navigateByUrl('/show/' + video.id);
      } else {
        this.router.navigateByUrl('/video/' + video.id);
      }
    }
  }
  
  pages(num){		
		if(((num-2)*48+240)<=this.tagWidths&&num>1){
			$(".pagescon").css('transform','translateX('+(num-2)*(-48)+'px)')
			
		}else if (num==1) {
			$(".pagescon").css('transform','translateX(0px)')
		}
		
		if (this.totalPages-num<4) {
			$(".pagescon").css('transform','translateX('+(this.totalPages-5)*(-48)+'px)')
		}
		$(".prev").attr('data',num);
		$(".next").attr('data',num);
		console.log(num)
		this.currentTag=num;		
	}
	prev(num){
		num=$(".prev").attr('data');
		if (num>1) {
			num--;
			$(".prev").attr('data',num);
			$(".next").attr('data',num);
			this.currentTag=num;
		}
		if (num>2&&num<this.totalPages-2) {			
			$(".pagescon").css('transform','translateX('+(num-3)*(-48)+'px)')
		}		
	}
	next(num){
		num=$(".next").attr('data');
		if (num<this.totalPages) {
			num++;
			$(".prev").attr('data',num);
			$(".next").attr('data',num);
			this.currentTag=num;			
		}
		if (num<this.totalPages-2) {			
			$(".pagescon").css('transform','translateX('+(num-2)*(-48)+'px)')
		}
	}
	isActive(num){
		return this.currentTag == num;
	}

}
