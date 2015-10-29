//Problem 1
jsConsole.writeLine('Problem 1-example with 932');
var number = 932,
    result = 0;
function problem1(number) {
    number = number * 1;
    last = number % 10;
    switch (last) {
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
    }
    return result;

}
jsConsole.writeLine(problem1(932) + ' <br/>');
//Problem 2
jsConsole.writeLine('Problem 2 - example with 123.45')


var str = '',
    len = 0,
    n = 123.45,
    i,
    reverse;

function problem2(n) {
    str = n.toString();
    len = str.length;
    reverse = [];

    for (i = 0; i < len; i += 1) {
        reverse[i] = str[len - i - 1];
    }

    return reverse.join('');
}
jsConsole.writeLine('Reversed: ' + problem2(n));
jsConsole.writeLine('<br/>');


//Problem 3
jsConsole.writeLine('Problem 3 -example with "Val sdadas val Valsdadas Val sdada Val dsadval Val val Val" and "val"')
var isSensitive = true;
var text = "Val sdadas val Valsdadas Val sdada Val dsadval Val val Val";
var word = "val";
function problem3(text,word,isSensitive) {
    if (isSensitive) {
        return func(text, word);
    } else {
        return func(text, word, isSensitive);
    }
    function func(text, word, isSensitive) {
        var startIndex = 0,
            wordLen = word.length;
        var index, indices = [];
        newWord = word.toLowerCase();
        newText = text.toLowerCase();
        while ((index = newText.indexOf(newWord, startIndex)) > -1) {
            if (newText[index - 1] == undefined || newText[index - 1] == " ") {
                if (newText[index + newWord.length] == " " || newText[index + newWord.length] == undefined) {
                    indices.push(index);
                    startIndex = index + wordLen;
                } else {
                    startIndex += newWord.length;
                }
            } else {
                startIndex += newWord.length;
            }
        }
        return indices.length;
    }

    function func(text, word) {
        var startIndex = 0,
            wordLen = word.length;
        var index, indices = [];
        while ((index = text.indexOf(word, startIndex)) > -1) {
            if (text[index - 1] == undefined || text[index - 1] == " ") {
                if (text[index + word.length] == " " || text[index + word.length] == undefined) {
                    indices.push(index);
                    startIndex = index + wordLen;
                } else {
                    startIndex += word.length;
                }
            } else {
                startIndex += word.length;
            }
        }
        return indices.length;
    }


}
jsConsole.writeLine(problem3(text,word,isSensitive));
jsConsole.writeLine('<br/>');
//Problem4
jsConsole.writeLine('Problem 4 -Divs');

function problem4() {
        var divs = document.getElementsByTagName("div").length;
        return divs;
}

jsConsole.writeLine(problem4());
jsConsole.writeLine('<br/>');
//Problem 5
jsConsole.writeLine('Problem 5 -example with [2,3,1,2,3,4,5,0,1] and 2');
var nums = [2, 3, 1, 2, 3, 4, 5, 0, 1],
    number = 0,
    count = 0;
function problem5(nums, number) {
    number = number * 1;
    len = nums.length;
    if (len === 0) {
        return 0;
    } else {
        for (i = 0; i < len; i += 1) {
            if (number === nums[i]) {
                count += 1;
            }
        }
    }
    return count;

}
jsConsole.writeLine(problem5(nums,2));
jsConsole.writeLine('<br/>');

//Problem 6
jsConsole.writeLine('Problem 6 -example with [2,3,1,2,3,4,5,0,1] and index 2');
function problem6(nums, number) {
    if (nums.length === 0) {
        return 'Nothing in the array!';
    }
    if (nums[number - 1] && nums[number]>nums[number-1]) {
        if (!nums[number + 1]) {
            return false;
        }
        else if (nums[number+1]<nums[number]){
            return true;
        }
    }
    else {
        return false;
    }
    
}
jsConsole.writeLine(problem6(nums, 2));
jsConsole.writeLine('<br/>');

//Problem 7
jsConsole.writeLine('Problem 7 -example with [2,3,1,2,3,4,5,0,1]');
var isFound = false;
function problem7(nums) {
    
    len=nums.length;
    for (i = 0; i < len; i += 1) {
        if (problem6(nums, i)) {
            isFound = true;
            return nums[i];
        }
    }
    if (!isFound) {
        return -1;
    }
}
jsConsole.writeLine('The first bigger is:' + problem7(nums));