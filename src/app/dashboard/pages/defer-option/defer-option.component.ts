import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '../../../shared/heavy-loaders-fast/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-option',
  standalone: true,
  imports: [CommonModule, HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-option.component.html',
  styleUrl: './defer-option.component.css'
})
export class DeferOptionComponent {

}
