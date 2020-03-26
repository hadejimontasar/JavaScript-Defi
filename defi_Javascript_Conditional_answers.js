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
    
}

function getCase(str){
    if(str.toUpperCase()){
        return str.toLowerCase()
    }
    else if(str.toLowerCase()){
        return str.toUpperCase()
    }
    else
    return str.toUpperCase && str.toLowerCase
}
console.log(getCase("AAA"))

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
    if(str === toUpperCase() || str === toLowerCase())
    return true
    else
    return false
}
console.log(onlyCase("aze"))

function incrementOrDecrement(num1,  num2){
    if(num1 % 2 === 0){
      return  num1+=1
      return num2+=1
    }
    else{
       return num1=num1-1
       return num2=num2-1
    }
    console.log(incrementOrDecrement(4,5))
    
}