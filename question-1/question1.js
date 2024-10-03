const mixedArray = ['PIZZA', 10 ,true, false, 'Wings'];


function lowercaseWords(arr){
    return new Promise(function(resolve, reject){
        try{
            const lowerCaseWords = [];
            for (let element of arr){
                if(typeof element === 'string'){
                    lowerCaseWords.push(element.toLowerCase());
                }
            }
            resolve(lowerCaseWords)
        }catch{
            reject(Error('Unexpected error occured'))
        }
    }
    )
}

async function logPromise(arr){
    let result = await lowercaseWords(arr);
    console.log(result);
}

logPromise(mixedArray);