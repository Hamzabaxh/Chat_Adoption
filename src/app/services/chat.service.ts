import { Injectable } from '@angular/core';
import { Chat } from '../model/chat.model';
import { Souche } from '../model/souche.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SoucheWrapper } from '../model/SoucheWarpped';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
providedIn: 'root'
})
export class ChatService {
chats! : Chat[]; //un tableau de Chat
//souches : Souche[];
apiURL: string = 'http://localhost:8082/chats/api';
apiURLSou: string = 'http://localhost:8082/chats/sou';


constructor(private http : HttpClient) {

  /* this.souches = [ {idSou : 1, nomSou : "aarbi",descriptionSou : "souche de chat"},
  {idSou : 2, nomSou : "persan",descriptionSou : "souche de chat"}];  */ 
/* this.chats = [
{ idChat : 1, nomChat : "chat1", prixAdoption : 50.600, dateNaissance: new Date("01/14/2011"), souche : {idSou : 1, nomSou : "aarbi",descriptionSou : "souche de chat"}},
{ idChat : 2, nomChat : "chat2", prixAdoption : 50, dateNaissance : new Date("12/17/2010"), souche : {idSou : 2, nomSou : "aarbi",descriptionSou : "souche de chat"}},
{ idChat : 3, nomChat :"chat3", prixAdoption : 90.123, dateNaissance : new Date("02/20/2020"), souche : {idSou : 3, nomSou : "aarbi",descriptionSou : "souche de chat"}}
]; */
}
listeChat(): Observable<Chat[]>{
  return this.http.get<Chat[]>(this.apiURL);
  }
  
  ajouterChat( ch: Chat):Observable<Chat>{
    return this.http.post<Chat>(this.apiURL, ch, httpOptions);
    }

    supprimerChat(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      
  chat! : Chat;
  consulterChat(id: number): Observable<Chat> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Chat>(url);
    }
    

 
      

    updateChat(ch :Chat) : Observable<Chat>
    {
    return this.http.put<Chat>(this.apiURL, ch, httpOptions);
    }
      trierChats() {
        this.chats = this.chats.sort((n1, n2) => {
          if (n1.idChat! > n2.idChat!) {
            return 1;
          }
          if (n1.idChat! < n2.idChat!) {
            return -1;
          }
          return 0;
        });
      }
      listeSouches():Observable<SoucheWrapper>{
        return this.http.get<SoucheWrapper>(this.apiURLSou);
        }

        rechercherParSouche(idSou: number):Observable< Chat[]> {
          const url = `${this.apiURL}/chatsou/${idSou}`;
          return this.http.get<Chat[]>(url);
          } 
          rechercherParNom(nom: string):Observable< Chat[]> {
            const url = `${this.apiURL}/chatsByName/${nom}`;
            return this.http.get<Chat[]>(url);
            }
              
        
            
        
        
  
}