//Task 1
jsConsole.writeLine('<br/>');
jsConsole.writeLine('Task 1 :');
var a, b;

function task1(a, b) {
    if (a > b) {
        console.log(a + ' ' + b);
        jsConsole.writeLine( a + ' ' + b);
    }
    else {
        console.log(b + ' ' + a);
        jsConsole.writeLine( + b + ' ' + a);
    }
}
var i ;
a = [5, 3, 5.5];
b = [2, 4, 4.5];
for (i = 0; i < a.length; i += 1)
{
    jsConsole.writeLine('Greater:' + a[i] + ' ' + b[i]);
    task1(a[i], b[i]);
}
//Task 2
jsConsole.writeLine('<br/>');
jsConsole.writeLine('Task 2 :');
var c;
function task2(a, b, c) {
    if ((a * b * c) > 0) {
        console.log('+');
        jsConsole.writeLine('+');
    }
    else if ((a * b * c) < 0) {
        console.log('-');
        jsConsole.writeLine('-');
    }
    else {
        console.log('0');
        jsConsole.writeLine('0');
    }
}

a = [5,-2,-2,0,-1];
b = [2,-2,4,-2.5,-0.5];
c = [2, 1, 3, 4, -5.1];

for (i = 0; i < a.length; i += 1) {
    jsConsole.writeLine('Product sign:' + a[i] + ' ' + b[i] + ' ' + c[i] );
    task2(a[i], b[i] , c[i]);
}

//Task 3
jsConsole.writeLine('<br/>');
jsConsole.writeLine('Task 2 :');

function task3(a, b, c) {
    if (a >= b) {
        if (a >= c) {
            console.log(a);
            jsConsole.writeLine(a);
        }
        else {
            console.log(c);
            jsConsole.writeLine(c);
        }
    }
    else {
        if (b >= c) {
            console.log(b);
            jsConsole.writeLine(b);
        }
        else {
            console.log(c);
            jsConsole.writeLine(c);
        }
    }
}
a = [5, -2, -2, 0, -0.1];
b = [2, -2, 4, -2.5, -0.5];
c = [2, 1, 3, 5, -1.1];

for (i = 0; i < a.length; i += 1) {
    jsConsole.writeLine('The biggest of:' + a[i] + ' ' + b[i] + ' ' + c[i]);
    task3(a[i], b[i], c[i]);
}

//Task 4
jsConsole.writeLine('<br/>');
jsConsole.writeLine('Task 4:');
function task4(a, b, c) {
    if (a >= b && a >= c) {
        if (b >= c) {
            console.log(a + ' ' + b + ' ' + c);
            jsConsole.writeLine(a + ' ' + b + ' ' + c);
        }
        else {
            console.log(a + ' ' + c + ' ' + b);
            jsConsole.writeLine(a + ' ' + c + ' ' + b);
        }
    }
    else if (b >= c && b >= a) {
        if (c >= a) {
            console.log(b + ' ' + c + ' ' + a);
            jsConsole.writeLine(b + ' ' + c + ' ' + a);
        }
        else {
            console.log(b + ' ' + a + ' ' + c);
            jsConsole.writeLine(b+ ' ' + a + ' ' + c);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
            jsConsole.writeLine(c + ' ' + b + ' ' + a);
        } 
        else {
            console.log(c + ' ' + a + ' ' + b);
            jsConsole.writeLine(c + ' ' + a + ' ' + b);
        }
    }
}
a = [5, -2, -2, 0, -1.1 ,10 ,1];
b = [1, -2, 4, -2.5, -0.5,20,1];
c = [2, 1, 3, 5, -0.1,30, 1];

for (i = 0; i < a.length; i += 1) {
    jsConsole.writeLine('Sort:' + a[i] + ' ' + b[i] + ' ' + c[i]);
    task4(a[i], b[i], c[i]);
}

