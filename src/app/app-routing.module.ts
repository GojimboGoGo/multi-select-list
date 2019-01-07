import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { AppComponent } from './app.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
