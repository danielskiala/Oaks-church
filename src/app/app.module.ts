import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/site/home/home.component';
import { GalerieComponent } from './components/site/galerie/galerie.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { SermonsComponent } from './components/site/sermons/sermons.component';
import { EventsComponent } from './components/site/events/events.component';
import { TestimonialsComponent } from './components/site/testimonials/testimonials.component';
import { SingleSermonComponent } from './components/site/single-sermon/single-sermon.component';
import { SingleTestimonialsComponent } from './components/site/single-testimonials/single-testimonials.component';
import { SingleEventComponent } from './components/site/single-event/single-event.component';
import { MinistriesComponent } from './components/site/ministries/ministries.component';
import { MinistrieSingleComponent } from './components/site/ministrie-single/ministrie-single.component';
import { NavComponent } from './components/site/nav/nav.component';
import { FooterComponent } from './components/site/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalerieComponent,
    ContactComponent,
    SermonsComponent,
    EventsComponent,
    TestimonialsComponent,
    SingleSermonComponent,
    SingleTestimonialsComponent,
    SingleEventComponent,
    MinistriesComponent,
    MinistrieSingleComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule
    // SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
