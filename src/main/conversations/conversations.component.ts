import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../sidenav/header/header.component';
import { ConHeaderComponent } from './con-header/con-header.component';
import { FooterComponent } from './footer/footer.component';
import { MsgWindowComponent } from './msg-window/msg-window.component';

@Component({
  standalone:true,
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css'],
  imports:[ConHeaderComponent,MsgWindowComponent,FooterComponent],
})
export class ConversationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}