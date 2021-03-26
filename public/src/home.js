// Note: Please do not change the name of the functions. The tests use those names to validate your code.
//passed
const getTotalBooksCount = (books) => {
  let total = 0;
  books.forEach((book) => total += 1);
  return total;
}


//passed 
const getTotalAccountsCount = (accounts) => {
  const totalAccount = accounts.reduce((acc, account) => acc + 1, 0);
  return totalAccount;
}

//passed
const getBooksBorrowedCount = (books) => { 
  let booksCurrentlyCheckOut = books.filter((book) => {
    let bookBorrowed = book.borrows.filter((borrow) => borrow.returned === false);
    return bookBorrowed.length > 0;
  });
  return booksCurrentlyCheckOut.length;
}
//Passed
function getMostCommonGenres(books) {
  let countByGenre = {};
     for (let i = 0; i < books.length; i++) { 
         if (!countByGenre[books[i].genre]) { 
             countByGenre[books[i].genre] = 1; 
            } 
            else { 
            countByGenre[books[i].genre] += 1;
            } 
        }
    console.log(countByGenre);
    let mappedGenre = Object.keys(countByGenre).map((k) => {
         return { name: k, count: countByGenre[k] } 
        });
    console.log(mappedGenre);
    let sortedByGenre = mappedGenre.sort((a, b) => (b.count - a.count)) 
    return sortedByGenre.slice(0, 5); 
}
//passed
function getMostPopularBooks(books) {    
    let result = [];
    
    const borrows = books.map((book) => {
    result.push({ name: book.title, count: book.borrows.length });
    }, []);
    console.log(result);
    return result.sort((a,b) => b.count - a.count).slice(0,5);
   
}

//passed
const getMostPopularAuthors = (books, authors) => {
  let result = [];
  
  let bookWithNMatchAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
  bookWithNMatchAuthor.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId)
    console.log (author);
    result.push({name: author.name.first + " " + author.name.last, count: book.borrows.length})
  });
  return result.sort((a,b)=>(b.count - a.count)).slice(0, 5);
  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
