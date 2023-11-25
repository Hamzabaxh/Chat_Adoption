import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChatComponent } from './add-chat/add-chat.component';
import { chatGuard } from './chat.guard';
import { ChatsComponent } from './chats/chats.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeSouchesComponent } from './liste-souches/liste-souches.component';
import { LoginComponent } from './login/login.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParSoucheComponent } from './recherche-par-souche/recherche-par-souche.component';
import { UpdateChatComponent } from './update-chat/update-chat.component';


const routes: Routes = [
  { path: "chats", component: ChatsComponent },
  { path: "", redirectTo: "chats", pathMatch: "full" },
  { path: 'updateChat/:id', component: UpdateChatComponent },
  { path: "rechercheParSouche", component: RechercheParSoucheComponent },
  { path: "rechercheParNom", component: RechercheParNomComponent },
  { path: "ListeSouches", component: ListeSouchesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: "add-chat", component: AddChatComponent, canActivate: [chatGuard] }, // Duplicate
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
