import readline from "readline"
import { AnimalDeck } from "./animal-deck"

import { Card } from "./card"
import { Deck } from "./deck"
import { PlayingCardDeck } from "./playing-card-deck"

// to execute the runnable code in this file, use the command
// 'npm run snap' from the command line positioned at the
// root directory of this project.

class Snap {
  private player1Score: number
  private player2Score: number
  private deck: Deck

  constructor(deck: Deck) {
    this.player1Score = 0
    this.player2Score = 0
    this.deck = deck

    deck.shuffle()
  }

  async play() {
    let currentCard: Card | null = null
    let previousCard: Card | null = null

    while (this.deck.getCards().length > 0) {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'play snap> '
      })

      rl.prompt()

      currentCard = this.deck.deal()
      console.log(currentCard.toString())

      for await (const line of rl) {
        if (line.length > 0 && line.charAt(0).toLowerCase() === 'a') {
          if (previousCard && currentCard.snap(previousCard)) {
            console.log('SNAP! score Player 1')
            this.player1Score++
          } else {
            console.log('WRONG! deducting score from Player 1')
            this.player1Score--
          }
        } else if (line.length > 0 && line.charAt(0).toLowerCase() === 'l') {
          if (previousCard && currentCard.snap(previousCard)) {
            console.log('SNAP! scorePlayer 2')
            this.player2Score++
          } else {
            console.log('WRONG! deducting score from Player 2')
            this.player2Score--
          }
        }

        previousCard = currentCard
        rl.close()
      }
    }

    if (this.player1Score === this.player2Score) {
      console.log('Draw')
    } else if (this.player1Score > this.player2Score) {
      console.log('Player 1 wins!')
    } else {
      console.log('Player 2 wins!')
    }

    console.log('Scores: ' + this.player1Score + ' vs ' + this.player2Score)
    process.exit(0)
  }
}

const animalDeck = new AnimalDeck()
const playingCardDeck = new PlayingCardDeck()
const snap = new Snap(playingCardDeck)

snap.play()