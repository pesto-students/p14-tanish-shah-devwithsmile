//Protecting the Object

const person = {
    _name: 'John', 
    _age: undefined,
    _email: 'john@example.com',
  
    // Getter for name (read-only)
    get name() {
      return this._name;
    },
  
    // Getter for age
    getAge() {
      return this._age;
    },
  
    // Setter for age (write-only)
    set setAge(age) {
      this._age = age;
    },
  
    // Getter for email (read-only)
    get email() {
      return this._email;
    },
  };
  
  // Example usage:
  
  console.log('Name:', person.name); // Read name
  console.log('Email:', person.email); // Read email
  
  person.setAge = 25; // Write age
  console.log('Age:', person.getAge()); // Read age
  
  // Trying to modify read-only properties will not have any effect
  person.name = 'Jane';
  person.email = 'jane@example.com';
  
  console.log('Name after attempt to modify:', person.name); 
  console.log('Email after attempt to modify:', person.email); 


  //JavaScript Prototype


// Vehicle class
class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getDetails() {
      return `${this.year} ${this.make} ${this.model}`;
    }
  }
  
  // Car class extends Vehicle
  class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
      super(make, model, year);
      this.numDoors = numDoors;
    }
  
    // Override getDetails method to include numDoors
    getDetails() {
      return `${super.getDetails()}, ${this.numDoors} doors`;
    }
  }
  
  // Create instances and call getDetails method
  const vehicle = new Vehicle('Toyota', 'Camry', 2022);
  console.log('Vehicle Details:', vehicle.getDetails());
  
  const car = new Car('Honda', 'Civic', 2021, 4);
  console.log('Car Details:', car.getDetails());
  




