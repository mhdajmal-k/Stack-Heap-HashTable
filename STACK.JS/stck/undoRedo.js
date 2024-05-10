// class Stack {
//     constructor() {
//         this.stack = [];
//         this.currentIndex = -1;
//     }

//     push(value) {
//         // If there are elements after the current index, remove them
//         if (this.currentIndex < this.stack.length - 1) {
//             console.log("1");
//             this.stack.splice(this.currentIndex + 1);
//         }
//         this.stack.push(value);
//         this.currentIndex++;
//         console.log(this.stack)
//     }

//     undo() {
//         if (this.currentIndex > 0) {
//             this.currentIndex--;
//             return this.stack[this.currentIndex];
//         } else {
//             console.log("No more undo operations available.");
//             return null;
//         }
//     }

//     redo() {
//         if (this.currentIndex < this.stack.length - 1) {
//             this.currentIndex++;
//             return this.stack[this.currentIndex];
//         } else {
//             console.log("No more redo operations available.");
//             return null;
//         }
//     }

//     getCurrentState() {
//         return this.stack[this.currentIndex];
//     }

//     print() {
//         console.log(this.stack);
//     }
// }

// // Example usage:
// const stack = new Stack();
// stack.push("State 1");
// stack.push("State 2");
// stack.push("State 3");
// stack.print(); // Output: ["State 1", "State 2", "State 3"]
// stack.undo(); // Undo to previous state
// console.log(stack.getCurrentState()); // Output: State 2
// stack.redo(); // Redo to next state
// console.log(stack.getCurrentState()); // Output: State 3

class Stack{
    constructor(){
        this.item=[]
        this.curr=-1
    }
    push(value){
        this.item.push(value)
        this.curr++
    }
    undo(){
        if(this.curr>0){
            this.curr--
            return this.item[this.curr]
        }else{
            console.log("no more opration");
            return
        }
    }
    redo(){
        if (this.item.length-1>this.curr) {
            this.curr++
            return this.item[this.curr]
        }else{
            console.log("no more opration");
            return
        }
    }
    getCurrent(){
        return this.item[this.curr]
    }
    print(){
        console.log(this.item);
    }
}

const stack=new Stack()
stack.push(10);
stack.push(20)
stack.undo()
console.log(stack.getCurrent());