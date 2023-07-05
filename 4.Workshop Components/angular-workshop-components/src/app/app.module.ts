import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MaineComponent } from './maine/maine.component';
import { PostListComponent } from './post-list/post-list.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    MaineComponent,
    PostListComponent,
    ThemesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
