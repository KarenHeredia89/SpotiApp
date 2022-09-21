import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from'@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';



//Import Routes
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { ComponentsComponent } from './components/components.component';
import { LoaderComponent } from './components/shared/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardsComponent,
    ComponentsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash:true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
