//Chris Hart Submission 12/4/20

// Quick Question #1
// What does the following code return
// new Set([1,1,2,2,3,4])

//Answer: {1,2,3,4}


// Quick Question #2
// What does the following code return?

// [...new Set("referee")].join("")

//Answer: 'ref'
//It iterates over the string, removes duplicates, and puts them in an array. The .join method joins the elements together.


//Quick Questions #3
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

//Answer: 
//Set {[1,2,3] => true, [1,2,3] =>false};
//The array gets treated as two different entries.


// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

function hasDuplicate(arr){
    const mySet = new Set(arr);
    if(arr.length === mySet.size){
        return false;
    }else{
        return true;
    }
}


// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }
const vowels = 'aeiou';

function vowelCount(str){
    const vowels = 'aeiou';
    const vowelMap = new Map();
    for(let char of str){
        let lowerCase = char.toLowerCase();
        if(vowels.indexOf(lowerCase) !== -1){
            if(vowelMap.has(lowerCase)){
                vowelMap.set(lowerCase, vowelMap.get(lowerCase)+1);
            }else{
                vowelMap.set(lowerCase, 1)
            }
        }
    }
    return vowelMap;

}