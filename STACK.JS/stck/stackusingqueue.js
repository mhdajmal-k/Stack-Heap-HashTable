class StackWithQueue{
    constructor(){
        this.queue1=[]
        this.queue2=[]
    }
    push(value){
        while(this.queue1.length>0){
            this.queue2.push(this.queue1.shift())
        }
        this.queue1.push(value)
        while(this.queue2.length>0){
            this.queue1.push(this.queue2.shift())
        }
    }
    pop(){
        return this.queue1.shift()
    }
    peek(){
        return this.queue1[0]
    }
    display(){
        console.log(this.queue1)
    }
}

const stack=new StackWithQueue()
stack.push(10)
stack.push(11)
stack.push(12)
stack.pop()
stack.pop()
console.log(stack.peek());
stack.display()
