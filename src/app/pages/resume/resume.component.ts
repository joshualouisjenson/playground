import { Component, Input, OnInit } from '@angular/core';
import { ResumeModel } from 'src/app/shared/models/resume.model';

@Component({
    selector: 'jj-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
    @Input() resume: ResumeModel;

    // For lack of better abstraction...
    ngOnInit() {
        this.resume = {
            Name: 'JOSHUA JENSON',
            Email: 'jjenson@live.com',
            Phone: '(785) 806-1066',
            Skills: [],
            Languages: [],
            Education: [],
            Experience: []
        }
    }
}
