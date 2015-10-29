var i, n;

//Task 1-all elements from 1 to n
function task1(n) {
    if (n >= 1) {
        for (i = 1; i <= n; i += 1) {
            console.log(i + ' ');
        }
    }
    else {
        for (i = 1; i >= n; i -= 1) {
            console.log(i + ' ');
        }
    }
}
//Task 2 -all elements not divisible by 7 and 3
function notDivisible(n) {

    if (n%21) {
        return true;
    } else {
        return false;
    }

}
    function task2(n) {
        if (n >= 1) {
            for (i = 1; i <= n; i += 1) {
                if (notDivisible(i)) {
                    console.log(i + ' ');
                }
            }
        }
        else {
            for (i = 1; i >= n; i -= 1) {
                if (notDivisible(i)) {
                    console.log(i + ' ');
                }
            }
        }
    }

    //Task 3 - min and max elements
    var numbers = [1, 2, 3, 4, 435, 21, -1, 4, 2, 6, 23424, 3],
        min = numbers[0],
        max = numbers[0];
    function task3(numbers) {
        for (i = 0; i < numbers.length; i += 1) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
            if (numbers[i] < min) {
                min = numbers[i];
            }
        }
        console.log(max + ' ' + min);
    }

    //Task 4 - max and min lexical element from document window or navigator

    var documentArr = [], windowArr = [], navigatorArr = [];

    function task4() {
        function getProperties(obj) {
            for (var prop1 in document) {
                documentArr.push(prop1);
            }

            for (var prop2 in window) {
                windowArr.push(prop2);
            }

            for (var prop3 in navigator) {
                navigatorArr.push(prop3);
            }

            documentArr.sort();
            windowArr.sort();
            navigatorArr.sort();
        }
        getProperties(window);
        getProperties(document);
        getProperties(navigator);

        console.log('Smallest and largest in document: ' + documentArr[0] + ' ' + documentArr[documentArr.length - 1]);
        console.log('Smallest and largest in window: ' + windowArr[0] + ' ' + windowArr[windowArr.length - 1]);
        console.log('Smallest and largest in navigator: ' + navigatorArr[0] + ' ' + navigatorArr[navigatorArr.length - 1]);
    }
