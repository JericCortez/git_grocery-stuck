class GroceryStack {
    constructor() {
      this.stack = [];
    }
  
    peek() {
      if (this.stack.length === 0) {
        console.log("Stack is empty.");
        return null;
      }
      console.log("Top item:", this.stack[this.stack.length - 1]);
      return this.stack[this.stack.length - 1];
    }
  
    push(item) {
      this.stack.push(item);
      console.log(Pushed "${item}" to the stack.);
      this.peek(); 
      this.print();
    }
  
    pop() {
      if (this.stack.length === 0) {
        console.log("Cannot pop. Stack is empty.");
        return null;
      }
      const removedItem = this.stack.pop();
      console.log(Popped "${removedItem}" from the stack.);
      this.peek();
      this.print();
      return removedItem;
    }
  
    print() {
      console.log("Current Stack:", this.stack);
    }
  }
  
  const groceryStack = new GroceryStack();
  
  for (let i = 0; i < 5; i++) {
    const item = prompt(Enter grocery item ${i + 1}:);
    groceryStack.push(item);
  }
  
  groceryStack.pop();
  groceryStack.pop();