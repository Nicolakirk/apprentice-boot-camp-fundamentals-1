export interface Card {
animal: string;
snap:(otherCard: Card) => boolean
toString:() => string

}