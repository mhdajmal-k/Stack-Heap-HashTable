class maxStack{
    constructor(){
        this.stack=[]
        this.maxiStack=[]
    }
    push(value){
        this.stack.push(value)
        if(this.maxiStack.length==0||value>=this.maxiStack[this.maxiStack.length-1]){
            this.maxiStack.push(value)
        }
    }
    pop(){
        let popValue=this.stack.pop()
        if(popValue===this.maxiStack[this.maxiStack.length-1]){
            this.maxiStack.pop()
        }
        return popValue
    }
    getMax(){
        return this.maxiStack[this.maxiStack.length-1]
    }
}
const stack=new maxStack()
stack.push(100)
stack.push(18)
stack.push(1000000)
console.log(stack.getMax())
stack.pop()
console.log(stack.getMax())
