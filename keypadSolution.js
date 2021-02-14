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
    //looking through each of the english words
      for (let i = 0; i<wordlist.length; i++){
        let word = wordlist[i]
        let flag = true
    //looking through each of the combinations
        for (let j = 0; j<keypads.length; j++){
            let keypad = keypads[j]
    //checking if the english word includes the first letter of the combination
            if (word.includes(keypad[0])){
        //if it does, then look through the word itself
                for (let k = 0; k<word.length; k++){
                    let letter = word[k]
    //includes returns true or false if a string includes a substring
    //we are checking if the combination does not include the sought after letter
    //if it doesn't we need to break out of the loop for this instance and set the flag to false
                    if (keypad.includes(letter) == false){
                    flag = false
                    break;
                    } 
                }
            }
    //if the flag is set to true and if the first letter in the combination is included in the word
    //then we need to count it as an occurance of the word within the combination
    //then we need to reset the flag to true
          if (flag == true && word.includes(keypad[0])){
                  //console.log("contains")
                  output[keypad] = output[keypad] + 1 
              }
              flag = true
            }
          }   
        //finally return the array which has the values from that object to represent the occurances
        //of the words being made from the combinations 
           for (let key in output){
            array.push(output[key])
          }
          return array
    }
    