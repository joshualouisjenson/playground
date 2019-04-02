import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResumeComponent } from './resume.component';

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ResumeComponent}
    ])
  ]
})
export class ResumeModule { }
