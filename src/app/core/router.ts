import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', loadChildren: '../pages/home/home.module#HomeModule' },
    { path: 'resume', loadChildren: '../pages/resume/resume.module#ResumeModule' }
];

export const AppRouterModule = RouterModule.forRoot(routes);
