import { Component, OnInit } from '@angular/core';
import { ConversationsComponent } from './conversations/conversations.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  standalone:true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports:[SidenavComponent,ConversationsComponent],
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}