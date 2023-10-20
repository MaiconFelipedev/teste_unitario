function sub(a,b){
    if(typeof(a) === "number" && typeof(b) === "number"){
        return a-b
    }
    return "Digite valores numéricos"
    
}

function mult(a,b){
    if(typeof(a) === "number" && typeof(b) === "number"){
        return a*b
    }
    return "Digite valores numéricos"
}

function div(a,b){
    if(typeof(a) === "number" && typeof(b) === "number"){
        if(b != 0){ 
            return a/b
        }
    }
    return "Digite valores numéricos"
}

module.exports = {sub, mult, div}