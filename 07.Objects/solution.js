//Problem 1
jsConsole.writeLine('Problem 1-example with 932');
function problem1() {
    var minkov = buildPoint(1, 1),
		kenov = buildPoint(2, 2);
    function buildPoint(x, y) {
        return {
            x: x,
            y: y,
            toString: function getPoint() {
                return (this.x + " " + this.y);
            }
        };

        Point.prototype.distance = function (otherPoint) {
            return (Math.sqrt(Math.pow(Math.abs(this.x - otherPoint.x), 2) + Math.pow(Math.abs(this.y - otherPoint.y), 2)));
        };

        function checkTriangle() {
            var a = buildPoint(1, 1);
            var b = buildPoint(2, 2);
            var c = buildPoint(1, 2);
            console.log("A do C  = " + a.distance(b)); // distanciite
            console.log("B do C = " + b.distance(c));
            console.log("C do A = " + c.distance(a));
            return (a.distance(b) + b.distance(c) > c.distance(a)) &&
                (c.distance(a) + a.distance(b) > b.distance(c)) &&
                (b.distance(c) + c.distance(a) > a.distance(b));
        } // proverka dali e triugulnik
        console.log("is triangle: " + checkTriangle());
    }
}

//Problem 2

function problem2() {
    Array.prototype.remove = function (x) {
        var newArray = [];
        for (var i = 0; i < this.length; i += 1) {
            if (this[i] !== x) {
                newArray.push(this[i]);
            }
        }
        return newArray;
    }
    var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
    console.log(arr.remove(1));
}



//Problem 3

function problem3() {
    var Valentin = {
        name: "Valentin",
        age: 20
    };

    function clone(obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }
        else {
            var cloning = {};
            for (var prop in obj) {
                if (typeof obj[prop] === "object") {
                    cloning[prop] = obj[prop];
                    clone(obj[prop]);
                } else {
                    cloning[prop] = obj[prop];
                }
            }
            return cloning;
        }
    }
    var Elena = clone(Valentin);
    console.log(Elena);

}


//Problem4

function problem4() {
    function hasProperty(obj, property) {
        for (var i in obj) {
            if (i == property) {
                console.log("Yes it has!");
                return true;
            }
        }
        return false;
    }
    var Person = {
        name: "ivan",
        age: 14
    };
    hasProperty(Person, "name");
}

//Problem 5

function problem5() {
    var min = Infinity;
    var fullName = "";
    var arr = [{ firstName: "Pesho", lastName: "Peshov", age: 102 },
        { firstName: "Gosho", lastName: "Goshov", age: 24 },
        { firstName: "Elena", lastName: "Love you", age: 19 }];
    for (var i = 0; i < arr.length; i += 1) {
        console.log(arr[i].age);
        if (min > arr[i].age) {
            min = arr[i].age;
            fullName = arr[i].firstName + " " + arr[i].lastName;
        }
    }
    console.log("The youngest person is " + fullName + " age: " + min);
}

//Problem 6

function problem6() {
    function groupBy(arr, prop) {
        var groupedArr = [];

        for (var i = 0, len = arr.length; i < len; i++) {
            if (!groupedArr[arr[i][prop]]) {
                groupedArr[arr[i][prop]] = [];
            }
            groupedArr[arr[i][prop]].push(arr[i]);
        }

        return groupedArr;
    }
}


