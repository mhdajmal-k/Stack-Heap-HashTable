class QueueUsingStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(element) {
        //move all elements from stack1 to stack2
        while(this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
        //add new element to stack1
        this.stack1.push(element);

        //move all elements back from stack2 to stack1
        while(this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop());
        }
    }

    dequeue() {
        if(this.isEmpty()) {
            return "Oops, the queue is empty"
        }
        return this.stack1.pop();
    }

    front() {
        if(this.isEmpty()) {
            return "Oops, the queue is empty";
        }
        return this.stack1[this.stack1.length - 1]
    }

    isEmpty() {
        return this.stack1.length === 0
    }

    size() {
        return this.stack1.length;
    }
}
