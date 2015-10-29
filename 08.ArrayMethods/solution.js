//Problem 1
function Person(firstName, lastName, age, gender) {

    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        toString: function getPerson() {
            return (this.firstName + " " + this.lastName + ' ' + this.age + ' ' + this.gender);
        }
    };

}

var persons = [
  new Person('Petur', 'Ivanov', 25, 'male'),
  new Person('Elena', 'Ivanova', 29, 'female'),
  new Person('James', 'Tomkins', 15, 'male'),
  new Person('Helen', 'Owen', 17, 'female'),
  new Person('Petur', 'Ivanov', 32, 'male'),
  new Person('Todor', 'Petrov', 39, 'female'),
  new Person('Jerard', 'Pique', 21, 'male'),
  new Person('Penelope', 'Cruz', 41, 'female'),
  new Person('Jean', 'Dujardin', 42, 'male'),
  new Person('Keira', 'Knightley', 29, 'female')
];

console.log('Task 01:');
persons.forEach(function (item, index) {
    console.log((index + 1) + ': ' + persons[index].toString());
});


//Problem 2
console.log('-------------------------');
function problem2(persons) {

    return persons.every(function (item) {
        return item.age >= 18;
    });
}
console.log('Task 02:' + problem2(persons));



//Problem 3
console.log('-------------------------');
console.log('Task 03:');
function problem3(persons) {
    var result = persons.filter(function (item) {
        return item.age < 18;
    });
    result.forEach(function (item, index) {
        console.log((index + 1) + ': ' + result[index].toString());
    });
}
problem3(persons);





//Problem4
console.log('-------------------------');
console.log('Task 04:' + problem4(persons));
function problem4(persons) {
    var result = persons.filter(function (item) {
        return item.gender === 'female';
    });
    var sum = result.reduce(function (sum, index) {
        return sum + index.age;
    }, 0);

    return sum;
}

//Problem 5
console.log('-------------------------');
console.log('Task 05:' + problem5(persons));
function problem5(persons) {
    var result = persons.filter(function (item) {
        return item.gender === 'male';
    });

    if (!Array.prototype.find) {
        Array.prototype.find = function (callback) {
            var i, len = this.length;
            for (i = 0; i < len; i += 1) {
                if (callback(this[i], i, this)) {
                    return this[i];
                }
            }
        };
    }

    var youngestMale =
        result.sort(function (a, b) {
            return a.age - b.age;
        }).find(function (item) {
            if (item !== undefined) {
                return item;
            };
        });

    return youngestMale.firstName + ' ' + youngestMale.lastName;

}

//Problem 6
console.log('-------------------------');
problem6(persons);
function problem6(persons) {
    var sorted = persons.reduce(function (obj, item) {

        if (obj[item.firstName[0]]) {
            obj[item.firstName[0]].push(item);
        } else {
            obj[item.firstName[0]] = [item];
        }
        return obj;
    }, {});

    console.log('Task 06:' + JSON.stringify(sorted));
    
}


