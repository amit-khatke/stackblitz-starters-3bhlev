import { Component, OnInit } from '@angular/core';

@Component({
  standalone:ture,
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  imports:[ChatComponent],
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}