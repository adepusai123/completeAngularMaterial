import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: 'welcome',
        loadChildren: './modules/welcome/welcome.module#WelcomeModule'
    },
    {
        path: 'books',
        loadChildren: './modules/books/books.module#BooksModule',
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }