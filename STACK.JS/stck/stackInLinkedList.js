class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.head=null
        this.size=0
    }
    push(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
    }
    pop(){
        if(!this.head){
            return "list is empty"
        }
        let value=this.head.value
        this.head=this.head.next
        return value
    }
    peek(){
        return this.head.value
    }
    print(){
        list=''
        let curr=this.head
    while (curr) {
        list+=curr.value
        curr=curr.next
    }
    }

}

const stack=new Stack()
stack.push(10)
stack.push(20)
console.log(stack.peek());
stack.pop()
console.log(stack.peek());

