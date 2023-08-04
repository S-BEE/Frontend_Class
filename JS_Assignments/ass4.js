function getFirstValue(arr){
    return arr.at(0)
}

function makePair(a,b){
    let result = []
    result.push(a)
    result.push(b)
    return result
    //(a,b).of()
}

function reverse(arr){
    return arr.reverse()
}

function arrayToString(arr){
    arr.join("")
}

function valueAt(arr,i){
    return arr.at(i)
}

function search(arr,item){
    return arr.indexOf(item)
}

function check(arr, item){
    return arr.includes(item)
}

function invertArray(arrs){
    return arrs.map(function(arr){
        return arr * (-1)
    })
}

function skipTooMuchSugarDrinks(arr){
    return arr.filter(function(a){
        return a !== "cola" && a !== "fanta"
    })
}

function filterArray(arr){
    return arr.filter(function(a){
        return typeof(a) === 'number'
    })
}

function forbiddenLetter(l,arr){
    let res = arr.forEach(function(a){
        return a.split('').includes(l)
    })
    return res
}
forbiddenLetter("r", ['rock','paper','scissors'])

function cleanUpArray(arr){
    let result =[]
    let res1 = arr.filter(function(a){
        return a % 2 === 0
    })
    let res2 = arr.filter(function(a){
        return a % 2 !== 0
    })
    result.push(res1)
    result.push(res2)
    return result
}

function stringPairs(str){
    let pairs = [ ]
    for(i = 0; i < str.length; i+= 2){
        if (i = str.length-1){
            pairs.push(str[i] + '*')
        }
        else{
            pairs.push(str[i]+str[1+i])
        }
    }
    return pairs
}

function addEnding(words){
    let newWord = []
    words.forEach(function(word){
        newWord.push(word+'ly')
    })
    return newWord
}

function spelling(str){
    
}

const ask = (question,yes,no) => {
   return (confirm(question))? "we are here already" : "we die here if needs be"
}



























