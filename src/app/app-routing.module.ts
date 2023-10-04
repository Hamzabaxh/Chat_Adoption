import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
import { AddChatComponent } from './add-chat/add-chat.component';
import { UpdateChatComponent } from './update-chat/update-chat.component';
import { RechercheParSoucheComponent } from './recherche-par-souche/recherche-par-souche.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


const routes: Routes = [
{path: "chats", component : ChatsComponent},
{path: "add-chat", component : AddChatComponent},
{ path: "", redirectTo: "chats", pathMatch: "full" },
{path: "updateChat/:id", component: UpdateChatComponent},
{path: "rechercheParSouche", component : RechercheParSoucheComponent},
{path: "rechercheParNom", component : RechercheParNomComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
