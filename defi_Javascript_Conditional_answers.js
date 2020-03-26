function sumNumber(num1,num2){
    let somme = num1 + num2
    if(somme < 100)
    return true
    else 
    return false
}
console.log(sumNumber(100,32))

function isEqual(num1,num2){
    if(num1 === num2)
    return true
    else
    return false
}
console.log(isEqual(2,2))

function ifOneIsSum(num1,num2,num3){
    if(num1 * num2 > num3)
    return true
    else
    return false
}
console.log(ifOneIsSum(5,1,7))

function isEmpty(str){
    if(str==="")
    return true
    else
    return false
}
console.log(isEmpty("Test"))

function isEqualZero(num){
    if(num <= 0)
    return true
    else
    return false
}
console.log(isEqualZero(7))

function isDevisible(num){
    if(num % 100 === 0)
    return true
    else
    return false
}
console.log(isDevisible(5))

function isEqualStr(str1, str2){
    if(str1.length === str2.length)
    return true
    else
    return false
}
console.log(isEqualStr("Test","Test1"))

function isDevideBy(num1,  num2){
    if(num1 % num2 === 0)
    return true
    else
    return false
}
console.log(isDevideBy(10,2))

function moodToday(mood){
    if(mood != ""){
        return ("Today, I am feeling " +mood)
        
    }
    else
    return "Today, I am feeling neuter"
}
console.log(moodToday("happy"))

function isEvenOrOdd(num){
    if(num % 2 === 0)
    return "even"
    else
    return "odd"
}
console.log(isEvenOrOdd(4))

function match(str1,str2){
     let Match = str1.toUpperCase() === str2.toUpperCase() ? true : false ; 
     return Match 
}
console.log(match("aaa","AAA"))

function getCase(str){
    if(str===str.toUpperCase()){
        return "upper"
    }
    else if(str===str.toLowerCase()){
        return "lower"
    }
    else
    return "mix"
}
console.log(getCase("aaa"))

function swappName(Name, LastName){

   return LastName + " " + Name

}
console.log(swappName("had","monta"))

function AlphabetSoup(str){
   let s = str.split('')
   let a = s.sort()
   return a.join('')
}
console.log(AlphabetSoup("cda"))

function onlyCase(str){
    if(str === str.toUpperCase() || str === str.toLowerCase() )
    return true
    else 
    return false
}
console.log(onlyCase("AAAazz"))

function incrementOrDecrement(num){
    if(num % 2 === 0){
        return num+=1
    }
    else 
    return num = num-1
}
console.log(incrementOrDecrement(2))

function  toString(num1, num2){
    if(num1 < num2){
        num1.toString()
      return num1  
    }
    else
    {
        num2.toString()
        return num2
    }
}
console.log(toString(1000,440))
