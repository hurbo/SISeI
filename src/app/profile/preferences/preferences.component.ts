import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['../profile.component.css']
})
export class PreferencesComponent implements OnInit {
  title = 'Panel de adinistración';

  constructor() { }

  ngOnInit() {
  }

}
