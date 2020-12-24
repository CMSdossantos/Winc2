// oefening 1
function testNum (number) {
    return new Promise((resolve, reject) => {
        if(number < 10){
            resolve(number + " is minder dan 10")
        } else {
            reject(number + " is gelijk aan of meer dan 10")
        }
    })
}

testNum(4)
.then((res) => console.log(res))
.catch((err) => console.log(err))


//oefening2
const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        if(words.every(word => typeof word === "string" )) {
            resolve(words)
        }else {
            reject("Array mag alleen strings hebben!");
        }
    } )
};  

const sortWords = (words) => {
    return new Promise((resolve, reject) => {
        if(words.length != 0) {resolve(words.sort())
        } else {
            reject("Array is leeg!")
        }
        
    })
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
.then(sortWords(arrayOfWords)) 
.then((result)=> console.log(result))
.catch((result)=> console.log(result))

makeAllCaps(complicatedArray)
.then(sortWords(complicatedArray)) 
.then((result)=> console.log(result))  
.catch((result)=> console.log(result))




