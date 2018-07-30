import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { AboutComponent } from './about/about.component';
import { JoinUsComponent } from './join-us/join-us.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'join-us', component: JoinUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
