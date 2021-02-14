//About this solution:
//We are trying to write an algorithm that will take an array of english words
//and trying to recreate these words with an array of random letter combinations.
// The ended output will be an array of how many words for each combination can come from each
//of these combinations.
function numKeypadSolutions(wordlist, keypads) {
        // Write your code here
    //creating an object to store each of the combinations also called keypads, and their made
    //word occurances
        let output = {}
        for (let i = 0; i<keypads.length; i++){
        output[keypads[i]] = 0
        }
      
      let array = []
    
      for (let i = 0; i<wordlist.length; i++){
        let word = wordlist[i]
        let flag = true
        for (let j = 0; j<keypads.length; j++){
            let keypad = keypads[j]
            if (word.includes(keypad[0])){
                for (let k = 0; k<word.length; k++){
                    let letter = word[k]
                    if (keypad.includes(letter) == false){
                    flag = false
                    break;
                    } 
                }
            }
          if (flag == true && word.includes(keypad[0])){
                  //console.log("contains")
                  output[keypad] = output[keypad] + 1 
              }
              flag = true
            }
          }   
         
           for (let key in output){
            array.push(output[key])
          }
          return array
    }
    