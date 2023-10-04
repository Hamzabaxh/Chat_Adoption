import { Component, OnInit } from '@angular/core';
import { Chat } from '../model/chat.model';
import { ChatService } from '../services/chat.service';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  chats! : Chat[]; //un tableau de chînes de caractères

  constructor(private chatService: ChatService ) {
    //this.chats = chatService.listeChats();
    }
    
    ngOnInit(): void {
      this.chargerChats();
      }
      chargerChats(){
      this.chatService.listeChat().subscribe(chs => {
      console.log(chs);
      this.chats = chs;
      }); 
      }
      supprimerChat(c: Chat)
      {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.chatService.supprimerChat(c.idChat!).subscribe(() => {
      console.log("produit supprimé");
      this.chargerChats();
      });
      } 
      


}
