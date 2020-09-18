import { Directive, ElementRef, Input, Output  } from '@angular/core';

@Directive({
  selector: '[appDirective1]',
  host:{
    '(input)': 'onInput($event)'}
})
export class Directive1Directive {
  onInput(event){

    alert(event.target.value);
  }

  constructor() {

   }

}
