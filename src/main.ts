import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,MainComponent],
  template: `
    <app-main></app-main>
  `,
})
export class App {
  name ='amit';
}

bootstrapApplication(App);
