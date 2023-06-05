import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {
  gameStarted = false;
  cardFound = false;
  score = 0;
  round = 0;
  defaultCard: string = "../assets/images/Card_back_01.svg";
  cardsData: Card[] = [
    {
      cardType: "spade",
      img: "../assets/images/Ace_of_spades.svg",
      isFlipped: false,
    },
    {
      cardType: "club",
      img: "../assets/images/Ace_of_clubs.svg",
      isFlipped: false,
    },
    {
      cardType: "heart",
      img: "../assets/images/Ace_of_hearts.svg",
      isFlipped: false,
    },
    {
      cardType: "diamond",
      img: "../assets/images/Ace_of_diamonds.svg",
      isFlipped: false,
    },
  ];
  isclicked = false;
  constructor() { }

  clicked(e: any): void {
    if (!this.isclicked) {
      e.isFlipped = false;
      this.isclicked = true;
      if (e.cardType === "spade") {
        this.cardFound = true;
        this.score++;
      }
      setTimeout(() => {
        this.showAllCards();
      }, 2000);

      setTimeout(() => {
        this.hideCards();
      }, 4000);

      setTimeout(()=>{
        this.shuffleCards();
        this.isclicked = false;
        this.cardFound = false;
        this.round++;
      },4500)
    }
  }

  onClickPlay(): void {
    this.gameStarted = true;
    this.hideCards();
  }

  shuffleCards(): void {
    this.cardsData = this.cardsData.sort(() => Math.random() - 0.6);
  }

  showAllCards(): void {
    this.cardsData.map((item) => (item.isFlipped = false));
  }

  hideCards(): void {
    this.cardsData.map((item) => {
      (item.isFlipped = true)
    });
  }
}

interface Card {
  cardType: string;
  img: string;
  isFlipped: boolean;
}