//Task 5
jsConsole.writeLine('<br/>');
jsConsole.writeLine('Task 5:');
function task5(a) {
    switch (a) {
        case 1: console.log('One'); break;
        case 2: console.log('Two'); break;
        case 3: console.log('Three'); break;
        case 4: console.log('Four'); break;
        case 5: console.log('Five'); break;
        case 6: console.log('Six'); break;
        case 7: console.log('Seven'); break;
        case 8: console.log('Eight'); break;
        case 9: console.log('Nine'); break;
        default: console.log('Not a digit');
    }

    switch (a) {
        case 1: jsConsole.writeLine('One'); break;
        case 2: jsConsole.writeLine('Two'); break;
        case 3: jsConsole.writeLine('Three'); break;
        case 4: jsConsole.writeLine('Four'); break;
        case 5: jsConsole.writeLine('Five'); break;
        case 6: jsConsole.writeLine('Six'); break;
        case 7: jsConsole.writeLine('Seven'); break;
        case 8: jsConsole.writeLine('Eight'); break;
        case 9: jsConsole.writeLine('Nine'); break;
        default: jsConsole.writeLine('Not a digit');
    }
}

a = [2, 1, 0, 5, -0.1, 'hi', 9, 10];
for (i = 0; i < a.length; i += 1) {
    jsConsole.writeLine('Word a:' + a[i]);
    task5(a[i]);
}


//Task 6
jsConsole.writeLine('<br/>');
jsConsole.writeLine('Task 6:');

var x1, x2, determinant;

function task6(a, b,c) {
    determinant = b * b - 4 * a * c;
    if (determinant > 0) {
        x1 = (-b + Math.sqrt(determinant)) / (2 * a);
        x2 = (-b - Math.sqrt(determinant)) / (2 * a);
        console.log('x1=' + x1 + ' x2=' + x2);
        jsConsole.writeLine('x1=' + x1 + ' x2=' + x2);
    }

    else if (determinant === 0) {
        x1 = (-b + Math.sqrt(determinant)) / (2 * a);
        console.log('x1=x2=' + x1);
        jsConsole.writeLine('x1=x2=' + x1);
    }

    else {
        console.log('no real roots');
        jsConsole.writeLine('no real roots');
    }
}
a = [2,-1,-0.5,5];
b = [5, 3, 4, 2];
c = [-3, 0, -8, 8];
for (i = 0; i < a.length; i += 1) {
    jsConsole.writeLine('Roots for coefs:' + a[i] + ' ' + b[i] + ' ' + c[i]);
    task6(a[i],b[i],c[i]);
}

//Task 7
jsConsole.writeLine('<br/>');
jsConsole.writeLine('Task 7:');
var d, e;
function task7(a, b, c, d, e) {
    var max = a;
    if (max < b) {
        max = b;
        if (max < c) {
            max = c;
            if (max < d) {
                max = d;
                if (max < e) {
                    max = e;
                }
            } else if (max < e) {
                max = e;
            }
        } else if (max < d) {
            max = d;
            if (max < e) {
                max = e;
            }
        } else if (max < e) {
            max = e;
        }
    } else if (max < c) {
        max = c;
        if (max < d) {
            max = d;
            if (max < e) {
                max = e;
            }
        } else if (max < e) {
            max = e;
        }
    } else if (max < d) {
        max = d;
        if (max < e) {
            max = e;
        }
    } else if (max < e) {
        max = e;
    }
    return max;
}a = [5,-2,-2,0,-3];b = [2,-22,4,-2.5,-0.5];c = [2,1,3,0,-1.1];d = [4,0,2,5,-2];e = [1,0,0,5,-0.1];for (i = 0; i < a.length; i += 1)
{
    jsConsole.writeLine('Biggest of:' + a[i] + ' ' + b[i] + ' ' + c[i] + ' ' + d[i] + ' ' + e[i]);
    jsConsole.writeLine(task7(a[i], b[i], c[i], d[i], e[i]));
}

