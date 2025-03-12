import { Card } from "./card"

export interface Deck {
    getCards:() => string[]
    shuffle:() => void
    deal:() => Card

}