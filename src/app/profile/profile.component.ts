import { Component, OnInit , Output} from '@angular/core';

@Component({
  selector: 'profile-main',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = 'Panel de adinistración';
  nombreDelPapa : string;

  constructor() {
    this.nombreDelPapa = 'Inicializado desde constructor del padre';
  }

  ngOnInit() {
  }

}
