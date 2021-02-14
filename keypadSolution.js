
function numKeypadSolutions(wordlist, keypads) {
        // Write your code here
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
    