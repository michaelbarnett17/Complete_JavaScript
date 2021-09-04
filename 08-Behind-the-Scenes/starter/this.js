`use strict`;

const mike = {
    name: `mike`,
    job: `programmer`,
    year: 1984,
    calcAge: function () {
        console.log(this); // will be joe, not mike! This points to object calling the method, not the method's object !!!
        return 2037 - this.year;
        // Same as
        return 2037 - mike.year;
    }
}

// console.log(mike.calcAge());

const joe = {
    year: 1999
}

// This points to object calling the method, not the method's object !!!
// Method Borrowing
joe.calcAge = mike.calcAge;
console.log(joe.calcAge());


const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
      // console.log(this);
      console.log(2037 - this.year);
  
      // Solution 1
      // const self = this; // self or that
      // const isMillenial = function () {
      //   console.log(self);
      //   console.log(self.year >= 1981 && self.year <= 1996);
      // };
  
      // Solution 2
      const isMillenial = () => {
        console.log(this);
        console.log(this.year >= 1981 && this.year <= 1996);
      };
      isMillenial();
    },
}
