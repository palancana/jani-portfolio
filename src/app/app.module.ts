import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ScrollDownComponent } from './/components/scroll-down/scroll-down.component';
import { ProjectPreviewComponent } from './/components/project-preview/project-preview.component';
import { IntroComponent } from './pages/intro/intro.component';
import { MakeupProjectComponent } from './pages/makeup-project/makeup-project.component';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';
import { SecondaryMenuComponent } from './components/secondary-menu/secondary-menu.component';
import { GlowrProjectComponent } from './pages/glowr-project/glowr-project.component';
import { AbcProjectComponent } from './pages/abc-project/abc-project.component';
import { ProjectPreview2Component } from './components/project-preview2/project-preview2.component';
import { ProjectPreview3Component } from './components/project-preview3/project-preview3.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { AboutComponent } from './pages/about/about.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { ProjectPreviewMakeupComponent } from './components/project-preview-makeup/project-preview-makeup.component';
import { SmallScrollDownComponent } from './components/small-scroll-down/small-scroll-down.component';
import { ProjectPreviewGlowrComponent } from './components/project-preview-glowr/project-preview-glowr.component';
import { ProjectPreviewAbcComponent } from './components/project-preview-abc/project-preview-abc.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { ArticleHeaderComponent } from './components/article-header/article-header.component';

// Routing
const appRoutes: Routes = [
  // Defaults to main
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: IntroComponent },
  { path: 'makeup-your-mind', component: MakeupProjectComponent },
  { path: 'glowr', component: GlowrProjectComponent },
  { path: 'abc-groceries', component: AbcProjectComponent },
  { path: 'about', component: AboutComponent },
  // If route is wrong, go to main
  { path: '**', component: IntroComponent }
];

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  speed: 600,
  direction: 'vertical',
  mousewheel: {
    releaseOnEdges: true,
  },
  keyboard: {
    enabled: true
  },
  hashNavigation: true,
  preventClicks: true
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ScrollDownComponent,
    ProjectPreviewComponent,
    IntroComponent,
    MakeupProjectComponent,
    ProjectHeaderComponent,
    SecondaryMenuComponent,
    GlowrProjectComponent,
    AbcProjectComponent,
    ProjectPreview2Component,
    ProjectPreview3Component,
    ContactMeComponent,
    AboutComponent,
    InProgressComponent,
    ProjectPreviewMakeupComponent,
    SmallScrollDownComponent,
    ProjectPreviewGlowrComponent,
    ProjectPreviewAbcComponent,
    GetInTouchComponent,
    ArticleHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SwiperModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
