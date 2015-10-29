//Problem 1
jsConsole.writeLine('Problem 1')
var array = [],
    size = 20,
    i;

for (i = 0; i < size; i += 1) {
    array[i] = i * 5;
    console.log('array[' + i + ']= ' + array[i]);
    jsConsole.writeLine('array[' + i + ']= ' + array[i]);
}
jsConsole.writeLine('<br/>');
//Problem 2
jsConsole.writeLine('Problem 2 - example with MAMA and BANANA')
var word1='MAMA',
    word2='BANANA',
    len1,
    len2,
    j,
    min;

function problem2(word1, word2) {
    len1 = word1.length,
    len2 = word2.length;

    if (!len1 && !len2) {
        return 'No words!';
    }
    else if (!len1 && len2) {
        return word2;
    }
    else if (len1 && !len2) {
        console.log(word1);
    }
    else {
        if (len1 >= len2) {
            return word1;
        }
        else {
            min = len1;
        }
        for (j = 0; j < min; j += 1) {
            if (word1[j] > word2[j]) {
                return word1;
            }
            else if (word2[j] > word1[j]) {
                return word2;
            }
            if (j === min - 1 && word1[j] === word2[j]) {
                return ((len1 > len2) ? word1 : word2);
            }
        }

    }
}
jsConsole.writeLine('Larger is: ' + problem2(word1, word2));
jsConsole.writeLine('<br/>');

//Problem 3
jsConsole.writeLine('Problem 3 -example with [1,2,2,423,45,11,1,4,4,4]')
var numbers = [1, 2, 423, 45, 11, 1, 4];
function problem3(numbers) {
    var count = 1,
        maxCount = 1,
        len = numbers.length,
        i,
        j,
        max;

    for (i = 0; i < len; i += 1) {
        if (numbers[i] === numbers[i + 1]) {
            count += 1;
        } else {
            count = 1;
        }
        if (count > maxCount) {
            maxCount = count;
            max = numbers[i];
        }
    }
    for (j = 0; j < maxCount; j+=1) {
        console.log(max + ' ');
        jsConsole.write(max + ' ');
    }
}
problem3([1, 2, 2,423, 45, 11, 1, 4,4,4]);
jsConsole.writeLine('<br/>');
//Problem4
jsConsole.writeLine('Problem 4 -example with [2,3,1,2,3,4,5,0,1]');
var nums = [2,3,1,2,3,4,5,0,1];
function problem4(nums) {
    var max = [nums[0]],
        temp = [nums[0]],
        len = nums.length,
        i;
    for (i = 0; i < len; i+=1) {
        if (nums[i] < nums[i + 1]) {
            temp.push(nums[i + 1]);
        } else {
            temp = [nums[i + 1]];
        }
        if (max.length < temp.length) {
            max = temp;
        }
    }
    return max;
}
jsConsole.writeLine(problem4(nums));
jsConsole.writeLine('<br/>');
//Problem 5
jsConsole.writeLine('Problem 5 -example with [2,3,1,2,3,4,5,0,1]');
function problem5(nums) {
    var i,
        j,
        min,
        temp,
        len = nums.length;
    for (i = 0; i < len - 1; i+=1) {
        min = i;
        for (j = i + 1; j < len; j+=1) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }
        if (min != i) {
            temp = nums[min];
            nums[min] = nums[i];
            nums[i] = temp;
        }
    }
    return nums;
}
jsConsole.writeLine(problem5(nums));
jsConsole.writeLine('<br/>');

//Problem 6
jsConsole.writeLine('Problem 6 -example with [2,3,1,2,3,4,5,0,1]');
function problem6(numbers) {
    var count = 0,
        maxCount = 0,
        len = numbers.length,
        i,
        j,
        tmp=0,
        max=0;

    for (i = 0; i < len; i += 1) {
        tmp = numbers[i];
        count = 0;
        for (j = 0; j < len; j += 1) {
            if (tmp === numbers[j]) {
                count += 1;
                if (maxCount < count) {
                    maxCount = count;
                    max = tmp;
                }
            }

        }
    }
    console.log(max + '(' + maxCount + ' times)');
    jsConsole.writeLine(max + '(' + maxCount + ' times)');
}

problem6(nums);
jsConsole.writeLine('<br/>');

//Problem 7
jsConsole.writeLine('Problem 7 -example with [2,3,1,2,3,4,5,0,1] and target 3');
function problem7(nums, target) {
        if (!nums.length) return -1;

        var high = nums.length - 1;
        var low = 0;
        var min = 0;
 

        while (low <= high) {
            mid = parseInt((low + high) / 2);
            element = nums[mid];
            if (element > target) {
                high = mid - 1;
            } else if (element < target) {
                low = mid + 1;
            } else {
                return mid;
            }
        }
}
jsConsole.writeLine('target: ' + nums[problem7(nums, 3)] + ' at index: ' + problem7(nums, 3));