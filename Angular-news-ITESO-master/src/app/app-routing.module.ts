import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent  } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'noticias/nueva', component: HomeComponent},
  { path: 'noticias/:titulo', component: NoticiasComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
