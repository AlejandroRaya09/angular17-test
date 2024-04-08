import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `
  <h1 class="text-3xl mb-5">{{ title }}</h1>

  `

})
export class TitleComponent {

@Input({required: true}) title!: string;
@Input({transform: booleanAttribute}) withShadow: boolean = false;

}
