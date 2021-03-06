import './rxjs-extensions';

import { NgModule }         from '@angular/core';
import { BrowserModule  }   from '@angular/platform-browser';

import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }         from './app.component';
import { HomeComponent }        from './home/home.component';
import { AboutComponent }       from './about/about.component';

import { HeroesModule }         from './heroes/heroes.module';

import { ScratchpadComponent }  from './scratchpad/scratchpad.component';
import { DataService }          from './services/dataService';
import { Configuration }        from './app.constants';


import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        HeroesModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ScratchpadComponent
    ],
    providers: [
        DataService,
        Configuration
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
