//Problem 1. Odd or Even

function isOdd(number) {

    if (number % 2) {
        return true;
    } else {
        return false;
    }

}

//Problem 2. Divisible by 7 and 5

function divisible(number) {

    if (number % 7 || number % 5) {
        return false;
    } else {
        return true;
    }

}

//Problem 3. Rectangle area

function rectArea(width, height) {

    return width * height;

}

//Problem 4. Third digit

function isSeven(digit) {

    if (((digit / 100)|0) % 10 === 7) {
        return true;
    } else {
        return false;
    }

}

//Problem 5. Third bit

function thirdByte(digit) {

    if ((digit / 16) % 2 >= 0.5) {
        return 1;
    } else {
        return 0;
    }

}

//Problem 6. Point in Circle

function isInCircle(x,y) {

    if (x*x +y*y <= 25) {
        return true;
    } else {
        return false;
    }
}


//Problem 7. Is prime

function isPrime(n) {

    var prime = true;
    if (n === 1 || n === 0) { //v primerite 1 i 0 ne sa prosti
        prime = false;
    }
    for (var i = 2; i <= Math.sqrt(n) ; i += 1) {
        if (n % i === 0 && n>2) {
            prime = false;
        }
    }
    return prime;
}

//Problem 8. Trapezoid area

function trapezoid(a, b, h) {
    if (h) {
        return (((a + b) / 2)*h);
    }
}

//Problem 9. Point in Circle and outside Rectangle

function inAndOut(x,y) {

    if (((x- 1) * (x - 1) + (y - 1) * (y - 1) <= 9)
        && (x < 1 || x > 7) && (y < -1 || y > 1)) {
        return true;
    } else {
        return false;
    }
}

//jsconsole
//Task 1
jsConsole.write('<br/>');
jsConsole.writeLine('Task 1 - Is Odd?');
var n = [3, 2, -2, -1, 0];
var i;
for (i = 0; i < n.length; i += 1)
{
    jsConsole.writeLine(n[i] + ' ' + isOdd(n[i]));
}
jsConsole.write('<br/>');
//Task 2
jsConsole.writeLine('Task 2 - Is divisible by 5 and 7?');
var p = [3, 0, 5, 7, 35, 140];
for (i = 0; i < p.length; i += 1) {
    jsConsole.writeLine(p[i] + ' ' + divisible(p[i]));
}
jsConsole.write('<br/>');
//Task 3
jsConsole.writeLine('Task 3 - Rectangle area:');
var w = [3, 2.5,5];
var h = [4, 3, 5];
for (i = 0; i < w.length; i += 1) {
    jsConsole.writeLine('width: '+ w[i] +',height: '+ h[i]+ ' -Area: ' + rectArea(w[i],h[i]));
}
jsConsole.write('<br/>');
//Task 4
jsConsole.writeLine('Task 4 - Is the third digit 7?');
var q = [5, 701, 1732, 970, 877, 777877, 9999799];
for (i = 0; i < q.length; i += 1) {
    jsConsole.writeLine(q[i] + ' ' + isSeven(q[i]));
}
jsConsole.write('<br/>');
//Task 5
jsConsole.writeLine('Task 5 - Third Byte:');
var b = [5, 8, 0, 15, 5343, 62241];
for (i = 0; i < b.length; i += 1) {
    jsConsole.writeLine(b[i] + ' ' + thirdByte(b[i]));
}
jsConsole.write('<br/>');
//Task 6
jsConsole.writeLine('Task 6 - Point in circle:');
var x = [0,-5,-4,1.5,-4,100,0,0.2,0.9,2];
var y = [1,0,5,-3,-3.5,-30,0,-0.8,-4.93,2.655];
for (i = 0; i < x.length; i += 1) {
    jsConsole.writeLine('x: ' + x[i] + ',y: ' + y[i] + ' -Is in?: ' + isInCircle(x[i], y[i]));
}
jsConsole.write('<br/>');
//Task 7 
jsConsole.writeLine('Task 7 - Prime?:');
var pr = [1,2,3,4,9,37,97,51,-3,0];
for (i = 0; i < pr.length; i += 1) {
    jsConsole.writeLine(pr[i] + ' ' + isPrime(pr[i]));
}
jsConsole.write('<br/>');
//Task 8
jsConsole.writeLine('Task 8 - Trapezoid area:');
var a = [5,2,8.5,100,0.222];
var c = [7, 1, 4.3, 200, 0.333];
var h = [12,33,2.7,300,0.555]
for (i = 0; i < a.length; i += 1) {
    jsConsole.writeLine('a: ' + a[i] + ',b: ' + c[i] + ',h: ' + h[i] + ' -Area: ' + trapezoid(a[i], c[i],h[i]));
}
jsConsole.write('<br/>');
//Task 9 
jsConsole.writeLine('Task 9 - Point in circle and outside Rectangular:');
var z = [1,3,0,4,2,4,2.5,3.5,-100];
var j = [4,2,1,1,0,0,1.5,1.5,-100];
for (i = 0; i < z.length; i += 1) {
    jsConsole.writeLine('x: ' + z[i] + ',y: ' + j[i] + ' -?: ' + isInCircle(x[i], y[i]));
}