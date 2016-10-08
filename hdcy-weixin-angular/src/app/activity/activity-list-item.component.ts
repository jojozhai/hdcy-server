/**
 * Created by zhailiang on 16/10/8.
 */
import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'activity-list-item',
  templateUrl: './activity-list-item.component.html'
})
export class ActivityListItemComponent implements OnInit {

  @Input() activity;

  constructor() {
  }

  ngOnInit() {
  }

}
