import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'profile-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['../profile.component.css']
})
export class PostsComponent implements OnInit {
  title = 'Mis posts';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      let idParam = params['id'];
      console.log(idParam);
    });
  }



  ngOnInit() {
  }

}
