import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  name: string; // Add name property
  constructor() {
    this.name = 'Lưu Văn Huân';
  }
  ngOnInit(): void {

  }
}


