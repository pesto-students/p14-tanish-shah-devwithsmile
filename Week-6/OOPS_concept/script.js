// Section 1 - Inheritance

// Vehicle class
class Vehicle {
    constructor(make, model, year, color) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
  
    drive() {
      console.log(`Driving ${this.make} ${this.model}.`);
    }
  }
  
  // Car class extends Vehicle
  class Car extends Vehicle {
    constructor(make, model, year, color, numSeats) {
      super(make, model, year, color);
      this.numSeats = numSeats;
    }
  }
  
  // RideShareCar class extends Car
  class RideShareCar extends Car {
    constructor(make, model, year, color, numSeats, isAvailable) {
      super(make, model, year, color, numSeats);
      this.isAvailable = isAvailable;
    }
  }
  
  // Section 2 - Polymorphism
  
  // Shape class
  class Shape {
    calculateArea() {
     
    }
  }
  
  // Rectangle class extends Shape
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  // Triangle class extends Shape
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return (this.base * this.height) / 2;
    }
  }
  
  // Circle class extends Shape
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Section 3 – Abstraction and Encapsulation
  
  // BankAccount class
  class BankAccount {
    #accountNumber;
    #balance;
    #accountHolderName;
  
    constructor(accountNumber, balance, accountHolderName) {
      this.#accountNumber = accountNumber;
      this.#balance = balance;
      this.#accountHolderName = accountHolderName;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    withdraw(amount) {
      
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  // CheckingAccount class extends BankAccount
  class CheckingAccount extends BankAccount {
    withdraw(amount) {
      this.balance -= amount;
    }
  }
  
  // SavingsAccount class extends BankAccount
  class SavingsAccount extends BankAccount {
    withdraw(amount) {
      if (this.balance - amount < 0) {
        console.log('Withdrawal failed. Insufficient funds.');
      } else {
        this.balance -= amount;
      }
    }
  }
  
  // Create instances and call methods
  
  // Section 1 - Inheritance
  const rideShareCar = new RideShareCar('Toyota', 'Camry', 2022, 'Blue', 4, true);
  rideShareCar.drive();
  console.log('Is available:', rideShareCar.isAvailable);
  
  // Section 2 - Polymorphism
  const rectangle = new Rectangle(5, 10);
  console.log('Rectangle Area:', rectangle.calculateArea());
  
  const triangle = new Triangle(4, 6);
  console.log('Triangle Area:', triangle.calculateArea());
  
  const circle = new Circle(3);
  console.log('Circle Area:', circle.calculateArea());
  
  // Section 3 - Abstraction and Encapsulation
  const checking = new CheckingAccount('123456', 1000, 'John Doe');
  checking.deposit(500);
  checking.withdraw(200);
  console.log('Checking Account Balance:', checking.getBalance());
  
  const savings = new SavingsAccount('789012', 2000, 'Jane Doe');
  savings.deposit(1000);
  savings.withdraw(2500);
  console.log('Savings Account Balance:', savings.getBalance());
  