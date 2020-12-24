  const addTheWordCool = function(array){
    array.push("cool");
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

amountOfElementsInArray =  (arr) =>  arr.length 
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
// 3

selectBelgiumFromBenelux = (landen) => landen[0]
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
// resultaat: "Belgie" 

lastElementInArray = (ani) => ani[ani.length-1]
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
const impeachTrumpSlice = function(array) {
      return array.slice(1,array.length)
}
const impeachTrumpSplice = function(array) {
      array.splice(0, 1);
      return array
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

stringsTogether = (arr) => arr.join(" ")
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"

const combineArrays = (a ,b) => a.concat(b)
console.log(combineArrays([1,2,3], [4,5,6])) 
// resultaat: [1,2,3,4,5,6]