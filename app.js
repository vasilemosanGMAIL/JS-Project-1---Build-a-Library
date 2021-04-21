class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(checkedOut) {
    return (this._isCheckedOut = checkedOut);
  }

  get ratings() {
    return this._ratings;
  }

  getAverageRating() {
    let sum = 0;
    for (let i in this._ratings) {
      sum = sum + this._ratings[i];
    }
    return `Average rating is: ${sum / this._ratings.length}`;
    //return sum / this._ratings.length;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(ratings) {
    this._ratings.push(ratings);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._pages = pages;
    this._author = author;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._runTime = runTime;
    this._director = director;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._songs = [];
    this._artist = artist;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}

const myBook = new Book({
  title: "Star Wars - Darth Bane: Path of Destruction",
  author: "Drew Karpyshyn",
  pages: 389,
});

const myMovie = new Movie({
  title: "Star Wars - Darth Bane: Rule of Two",
  director: "Drew Karpyshyn",
  runTime: 120,
});

const myCD = new CD({
  title: "Star Wars - Darth Bane: Dynasty of Evil",
  artist: "Drew Karpyshyn",
});

console.log(myBook);
myBook.addRating(5);
myBook.addRating(6);
myBook.addRating(10);
console.log(myBook.ratings);
//myBook.getAverageRating();
console.log(myBook.getAverageRating());

console.log(myMovie);
myMovie.addRating(5);
myMovie.addRating(6);
console.log(myMovie.ratings);
myMovie.getAverageRating();

console.log(myCD);
