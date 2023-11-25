import { Component, OnInit } from '@angular/core';
import { Chat } from '../model/chat.model';
import { AuthService } from '../services/auth.service';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  chats! : Chat[]; //un tableau de chînes de caractères
  constructor(private chatService : ChatService,
    public authService: AuthService) { }
    
    
    ngOnInit(): void {
      this.chargerChats();
      }
      chargerChats(){
        this.chatService.listeChat().subscribe(chs => {
        this.chats = chs;
        this.chats.forEach((ch) => {
        ch.imageStr = 'data:' + ch.images[0].type + ';base64,' +
        ch.images[0].image;
        });
        });
        }
      supprimerChat(c: Chat)
      {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.chatService.supprimerChat(c.idChat!).subscribe(() => {
      console.log("chat supprimé");
      this.chargerChats();
      });
      } 
      


}
