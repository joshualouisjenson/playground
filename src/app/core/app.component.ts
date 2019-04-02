import { Component } from '@angular/core';
import { PageModel } from '../shared/models/page.model';

@Component({
    selector: 'jj-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Joshua Jenson';

    pages: PageModel[] = [
        new PageModel('/home', 'Home'),
        new PageModel('/resume', 'Resume')
    ];
}
