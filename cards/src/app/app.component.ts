import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Card } from './models/card.model';
import { CardsService } from './service/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cards';

cards:Card[] = [];

card: Card ={
  id : 0,
  cardholderName : '',
  cardNumber: '',
  cvc : '',
  expiryMonth: '',
  expiryYear: ''
}

  constructor(private cardsservice : CardsService){

  }
  ngOnInit(): void {
    this.getAllCards();
  }
  
 
  getAllCards(){
    this.cardsservice.getAllCards().subscribe(
      response => {
        this.cards = response;   
      }
    );
  }

  onSubmit(){

    if(this.card.id === 0){
      this.cardsservice.addCard(this.card).subscribe(
        response =>{
          this.getAllCards();
          this.card={
            id : 0,
            cardholderName : '',
            cardNumber: '',
            cvc : '',
            expiryMonth: '',
            expiryYear: ''
          };
        }
  
      );
    }else{
      this.updateCard(this.card);
    }

    
  }

  deleteCard(id:number){

    this.cardsservice.deleteCard(id).subscribe(
      response =>{
          this.getAllCards();
      }
    );
  }

  editCard(card:Card){
    this.card = card;
  }

  updateCard(card:Card){

    this.cardsservice.updateCard(card).subscribe(
      response =>{
        this.getAllCards();
        this.card={
          id : 0,
          cardholderName : '',
          cardNumber: '',
          cvc : '',
          expiryMonth: '',
          expiryYear: ''
        };
      }
    );
  }



}
