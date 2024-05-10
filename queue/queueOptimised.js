class queue{
    constructor(){
        this.item={}
        this.rear=0
        this.front=0
    }
    enqueue(value){
        this.item[this.rear]=value
        this.rear++
    }
    dequeue(){
        let item=this.item[this.front]
        delete this.item[this.front]
        this.front++
        return item
    }
    isEmpty(){
        return this.rear-this.front===0
    }
    peek(){
        return this.item[this.front]
    }
    size(){
        return this.rear-this.front
    }
    print(){
        if(this.isEmpty()){
            console.log("empty");
            return 
        }
        console.log(this.item);
    }
}


const queues=new queue()
queues.print()
queues.enqueue(10)
queues.print()
queues.peek()
queues.enqueue(20)
queues.enqueue(30)
queues.dequeue()
queues.print()
console.log(queues.size())
