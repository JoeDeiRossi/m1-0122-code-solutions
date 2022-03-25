const books = [
  {
    isbn: '1',
    title: 'The First One',
    author: 'Lance'
  },
  {
    isbn: '2',
    title: 'The Sequel',
    author: 'Lance Again'
  },
  {
    isbn: '3',
    title: 'The Sequel Sequel',
    author: 'Lance a Lot'
  }
];

console.log('books:', books);
console.log('typeof books:', typeof books);

const booksString = JSON.stringify(books);
console.log('booksString:', booksString);
console.log('typeof booksString:', typeof booksString);

const studentString = '{"id":14,"name":"Ron"}';
console.log('studentString:', studentString);
console.log('typeof studentString:', typeof studentString);

const studentObject = JSON.parse(studentString);
console.log('studentObject:', studentObject);
console.log('typeof studentObject:', typeof studentObject);
