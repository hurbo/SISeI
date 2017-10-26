import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'profile-children',
  templateUrl: './children.component.html',
  styleUrls: ['../profile.component.css']
})
export class ChildrenComponent implements OnInit {
  @Input() nombreDelPapa : string;
  title = 'Mis children';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      let idParam = params['id'];
      console.log(idParam);
    });
    this.nombreDelPapa = 'seteado desde children';
  }



  ngOnInit() {

  }

}
