class queue{
    constructor(){
        this.items=[]
    }
    enqueue(value){
        this.items.push(value)
    }
  dequeue(){
    if(this.isEmpty()){
        console.log("array is empty");
        return
    }
    return this.items.shift()
  }
isEmpty(){
    return this.items==0
}
peek(){
    if(this.isEmpty()){
        console.log("array is empty");
        return
    }
    return this.items[0]
}
size(){
    return this.items.length
}
print(){
   let value=''
    for (let i = 0; i < this.items.length; i++) {
         value += `${this.items[i]} `;
    }
    console.log(value);
}
}

const MyQueue=new queue()

console.log(MyQueue.size())
MyQueue.enqueue(10)
console.log(MyQueue.peek())
MyQueue.enqueue(50)
MyQueue.enqueue(60)
MyQueue.enqueue(70)
MyQueue.dequeue()
MyQueue.print()