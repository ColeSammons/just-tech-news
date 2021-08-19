const beverage = function() {
  // Create 3 variables for the `type`, `price`, and `origin` of the beverage
  // Assign them to values of your choice
  const type = 'dawda';
  const price = 'fffff';
  const origin = 'ddddd';

  // Return an object literal which contains the methods `product()`, `amount()`, and `place()`
  return {
    // `product()` will print an invitation to drink the `type` of beverage
    //  YOUR CODE HERE
    product() {
      console.log(`enjoy ${type}`);
    },
    // `amount()` will print out the `price` of the beverage
    // YOUR CODE HERE
    amount() {
      console.log(`enjoy ${price}`);
    },
    // `place()` will print out the `origin` of the beverage
    // YOUR CODE HERE
    place() {
      console.log(`enjoy ${origin}`);
    }
  };
};

const drink = beverage();
// Invoke the 3 methods
// YOUR CODE HERE
drink.product();
drink.amount();
drink.place();

