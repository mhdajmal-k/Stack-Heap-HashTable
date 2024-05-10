class CircularQueue{
    constructor(capacity){
        this.item=new Array(capacity)
        this.capacity=capacity
        this.length=0
        this.rear=-1
        this.front=-1
    }
    isFull(){
        return this.capacity==this.length
    }
    isEmpty(){
        return this.length==0
    }
    enqueue(value){
        if (this.isFull()) {
            console.log("queue is full")
        }else{
            this.rear=(this.rear+1)%this.capacity
            this.item[this.rear]=value
            this.length++
            if (this.front==-1) {
                this.front=this.rear
            }

        }
    }
    dequeue(){
        if (this.isEmpty()) {
            console.log("empty");
            return 
        }
        const item=this.item[this.front]
        this.item[this.front]=null
        this.front=(this.front+1)%this.capacity
        this.length--
        if (this.isEmpty()) {
            this.front=-1
            this.rear=-1
        }
        return item
    }
    peek(){
        return this.item[this.front]
    }
    print(){
        if (this.isEmpty()) {
            console.log("empty");
            return
        }else{
            let i
            let str=''
            for(i=this.front;i!==this.rear;i=(i+1)%this.capacity){
                str+=this.item[i]+" "
            }
            str+=this.item[i]
            console.log(str);
            return str
        }
    }
   
}

const queues=new CircularQueue(5)
console.log(queues.isEmpty());
queues.enqueue(10)
queues.enqueue(20)
queues.enqueue(30)
console.log(queues.isEmpty());
console.log(queues.peek());
queues.print()