import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatsComponent } from './chats/chats.component';
import { AddChatComponent } from './add-chat/add-chat.component';
import { FormsModule } from '@angular/forms';
import { UpdateChatComponent } from './update-chat/update-chat.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParSoucheComponent } from './recherche-par-souche/recherche-par-souche.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatsComponent,
    AddChatComponent,
    UpdateChatComponent,
    RechercheParSoucheComponent,
    RechercheParNomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
