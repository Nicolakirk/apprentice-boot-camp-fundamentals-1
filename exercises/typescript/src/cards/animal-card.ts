import { Card } from "./card"

export class AnimalCard implements Card {
  public readonly animal: string

  constructor(animal: string) {
    this.animal = animal
  }

  snap(otherCard: Card): boolean {
    return otherCard && this.animal === otherCard.animal
  }

  toString(): string {
    return this.animal.toString()
  }
}