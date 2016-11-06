/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {ListComponent} from "../shared/component/list.component";
import {ActivatedRoute} from "@angular/router";
import {MessageService} from "./message.service";

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageListComponent extends ListComponent implements OnInit {

  messages = [];
  cntsboxHeight: number = document.body.clientHeight - 50;

  constructor(route: ActivatedRoute, private messageService: MessageService) {
    super(route);
  }

  ngOnInit() {
    // this.messageService.query(super.buildCondition()).subscribe(
    //   res => this.messages = res.json().content,
    //   err => this.messageService.handleException(err)
    // );
  }

}
