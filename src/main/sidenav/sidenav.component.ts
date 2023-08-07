import { Component, OnInit } from '@angular/core';
import { ChatsComponent } from './chats/chats.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';

@Component({
  standalone:true,
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  imports:[HeaderComponent,SearchComponent,ChatsComponent],
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}