class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof");
  }
}

class Cat extends Animal {
  purr() {
    console.log("Purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

// Example usage:
const genericAnimal = new Animal("Generic");
console.log(genericAnimal.species); // Output: Generic
genericAnimal.makeSound(); // Output: Generic animal sound

const dog = new Dog("Dog");
console.log(dog.species); // Output: Dog
dog.makeSound(); // Output: Generic animal sound
dog.bark(); // Output: Woof

const cat = new Cat("Cat");
console.log(cat.species); // Output: Cat
cat.makeSound(); // Output: Generic animal sound
cat.purr(); // Output: Purr

