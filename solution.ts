
const formatValue = <T extends string | number | boolean> (value: T): string | number | boolean => {
     if(typeof value === 'string'){
      return value.toUpperCase();
     }else if (typeof value === 'number'){
        return value * 10 
     }else{
        return !value
     }
}


const getLength = <T extends string | unknown[]> (value: T): number => {
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



type User = {
   id: number;
   name: string;
   email: string;
   isActive: boolean;
}

const filterActiveUsers = (users: User[]):User[] => {
  return users.filter((user)=> user.isActive === true)
}



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



const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {

   const result: (string | number)[] = [];

  
  for (let i = 0; i < arr1.length; i++) {
    let found = false;

   
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr1[i]) {
        found = true;
        break;
      }
    }

    if (!found) {
      result[result.length] = arr1[i];
    }
  }

  
  for (let i = 0; i < arr2.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr2[i]) {
        found = true;
        break;
      }
    }

    if (!found) {
      result[result.length] = arr2[i];
    }
  }

  return result;
};



interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0;

  return products.reduce((total, product) => {

    const basePrice = product.price * product.quantity;

    const finalPrice = product.discount
    ? basePrice - (basePrice * product.discount / 100)
    : basePrice;
    return total + finalPrice;
  }, 0);
};

