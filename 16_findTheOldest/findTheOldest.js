const findTheOldest = function(arr) {
    arr.forEach(person => {
        if (person.yearOfBirth) {
            if (person.yearOfDeath) {
                person.age = person.yearOfDeath - person.yearOfBirth;
            }
            else {
                const currentYear = new Date().getFullYear();
                person.age = currentYear - person.yearOfBirth;
            }
        }
        
        else {
            person.age = null;
        }
    })

    const elderPeople = [...arr].sort((a, b) => b.age - a.age);
    
    console.log(elderPeople);
    return elderPeople.at(0);
};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
