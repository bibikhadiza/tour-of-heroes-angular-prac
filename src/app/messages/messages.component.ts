import { Component, OnInit } from '@angular/core';
import { MessaageService } from '../messaage.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessaageService) { }

  ngOnInit() {
  }

}
