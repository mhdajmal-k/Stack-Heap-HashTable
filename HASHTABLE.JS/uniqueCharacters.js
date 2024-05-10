function hasUniqueCharacters(a){
    let hashMap={}
    let unique=true
    for (const word of a) {
        if(hashMap[word]){
            unique=false
        }else{
            hashMap[word]=true
            unique=true

        }
    }
    return unique
}

console.log(hasUniqueCharacters("abcdefg"));