import * as internal from "stream";

export interface Card{

    id: number;
    cardholderName:string;
    cardNumber:string;
    cvc:string;
    expiryMonth:string;
    expiryYear:string;

}