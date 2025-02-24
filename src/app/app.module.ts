import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './components/start/first-page/first-page.component';
import { MoodComponent } from './components/start/mood/mood.component';
import { HmHomeComponent } from './components/home/hm-home/hm-home.component';
import { HmHeroComponent } from './components/home/hm-hero/hm-hero.component';
import { HmHeaderComponent } from './components/home/hm-header/hm-header.component';
import { HmWrapperComponent } from './components/home/hm-wrapper/hm-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    MoodComponent,
    HmHomeComponent,
    HmHeroComponent,
    HmHeaderComponent,
    HmWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
