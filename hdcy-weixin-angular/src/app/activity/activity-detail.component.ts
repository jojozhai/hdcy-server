/**
 * Created by zhailiang on 16/10/8.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivityService} from "./activity.service";
import {environment} from "../../environments/environment";
import {LoadingService} from "../shared/service/loading.service";

@Component({
  selector: 'activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity.module.css']
})
export class ActivityDetailComponent implements OnInit {

  imgDivWidth: number = 0;

  activity;
  chatcode='none';
  contactDivState = 'none';
  pushs = 'none';
  pulls = 'inline-block';
  swipers = 'none';
  startY;
  detailboxHeight: number = document.body.clientHeight - 48;

  signText = "";

  constructor(private activityService: ActivityService,
              private route: ActivatedRoute,
              private router: Router, private loadingService: LoadingService) {

  }

  swiperOptions = {
    loop: false,
    autoplay: 3000,
    pagination: '.swiper-pagination',
    paginationClickable: true,
  };

  goBack() {
    let url = "/activity";
    let from = this.route.snapshot.queryParams['from'];
    if (from) {
      url = from;
    }
    this.router.navigateByUrl(url);
  }

  ngOnInit() {
    this.loadingService.loadingEvent.emit(true);
    this.activityService.get(this.route.snapshot.params['id']).subscribe(value => {
      this.activity = value;
      this.initSignText();
      this.imgDivWidth = this.activity.images.length * 108;
      this.loadingService.loadingEvent.emit(false);
    });   

    
  }
  
   private initSignText() {
    if (environment.userToken) {
      this.activityService.isSigned(this.activity.id).subscribe(res => {
        if (res.json().content) {
          this.signText = "已报名";
        } else {
          this.initSignTextBySignEndTime();
        }
      });
    } else {
      this.initSignTextBySignEndTime();
    }
  }

  private initSignTextBySignEndTime() {
    if ((new Date(this.activity.signEndTime).getTime() - new Date().getTime()) > 0) {
      this.signText = "立即报名";
    } else {
      this.signText = "报名已截止"
    }
  }

  displayContactDiv(display) {
    if (display) {
      this.contactDivState = 'block';
    } else {
      this.contactDivState = 'none';
    }
  }
  focus(guanzhu){
  	if (guanzhu) {
  		this.chatcode='block';
  	}else {
  		this.chatcode='none';
  	}
  	
  }

  changeback(display) {
    if (display) {
      this.pulls = 'inline-block';
      this.pushs = 'none';
    }
    $(".actDetail-con").height(108);
  }

  change(display) {
    if (display) {
      this.pushs = 'inline-block';
      this.pulls = 'none';
    }
    $(".actDetail-con").height('auto');
  }

  sign() {
    if (this.signText == "立即报名") {
      if (environment.userToken) {
        this.router.navigate(["/activity/sign"], {queryParams: {id: this.activity.id}});
      } else {
        this.activityService.login();
      }
    }
  }

  showchange(num) {
    this.swipers = "block";
    $(".swiper-wrapper").css({
      transform: " translate3d(" + (-375) * (num) + "px, 0px, 0px)",

    })
  }
  hidechange() {
    this.swipers = "none";
  }

  gotoLeaderDetail() {
    if(this.activity.sponsorLeaderId){
      this.router.navigateByUrl("/leader/"+this.activity.sponsorLeaderId);
    }
  }


}
