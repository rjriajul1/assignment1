1. What are some differences between interfaces and types in TypeScript?

ans: 

### **1. Interface মূলত object structure define করার জন্য ব্যবহার হয়, কিন্তু Type alias object ছাড়াও union, tuple, primitive, function — সব ধরনের type declare করতে পারে।**

---

### **2. Interface একাধিকবার declare করে নতুন property যোগ করা যায় (reopen করা যায়), কিন্তু Type alias একবার declare হলে আবার declare করা যায় না।**

---

### **3. Interface extend করা তুলনামূলক সহজ এবং readable, কিন্তু Type extend করতে intersection operator ব্যবহার করতে হয়, যা কম readable মনে হয়।**

---

### **4. Interface সাধারণত object-oriented design (classes, objects) এর জন্য বেশি উপযোগী, আর Type বেশি flexible এবং complex type combination (union, intersection) তৈরি করতে বেশি শক্তিশালী।**

2. What is the use of the keyof keyword in TypeScript? Provide an example.

ans:
keyof হলো TypeScript-এর একটি operator, যা কোনো object-এর সবগুলো property name কে union type হিসেবে return করে।
এটা মূলত ব্যবহার করা হয় object-এর key গুলোকে type-safe ভাবে access করা, এবং generic function এ নির্দিষ্ট key enforce 

Example:

interface User {
  name: string;
  age: number;
  email: string;
}

type UserKeys = keyof User;  
// "name" | "age" | "email"

const getValue = (obj: User, key: UserKeys) => {
  return obj[key];
};

const user: User = { name: "Riajul", age: 22, email: "test@mail.com" };

console.log(getValue(user, "email"));  

