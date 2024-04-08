import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template:`
  <app-title title="View Transition" />

  <section class="flex justify-start">
    <img srcset="https://picsum.photos/id/237/200/300"
    width="200"
    height="300"/>


    <div class="bg-blue-500 w-56 h-56">

    </div>

    
  </section>
  
  `
})
export class ViewTransitionComponent {

}
