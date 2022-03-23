import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/site/home/home.component';
import { GalerieComponent } from './components/site/galerie/galerie.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { SermonsComponent } from './components/site/sermons/sermons.component';
import { EventsComponent } from './components/site/events/events.component';
import { TestimonialsComponent } from './components/site/testimonials/testimonials.component';
import { SingleSermonComponent } from './components/site/single-sermon/single-sermon.component';
import { SingleTestimonialsComponent } from './components/site/single-testimonials/single-testimonials.component';
import { MinistriesComponent } from './components/site/ministries/ministries.component';
import { MinistrieSingleComponent } from './components/site/ministrie-single/ministrie-single.component';
const routes: Routes = [
  {path: '', redirectTo:'site/home', pathMatch: 'full'},
  {path: "site/home", component:HomeComponent},
  {path: "site/sermons", component:SermonsComponent},
  {path: "site/events", component:EventsComponent},
  {path: "site/testimonials", component:TestimonialsComponent},
  {path: "site/single", component:SingleSermonComponent},
  {path: "site/galerie", component:GalerieComponent},
  {path: "site/contact", component:ContactComponent},
  {path: "site/single-testi", component:SingleTestimonialsComponent},
  {path: "site/ministries", component:MinistriesComponent},
  {path: "site/ministrie-single", component:MinistrieSingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }