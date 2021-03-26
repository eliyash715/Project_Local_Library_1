// Note: Please do not change the name of the functions. The tests use those names to validate your code.
//passed with helper function
const authorWithMatchId = (author, id) => author.id === id;

function findAuthorById(authors, id) {
  let result = null;
  for(let i = 0; i < authors.length; i++) {
    let author = authors[i];
    if(authorWithMatchId(author, id)) result = author;
    }
  return result;
}

//passed
function findBookById(books, id) {
  let matchingBookId = books.find((book) => book.id === id);
  return matchingBookId;
}

//passed
const partitionBooksByBorrowedStatus = (books) => {
  const result = [];
  let booksLoanedOut = books.filter((booksAvailable) => booksAvailable.borrows[0].returned === false);
  let booksThatAreReturn = books.filter((notReturned) => notReturned.borrows[0].returned === true);
  result.push(booksLoanedOut)
  result.push(booksThatAreReturn);
  return result;
  
}

//passed
const getBorrowersForBook = (book, accounts) => {
  const bookArray = book.borrows; 
  let borrowersOfBook = bookArray.map((transaction) => { 
    let account = accounts.find((account) => account.id === transaction.id); 
    account.returned = transaction.returned; 
    return account;
  });
  return borrowersOfBook.slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
