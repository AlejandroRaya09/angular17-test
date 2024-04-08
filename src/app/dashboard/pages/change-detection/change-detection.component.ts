import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css'
})
export class ChangeDetectionComponent {

  public curretFramework = computed(
    () => `Change detection - ${this.frameworkSignal().name}`
  )

  public frameworkSignal = signal({
    name: 'Angular Signal',
    releaseDate: 2016
  })

  public frameworkAsPropery = ({
    name: 'Angular Property',
    releaseDate: 2016
  })


  constructor(){
    setTimeout(() => {
      //  this.frameworkAsPropery.name = 'React'
      this.frameworkSignal.update( value => ({
        ...value,
        name:'React'
      }))

    }, 3000);
  }

}
