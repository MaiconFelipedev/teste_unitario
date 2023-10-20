function sum(a,b){
    if(typeof(a) === "number" && typeof(b) === "number"){
        return a+b
    }
    return "Digite valores numéricos"
    
}

module.exports = {sum}