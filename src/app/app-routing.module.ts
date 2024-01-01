import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'view/:id', component: ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
