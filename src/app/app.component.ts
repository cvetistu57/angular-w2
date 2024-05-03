import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'book-manager';

  public tempTitle;
  public tempDesc;
  public tempAuthor;
  public tempRating;
  public tempRatings;
  

  public index = 0;

  public bookCollection = [
    {
      title: 'Throne of Glass', descroption: 'The story follows the journey of Celaena Sardothien, a teenage assassin in a corrupt kingdom with a tyrannical ruler, the King of Adarlan.',image: 'https://m.media-amazon.com/images/I/81REJ3+rUOL._AC_UF1000,1000_QL80_.jpg', author: 'Sahra J Maas', rating: 0, ratings: [0]
    },
    {
      title: 'Six of Crows', descroption: 'Six of Crows follows the adventures of six teenage criminals hired to undertake a dangerous heist, while searching for love and redemption along the way.', image: 'https://m.media-amazon.com/images/I/91-DipaBR2L._AC_UF894,1000_QL80_.jpg',author: 'Leigh Bardugo', rating: 0, ratings: [0]
    },
    {
      title: 'City of Bones', descroption: 'When 15-year-old Clary Fray heads out to the Pandemonium Club in New York City, she hardly expects to witness a murder -- much less a murder committed by three teenagers covered with strange tattoos and brandishing bizarre weapons. Then the body disappears into thin air.', image: 'https://m.media-amazon.com/images/I/81CXrM8yIqL._AC_UF1000,1000_QL80_DpWeblab_.jpg', author: 'Cassandra Clare', rating: 0, ratings: [0]
    },
    {
      title: 'The Hunger Games', descroption: 'The Hunger Games is an annual event in which one boy and one girl aged 12–18 from each of the twelve districts surrounding the Capitol are selected by lottery to compete in a televised battle royale to the death.', image: 'https://m.media-amazon.com/images/I/71un2hI4mcL._AC_UF1000,1000_QL80_.jpg', author: 'Suzanne Collins', rating: 0, ratings: [0]
    },
    {
      title: 'Twilight', descroption: 'Twilight is a series of fantasy romance novels by Stephenie Meyer. It follows the life of Isabella "Bella" Swan, a human teenager who moves to Forks, Washington and finds her life turned upside-down when she falls in love with a vampire named Edward Cullen.', image: 'https://m.media-amazon.com/images/I/615ZIxEDozL._AC_UF1000,1000_QL80_.jpg', author: 'Stephenie Meyer', rating: 0, ratings: [0]
    },
    {
      title: 'Divergent', descroption: 'The first main installment in the series tells the story of Beatrice Prior, a teenager who lives in a post-apocalyptic Chicago in which society has been divided into five factions, each with a specialized social function: Abnegation, Amity, Candor, Dauntless, and Erudite.', image: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Divergent_%28book%29_by_Veronica_Roth_US_Hardcover_2011.jpg', author: 'Veronica Roth', rating: 0, ratings: [0]
    },
    {
      title: 'A Game of Thrones', descroption: 'Sweeping from a harsh land of cold to a summertime kingdom of epicurean plenty, A Game of Thrones tells a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens.', image: 'https://m.media-amazon.com/images/I/71Jzezm8CBL._AC_UF1000,1000_QL80_.jpg', author: 'George R. R. Martin', rating: 0, ratings: [0]
    }
    
  ];

  public selectedBook = this.bookCollection[this.index];

  public rateBook(ratingNum: number){
    const selectedBook = this.bookCollection[this.index];
    selectedBook.ratings.push(ratingNum);
    selectedBook.rating = this.calculateAverageRating(selectedBook.ratings);
    this.processNextBook();
    this.processSaveBookData()
    
  }

  public processNextBook() {
    
    this.index++;

    if (this.index >= this.bookCollection.length) {
      this.index = 0;
    }   
 
    this.resetTempData();
  }

  private calculateAverageRating(ratings: number[]) {
    if (ratings.length === 0) {
      return 0;
    }
    const totalRating = ratings.reduce((acc, curr) => acc + curr, 0);
    const avrgRating = totalRating / ratings.length;
    return parseFloat(avrgRating.toFixed(2));
  }

  public processSaveBookData() {
    this.bookCollection[this.index].title = this.tempTitle.value;
    this.bookCollection[this.index].descroption = this.tempDesc.value;
    this.bookCollection[this.index].author = this.tempAuthor.value;
    this.resetTempData();
}

private resetTempData() {

  this.tempTitle.value  = '';
  this.tempDesc.value   = '';
  this.tempAuthor.value   = '';
  this.tempRating.value = 0;
  this.tempRatings.value = 0;
}

  public processInputTitle(input) {
    this.tempTitle = input.target;
  }
r
  public processInputDesc(input) {
    this.tempDesc = input.target;
  }

  public processInputAuthor(input) {
    this.tempAuthor = input.target;
  }

 
}
