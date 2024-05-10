class Stack{
    constructor(){
        this.stack=[]
    }
    push(value){
        this.stack.push(value)
        
    }
    pop(){
        return this.stack.pop()
        
    }
    peek(){
        if(this.stack.length==0){
            console.log("array is empty");
            return
        }
        return this.stack[this.stack.length-1]
    }
    clear(){
        this.stack=[]
    }
    isEmpty(){
        return this.stack.length==0
    }
}
function reverseOrderOfTheWord(str){
    if(str==""){
        console.log("NO WORDS");
        return
    }
    const stack=new Stack()
    let arr=str.split(' ')
    for (const value of arr) {
        stack.push(value)
    }
  
    let revers=''
    while(!stack.isEmpty()){
        console.log("pop");
        revers+=`${stack.pop()}`
    }
    console.log(revers);
    return revers
}
const word='blue is sky the'
console.log(reverseOrderOfTheWord(word));


