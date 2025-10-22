class PageHistory {
  // visit page , 2, 3, back -> 2 back -> 1
  constructor() {
    this.backStack = [];
  }

  current() {
    return this.backStack[this.backStack.length - 1];
  }
  // remember the visited page
  vist(url) {
    this.backStack.push(url);
  }

  // returns the last previouse page
  back() {
    this.backStack.pop();
  }
  printBackStack() {
    console.log(this.backStack);
  }
}

const history = new PageHistory();

history.vist("google.com");

history.vist("google.com/1");
history.vist("google.com/2");
history.back(); //"google.com/1")
history.printBackStack();
console.log(history.current());