//Task 8
jsConsole.writeLine('<br/>');
jsConsole.writeLine('Task 8:');
var number, result, singles, teen, hundreds, decades,and=' ';
function task8(number) {
    if (number >= 100 && number <= 999) {
        singles = number % 10;
        decades = parseInt(number / 10) % 10;
        hundreds = parseInt(number / 100);
    }
    if (number >= 10 && number <= 99) {
        singles = number % 10;
        decades = parseInt(number / 10) % 10;
    }
    if (isNaN(number)) {
        result = 'Invalid Integer!';
    }
    else {
        if (number > 999) {

            result = 'Please enter a maximum 3 digit number!';
        }
        else {
            if (number >= 10 && number < 20) {
                switch (number) {
                    case 10: result = 'Ten'; break;
                    case 11: result = 'Eleven'; break;
                    case 12: result = 'Twelve'; break;
                    case 13: result = 'Thrirteen'; break;
                    case 14: result = 'Fourteen'; break;
                    case 15: result = 'Fifteen'; break;
                    case 16: result = 'Sixteen'; break;
                    case 17: result = 'Seventeen'; break;
                    case 18: result = 'Eighteen'; break;
                    case 19: result = 'Nineteen'; break;
                    default: result = 'Nineteen'; break;

                }
            }
            else if(number>=0 && number<=9)
            {
                switch (number) {
                    case 0: result = 'Zero'; break;
                    case 1: result = 'One'; break;
                    case 2: result = 'Two'; break;
                    case 3: result = 'Three'; break;
                    case 4: result = 'Four'; break;
                    case 5: result = 'Five'; break;
                    case 6: result = 'Six'; break;
                    case 7: result = 'Seven'; break;
                    case 8: result = 'Eight'; break;
                    case 9: result = 'Nine'; break;
                    default: result = 'Nineteen'; break;

                }
            }
            else {
                switch (singles) {

                    case 1: singles = 'One'; break;
                    case 2: singles = 'Two'; break;
                    case 3: singles = 'Three'; break;
                    case 4: singles = 'Four'; break;
                    case 5: singles = 'Five'; break;
                    case 6: singles = 'Six'; break;
                    case 7: singles = 'Seven'; break;
                    case 8: singles = 'Eight'; break;
                    case 9: singles = 'Nine'; break;
                    default: singles = ' ';

                }
                if (decades === 1) {
                    decades = number % 100;
                    singles = '';
                    switch (teens) {

                        case 10: decades = 'Ten'; break;
                        case 11: decades = 'Eleven'; break;
                        case 12: decades = 'Twelve'; break;
                        case 13: decades = 'Thrirteen'; break;
                        case 14: decades = 'Fourteen'; break;
                        case 15: decades = 'Fifteen'; break;
                        case 16: decades = 'Sixteen'; break;
                        case 17: decades = 'Seventeen'; break;
                        case 18: decades = 'Eighteen'; break;
                        case 19: decades = 'Nineteen'; break;
                        default: decades = ' '; break;
                    }
                }
                else {
                    switch (decades) {

                        case 2: decades = 'Twenty'; break;
                        case 3: decades = 'Thrirty'; break;
                        case 4: decades = 'Fourty'; break;
                        case 5: decades = 'Fifty'; break;
                        case 6: decades = 'Sixty'; break;
                        case 7: decades = 'Seventy'; break;
                        case 8: decades = 'Eightty'; break;
                        case 9: decades = 'Ninety'; break;
                        default: decades = ' ';

                    }
                }
                switch (hundreds) {

                    case 1: hundreds = 'One hundred'; break;
                    case 2: hundreds = 'Two hundred'; break;
                    case 3: hundreds = 'Three hundred'; break;
                    case 4: hundreds = 'Four hundred'; break;
                    case 5: hundreds = 'Five hundred'; break;
                    case 6: hundreds = 'Six hundred'; break;
                    case 7: hundreds = 'Seven hundred'; break;
                    case 8: hundreds = 'Eight hundred'; break;
                    case 9: hundreds = 'Nine hundred'; break;
                    default: hundreds = ' ';
                }
                and = ' and ';
                if (number % 100 === 0 || (number>=10 && number<=99))
                {
                    and = ' ';
                }
                result = hundreds + and + decades + singles;
            }
            
        }
    }

    console.log(result);
    return result;

}

number = [0, 9, 10, 12, 19, 25, 98, 273, 400, 501, 617, 711, 999];
for (i = 0; i < number.length; i += 1)
{
    jsConsole.writeLine('In words :' + number[i]);
    jsConsole.writeLine(task8(number[i]));
}
