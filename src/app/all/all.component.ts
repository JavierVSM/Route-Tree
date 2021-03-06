import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  id:any = {};

  constructor(private _route: ActivatedRoute){}
    
  ngOnInit(){
        this._route.params.subscribe(params => this.id = params)
        console.log(this.id);
    }

}