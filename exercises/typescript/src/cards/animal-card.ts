import { Card } from "./card"

export class AnimalCard implements Card {
  private readonly animal: string

  constructor(animal: string) {
    this.animal = animal
  }

  snap(otherCard: AnimalCard): boolean {
    return otherCard && this.animal === otherCard.animal
  }

  toString(): string {
    return this.animal.toString()
  }
}