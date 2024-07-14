const axios = require('axios');
const sequelize = require('../config/database');
const Book = require('../models/Book');
const isbnList = require('./isbnList'); // Assume this is your list of ISBNs
const numbers = Array.from({ length: 50 }, (_, i) => i + 1);

function getRandomNumber(numbers) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
  }
  
const genres = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Thriller",
    "Fantasy",
    "Science Fiction",
    "Biography",
    "Historical Fiction",
    "Romance",
    "Horror",
    "Self-Help",
    "Poetry",
    "Young Adult",
    "Children's",
    "Graphic Novel",
    "Memoir",
    "Adventure",
    "Crime",
    "Drama",
    "Philosophy"
  ];
  
  function getRandomGenre(genres) {
    const randomIndex = Math.floor(Math.random() * genres.length);
    return genres[randomIndex];
  }
  
async function fetchBookData(isbn) {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    if (response.data.items && response.data.items.length > 0) {
      const bookData = response.data.items[0].volumeInfo;
      return {
        title: bookData.title,
        author: bookData.authors ? bookData.authors.join(', ') : 'Unknown',
        publisher: bookData.publisher || 'Unknown',
        description: bookData.description || 'No description available',
        id:isbn,
        year: parseInt(bookData.publishedDate.substring(0,4),10),
        genre:getRandomGenre(genres),
        quantity:getRandomNumber(numbers),
        available_quantity:50,
        imageLink: bookData.imageLinks['smallThumbnail']
      };
    } else {
      console.error(`No book found for ISBN ${isbn}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching data for ISBN ${isbn}:`, error.message);
    return null;
  }
}

async function storeBookData(bookData) {
  try {
    const existingBook = await Book.findOne({ where: { id: bookData.id } });
    if (existingBook) {
      console.log(`Book with ISBN ${bookData.id} already exists in the database.`);
      return;
    }

    await Book.create(bookData);
    console.log(`Book data for ISBN ${bookData.id} stored successfully.`);
  } catch (error) {
    console.error(`Error storing data for ISBN ${bookData.id}:`, error.message);
  }
}

async function main() {
  try {
    await sequelize.sync(); // Ensure the database is synced
    for (const isbn of isbnList) {
      const bookData = await fetchBookData(isbn);
      console.log(bookData)
      if (bookData) {
        await storeBookData(bookData);
      }
    }
  } catch (error) {
    console.error('Error in main script:', error);
  }
}

main()
