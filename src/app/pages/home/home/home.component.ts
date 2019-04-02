import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'jj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @HostBinding('class') classes = 'flex-fill';

}
