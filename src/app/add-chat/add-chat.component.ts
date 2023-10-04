import { Component, OnInit } from '@angular/core';
import { Chat } from '../model/chat.model';
import { ChatService } from '../services/chat.service';
import { Souche } from '../model/souche.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-chat',
  templateUrl: './add-chat.component.html',
  styleUrls: ['./add-chat.component.css']
})
export class AddChatComponent implements OnInit {
  souches! : Souche[];
newIdSou! : number;
newSouche! : Souche;
newChat = new Chat();
constructor(private chatService: ChatService,private router :Router) { }

ngOnInit(): void {
  this.chatService.listeSouches().
  subscribe(sous => {console.log(sous);
  this.souches = sous._embedded.souches;
  }
  );
  }
  
  addChat(){
    this.newChat.souche = this.souches.find(sou => sou.idSou == this.newIdSou)!;
    this.chatService.ajouterChat(this.newChat)
    .subscribe(ch => {
    console.log(ch);
    this.router.navigate(['chats']);
    });
    }
  

    

}
