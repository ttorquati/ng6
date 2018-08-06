import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostosComponent } from './postos/postos.component';

const routes: Routes = [
	{
		path: '',
		component: UsersComponent
	},
	{
		path: 'details/:id',
		component: DetailsComponent
	},
	{
		path: 'postos',
		component: PostosComponent
	}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

