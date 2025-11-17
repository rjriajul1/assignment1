
const formatValue = <T extends string | number | boolean> (value: T): string | number | boolean => {
     if(typeof value === 'string'){
      return value.toUpperCase();
     }else if (typeof value === 'number'){
        return value * 10 
     }else{
        return !value
     }
}


const getLength = <T extends string | any[]> (value: T): number => {
         if(typeof value === 'string'){
           return value.length;
         }else if(Array.isArray(value)) {
            return value.length;
         }
         return 0;
}


class Person {
   name: string;
   age: number;
   constructor(name: string, age: number) {
    this.name = name;
    this.age = age
   }
   getDetails(){
      return (`'Name: ${this.name}, Age: ${this.age}'`)
   }
}

type Item = {
    title: string;
    rating: number;
}

const filterByRating = (items: Item[]): Item[] => {
   return items.filter((item)=>item.rating >= 4)
}

const products: Item[] = [
   {title: 'Book A', rating: 5},
   {title: 'Book B', rating: 3.2},
   {title: 'Book C', rating: 5.0}
]



type User = {
   id: number;
   name: string;
   email: string;
   isActive: boolean;
}

const filterActiveUsers = (users: User[]):User[] => {
  return users.filter((user)=> user.isActive === true)
}

const users: User[] = [
   {id:1, name: 'Rakib', email: 'rakib@example.com', isActive: true},
   {id:2, name: 'Asha', email: 'asha@example.com', isActive: false},
   {id:3, name: 'Rumi', email: 'rumi@example.com', isActive: true},
]


interface Book {
   title: string;
   author: string;
   publishedYear: number;
   isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
   
   const availability = book.isAvailable ? "Yes" : "No"
   console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}

const myBook: Book = {
   title: "The Great Gatsby",
   author: "F. Scott Fitzgerald",
   publishedYear: 1925,
   isAvailable: false
}

printBookDetails(myBook)

