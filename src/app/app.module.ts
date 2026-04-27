import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExprimComponent } from './client/exprim/exprim.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { FooterComponent } from './client/footer/footer.component';
import { HomeComponent } from './client/home/home.component';
import { AboutComponent } from './client/about/about.component';
import { BlogComponent } from './client/blog/blog.component';
import { ContactComponent } from './client/contact/contact.component';
import { TalentComponent } from './client/talent/talent.component';
import { FaqComponent } from './client/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    ExprimComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    TalentComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
