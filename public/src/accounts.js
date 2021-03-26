// Note: Please do not change the name of the functions. The tests use those names to validate your code.
//passed
const findAccountById = (accounts, id) => {
  let account = accounts.find(acc => acc.id === id);
    return account;
}
//passed
const sortAccountsByLastName = (accounts) => {
  let sortedByLastName = accounts.sort((accountA, accountB) => accountA.name.last.toUpperCase() > accountB.name.last.toUpperCase() ? 1 : -1
  );
  return sortedByLastName;
}
//passed
function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  for(let id in books) {
    let accountIdInBook = books[id].borrows.filter((borrow) => borrow.id === account.id);
    result += accountIdInBook.length;
  }
 return result;
}

//passed
function getBooksPossessedByAccount(account, books, authors) {
  let filteredBook = books.filter((book) => {
    let filteredBorrowbook = book.borrows.filter((borrow) => borrow.id === account.id && borrow.returned === false);
    return filteredBorrowbook.length > 0;
  });
let bookWithAuthor = filteredBook.map((book) => {
  let author = authors.find((auth) => auth.id === book.authorId);
  book.author = author;
  return book;
});   
  return bookWithAuthor;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
