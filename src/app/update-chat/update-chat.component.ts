import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Chat } from '../model/chat.model';
import { ActivatedRoute,Router } from '@angular/router';
import { Souche } from '../model/souche.model';

@Component({
selector: 'app-update-chat',
templateUrl: './update-chat.component.html',
styles: []
})
export class UpdateChatComponent implements OnInit {
currentChat = new Chat();
souches! : Souche[];
updatedSouId! : number;

constructor(private activatedRoute: ActivatedRoute, private router :Router,  private chatService: ChatService) { }
ngOnInit(): void {
  this.chatService.listeSouches().
  subscribe(sous => {console.log(sous);
  this.souches = sous._embedded.souches;
  }
  );
  this.chatService.consulterChat(this.activatedRoute.snapshot.params['id']).
  subscribe( ch =>{ this.currentChat = ch; 
  this.updatedSouId = this.currentChat.souche!.idSou;
  } ) ;
}
  
  
  updateChat() {
    this.currentChat.souche = this.souches.
     find(sou => sou.idSou == this.updatedSouId)!;
    this.chatService.updateChat(this.currentChat).subscribe(ch => {
    this.router.navigate(['chats']); }
    );
    }
    
  



}
