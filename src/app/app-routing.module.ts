import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  {path: "",
  component: DefaultComponent,
  children:[
    {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'post',
      component: PostsComponent
    },
    {
      path:'**', 
      component: NotfoundComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
