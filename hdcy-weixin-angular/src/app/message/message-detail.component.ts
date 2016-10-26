/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {MessageService} from "./message.service";

@Component({
    selector: 'message-detail',
    templateUrl: './message-detail.component.html'
})
export class MessageDetailComponent implements OnInit {

    message;

    constructor(private route: ActivatedRoute, private messageService: MessageService) {
    }

    ngOnInit() {
        this.messageService.get(this.route.snapshot.params['id']).subscribe(value => {
            this.message = value;
        })
    }

}