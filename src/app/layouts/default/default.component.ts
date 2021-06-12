import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {


  sidebarOpen = true;

  constructor() { }

  ngOnInit(): void {}

  sidebarToggler() {
    this.sidebarOpen = !this.sidebarOpen
  }


}
