
function resolvedPromise(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve({'message': 'resolved promise!'});
        }, 500);
    })
}

function rejectedPromise(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            reject({'error': 'rejected promise!'});
        }, 500);
    })
}

let resolvedP = resolvedPromise();
resolvedP.then(function(result){console.log(result)});

let rejectedP = rejectedPromise();
rejectedP.catch(function(err){console.log(err)});