import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ScrollDownComponent } from './/components/scroll-down/scroll-down.component';
import { ProjectPreviewComponent } from './/components/project-preview/project-preview.component';
import { IntroComponent } from './pages/intro/intro.component';
import { MakeupProjectComponent } from './pages/makeup-project/makeup-project.component';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';
import { SecondaryMenuComponent } from './components/secondary-menu/secondary-menu.component';

// Routing
const appRoutes: Routes = [
  // Defaults to main
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: IntroComponent },
  { path: 'makeup-your-mind', component: MakeupProjectComponent },
  // If route is wrong, go to main
  { path: '**', component: IntroComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ScrollDownComponent,
    ProjectPreviewComponent,
    IntroComponent,
    MakeupProjectComponent,
    ProjectHeaderComponent,
    SecondaryMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
