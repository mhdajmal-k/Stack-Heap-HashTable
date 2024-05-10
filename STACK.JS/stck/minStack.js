class MinStack{
    constructor(){
        this.stack=[]
        this.minStack=[]
    }
    push(value){
        this.stack.push(value)
        if(this.minStack.length==0||value<=this.minStack[this.minStack.length-1]){
            this.minStack.push(value)
        }
    }
    pop(){
       if (this.stack.length === 0) {
            return null;
        }
        const value=this.stack.pop()
        if(value==this.minStack[this.minStack.length-1]){
            this.minStack.pop()
        }
    }
    minValue(){
        return this.minStack[this.minStack.length-1]
    }
    
}

const stack=new MinStack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(1)
console.log(stack.minValue())