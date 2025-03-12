import { AnimalCard } from "./animal-card"

export interface Card {

snap(otherCard: Card): boolean
toString(): string

}