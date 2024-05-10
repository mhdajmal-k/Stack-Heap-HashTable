class queue{
    constructor(){
        this.stack=[]
        this.stack2=[]
    }
    enqueue(value){
        this.stack.push(value)
    }
    dequeue(){
        if(this.stack2.length==0){
            while (this.stack.length>0) {
                this.stack2.push(this.stack.pop())
            }
        }
        return this.stack2.pop()
    }
    peek(){
        if(this.stack2.length==0){
            while (this.stack.length>0) {
                this.stack2.push(this.stack.pop())
            }
        }
        return this.stack2[this.stack2.length-1]
    }
    display(){
        console.log(this.stack.concat(this.stack2.reverse()))
    }
}

const queu=new queue()
queu.enqueue(10)
queu.enqueue(20)
queu.enqueue(30)
console.log(queu.peek());
queu.dequeue()
queu.display()
