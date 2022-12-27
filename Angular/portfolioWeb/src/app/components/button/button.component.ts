import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
name: string = 'Login';
color: string = 'btn btn-success';
  constructor() { }

  ngOnInit(): void {
  }

  login(){
  

  }
}
