import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ScrollDownComponent } from './scroll-down/scroll-down.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ScrollDownComponent,
    ProjectPreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
