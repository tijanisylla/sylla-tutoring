// 4. netflixQueue is an object for managing your netflix queue
const netflixQueue = {
  queue: [
    // Array of movies
    "Mr. Nobody",
    "The Matrix",
    "Eternal Sunshine of the Spotless Mind",
    "Fight Club",
  ],
  watchMovie() {
    this.queue.pop(); // Watched it already
    console.log(this.queue);
    return "Watched a movie!";
  },
  addMovie(movie) {
    // Adding a movie
    this.queue.unshift(movie);
    return "Adding a movie!";
  },
  printQueue() {
    // Printing a movie
    let list = "";
    for (let i = this.queue.length - 1; i >= 0; i--) {
      const currentMovie = this.queue[i];
      list += `${this.queue.length - i}. ${currentMovie}\n`;
    }
    return list;
  },
};
console.log(netflixQueue.watchMovie());
console.log(this);
// console.log(`
//   Printing movie queue!

//   ${netflixQueue.printQueue()}
//   ${netflixQueue.watchMovie()}
//   Printing movie queue!

//   ${netflixQueue.printQueue()}
//   ${netflixQueue.addMovie("Black Swan")}
//   Printing movie queue!

//   ${netflixQueue.printQueue()}
//   `);
