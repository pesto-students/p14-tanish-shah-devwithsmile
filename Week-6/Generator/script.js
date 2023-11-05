function* numberGenerator() {
    let number = 1;
    while (true) {
      yield number++;
    }
  }
  
  // Create an instance of the generator
  const generator = numberGenerator();
  
  // Generate values using the generator
  console.log(generator.next().value); // 1
  console.log(generator.next().value); // 2
  console.log(generator.next().value); // 3

  