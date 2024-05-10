class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor(){
        this.head=null
        this.tail=null
    }
    enqueue(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
    }
    dequeue(){
        if(!this.head){
            console.log("no values");
            return 

        }
            let removeValue=this.head
            this.head=this.head.next
            return removeValue
        
    }
    peek(){
        if(!this.head){
            console.log("no values");
            return 

        }
        return this.head.value
    }
    display(){
        let list=''
        let curr=this.head
        while (curr) {
         list+=curr.value+" "
         curr=curr.next   
        }
        console.log(list);
    }
}

const queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.display()
queue.dequeue()
queue.display()