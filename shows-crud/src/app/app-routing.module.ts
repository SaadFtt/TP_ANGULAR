import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowListComponent } from './components/show-list/show-list.component';
import { AddShowComponent } from './components/add-show/add-show.component';
import { EditShowComponent } from './components/edit-show/edit-show.component';

const routes: Routes = [
  { path: '', redirectTo: '/show-list', pathMatch: 'full' }, // Default route
  { path: 'show-list', component: ShowListComponent },
  { path: 'add-show', component: AddShowComponent },
  { path: 'edit-show/:id', component: EditShowComponent } // Optional: Pass ID to edit
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
