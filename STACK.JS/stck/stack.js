class Stack{
    constructor(){
        this.stack=[]
    }
    push(value){
        this.stack.push(value)
    }
    pop(){
        if(this.isEmpty()){
            console.log("list is empty");
            return
        }
       return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            console.log("list is empty");
            return
        }
        return this.stack[this.stack.length-1]
    }
    isEmpty(){
        return this.stack.length==0
    }
    size(){
        return this.stack.length
    }
    print(){
        console.log(this.stack);
    }
}


const stack=new Stack()
stack.peek()
stack.push(12)
stack.push(14)
stack.push(16)

console.log(stack.isEmpty());
console.log(stack.peek());
stack.pop()
stack.print()
