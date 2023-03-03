import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UploadModalComponent } from './upload-modal/upload-modal.component';
import { BodyComponent } from './body/body.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ReceptComponent } from './recept/recept.component';
import { RecipeModComponent } from './recipe-mod/recipe-mod.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UploadModalComponent,
    BodyComponent,
    MainComponent,
    ReceptComponent,
    RecipeModComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
