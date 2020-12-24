const superheroes = [
      {name: "Batman", alter_ego: "Bruce Wayne"}, 
      {name: "Superman", alter_ego: "Clark Kent"}, 
      {name: "Spiderman", alter_ego: "Peter Parker"}]
      
      const findSpiderMan = arr => arr.find( arr => arr.name == "Spiderman")
      
      console.log(findSpiderMan(superheroes)) 
      // Find Spiderman
      // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

      const doubleArrayValues = arr => arr.map(el => el *2)
      console.log(doubleArrayValues([1, 2, 3])) 
      // result should be [2, 4, 6]

      const containsNumberBiggerThan10 = arr => arr.some(el => el > 10)
      console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])) 
      // result should be true
      console.log(containsNumberBiggerThan10([1,2,1,2,1,2]))
      // result should be false

      const isItalyInTheGreat7 = (arr) => arr.includes('Italy')
      console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']))
      // result should be true

      const tenfold =  arr => arr.forEach(el => console.log(el*10))
      console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
      // result should be [10, 40, 30, 60, 90, 70, 110]

      const isBelow100 = arr => arr.every(el => el < 100)
      console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 100, 11, 77, 84, 98 ]))
      // result should be: false
      
      const opteller = (acc,curr) => acc + curr
      const bigSum = (arr) => arr.reduce(opteller)
      console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
      // result should be 1118