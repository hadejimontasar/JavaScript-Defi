function sumNumber(num){
    let i ;
    let s=0
    for(i=1; i<=num; i++){
        s=s+i
    }
    return s
}
console.log(sumNumber(4))

function reverse(array){
    return array.reverse()
}
console.log(reverse([1, 2, 3, 4]))

function getLastItem(array){
    return array[array.length - 1]
}
console.log(getLastItem(["a","b","c"]))

function concat(array1,  array2){
    return array1.concat(array2)
}
console.log(concat([0, 10, 6], [900, 5, 60]))

function search(array,  item){
    return array.indexOf(item)
}
console.log(search([0, 10, 6], 50))

function getMultipliedArr(array){
    let i;
    for(i=0; i < array.length; i++){
     array[i] = array[i] * 2
    }
    return array
}
console.log(getMultipliedArr([1, 2, 6]))

function wordLengths(array){
    
    let lengths = array.map(function(word){
        return word.length
       }) 
   return lengths
}
console.log(wordLengths(["simplon", "Tunis"]))

function sum(array){

    let sum = array.reduce(function(a, b){
        return a + b;
    });
    return sum
}
console.log(sum([1, 8, 12]))

function noOdds(array){
    let i;
    let arr = [];
    for(i=0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            continue;
        }
        arr.push(array[i]);
    }
    return arr
}
console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8]))

function findLargestNum(array){
    return Math.max(...array)
}
console.log(findLargestNum([4, 5, 1, 9]))

function findSmallerNum(array){
    return Math.min(...array)
}
console.log(findSmallerNum([4, 5, 1, 9]))

function firstLast(array){
   first = array[0]
   last =array[array.length - 1]

    arrFirstLast = [first,last]

   return arrFirstLast
}
console.log(firstLast([5, 10, 15, 20, 25]))

function diffMaxMin(array){
    return Math.max(...array) - Math.min(...array)
}
console.log(diffMaxMin([44, 32, 86, 19]))

function multiplyByLength(array){
    let i;
    for(i=0; i < array.length; i++){
     array[i] = array[i] * array.length
    }
    return array
}
console.log(multiplyByLength([4, 1, 1]))

function negate(array){
   return array.map(value => -value)
}
console.log(negate([-1, 2, -3, 4]))

function isFourLetters(array){
    let i;
    let arr = [];
    for(i=0; i < array.length; i++){
        if(array[i].length === 4){
            arr.push(array[i]);
        }
        
    }
     return arr

}
console.log(isFourLetters(["Tomato", "Potato", "Pair"]))

function addEnding(array, ending){
    let i;
    for(i=0; i < array.length; i++){
        array[i]= array[i] + ending;
    }
    return array
}
console.log(addEnding(["clever", "meek", "hurried"], "ly"))

function removeNull(array){
    let i;
    for(i = 0; i < array.length; i++){ 
        if ( array[i] === null) { 
            array.splice(i, 1); 
        }}
    return array
}
console.log(removeNull([7, 8, null, 9]))


function unlucky(nums){
    for(i = 0; i < nums.length; i++){ 
        if ( nums[i] % 13 == 0) { 
            nums.splice(i, 1); 
        }}
    return nums
}
console.log(unlucky([53, 182, 435, 591, 637]))


function transform(array){
    let i;
    for(i = 0; i < array.length; i++){
        if ((i + 1) % 2 == 1) 
            array[i]++;
            else
            array[i]--;  
    }
    return array
}
console.log(transform([1, 2, 3, 4, 5]))


function filterArray(array){
    //array.filter(word => word.String)

   let arr = array.filter(function(item) {
        return (typeof item === "number")});
        return arr
}
console.log(filterArray([1, 2, "e", "f"]))

function societyName(friends){
    return friends.map(el =>el[0]).sort().join("")
}
console.log(societyName(["Manel", "Sheima", "Amira"]))


function findLargestNums(array){

}

function shortToLong(array){
    
}