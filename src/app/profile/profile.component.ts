import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-main',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = 'Panel de adinistración';

  constructor() { }

  ngOnInit() {
  }

}
