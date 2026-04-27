import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExprimComponent } from './client/exprim/exprim.component';
import { HomeComponent } from './client/home/home.component';
import { AboutComponent } from './client/about/about.component';
import { BlogComponent } from './client/blog/blog.component';
import { ContactComponent } from './client/contact/contact.component';
import { TalentComponent } from './client/talent/talent.component';

const routes: Routes = [
  {path:'', redirectTo:'exprimer', pathMatch:'full'},
  {path:'exprimer', component: ExprimComponent,
    children:[
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'home', component: HomeComponent},
      {path:'about', component: AboutComponent},
      {path:'blog', component: BlogComponent},
      {path:'contact', component: ContactComponent},
      {path:'talent', component: TalentComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
