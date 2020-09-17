import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { 
 
  }
  Title = 'Hello Mingyans World, & this is by 【interpolation binding】';
  name:string = "MINGYAN???"

   isRed = "green";
   i = 0;
   x;
  dontclick(){
    this.i++;
    if (this.i%2 == 0){this.x = "yes"}
    else{this.x = "no"}
    alert(this.x)
  }

  ngOnInit(): void {
  }
}




 
 