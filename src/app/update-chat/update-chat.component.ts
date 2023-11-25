import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chat } from '../model/chat.model';
import { Image } from '../model/image.model';
import { Souche } from '../model/souche.model';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-update-chat',
  templateUrl: './update-chat.component.html',
  styles: []
})
export class UpdateChatComponent implements OnInit {
  currentChat = new Chat();
  souches!: Souche[];
  updatedSouId!: number;
  myImage!: string;
  uploadedImage!: File;
  isImageUpdated: Boolean = false;



  constructor(private activatedRoute: ActivatedRoute, private router: Router, private chatService: ChatService) { }
  ngOnInit(): void {
    this.chatService.listeSouches().
      subscribe(sous => {
        this.souches = sous._embedded.souches;
      });
    this.chatService.consulterChat(this.activatedRoute.snapshot.params['id'])
      .subscribe(ch => {
        this.currentChat = ch;
        this.updatedSouId = ch.souche!.idSou;
      })

    this.chatService.consulterChat(this.activatedRoute.snapshot.params['id']).
      subscribe(ch => {
        this.currentChat = ch;
        this.updatedSouId = this.currentChat.souche!.idSou;
        this.chatService.loadImage(this.currentChat.image.idImage)
          .subscribe((img: Image) => {
            this.myImage = 'data:' + img.type + ';base64,' + img.image;
          });
      });
  }


  updateChat() {
    this.currentChat.souche = this.souches.find(sou => sou.idSou ==
    this.updatedSouId)!;
    this.chatService
    .updateChat(this.currentChat)
    .subscribe((ch) => {
    this.router.navigate(['chats']);
    });
    }
  onImageUpload(event: any) {
    if (event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated = true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => { this.myImage = reader.result as string; };
    }
  }
  onAddImageChat(){
    this.chatService
    .uploadImageChat(this.uploadedImage,this.uploadedImage.name,this.currentChat.idChat!)
        .subscribe( (img : Image) => {
              this.currentChat.images.push(img);
           });
  }
    supprimerImage(img: Image){
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.chatService.supprimerImage(img.idImage).subscribe(() => {
      //supprimer image du tableau currentProduit.images
      const index = this.currentChat.images.indexOf(img, 0);
      if (index > -1) {
      this.currentChat.images.splice(index, 1);
      }
      });
      }
    




}
