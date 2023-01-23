import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseUrl = 'https://localhost:7171/api/cards';

  constructor(private http: HttpClient) { }

  //Get All Cards
  getAllCards(): Observable<Card[]>{

    return this.http.get<Card[]>(this.baseUrl);
  }

  //Add new Card
  addCard(card:Card): Observable<Card>{
    return this.http.post<Card>(this.baseUrl, card);
  }


  //Delete Card
  deleteCard(id:number): Observable<Card>{
    return this.http.delete<Card>(this.baseUrl + '/' + id);
  }


  //Update Card
  updateCard(card:Card): Observable<Card>{
    return this.http.put<Card>(this.baseUrl + '/' + card.id, card);
  }



}
