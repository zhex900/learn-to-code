// Job queue
//
// job object -> name, task, all text
// property called, name
// getJobName -> return the name of the queue
// addJob -> add job to queue
// nextJob -> will return the first job in the queue and removes it.
// [1,2,3] -> nextJob it should return 1, queue [2,3]
// if no job left, returns null.
// print -> console.log all jobs
// -> 1 name: task
// -> 2 name: task

// const todoQueue = new JobQueue('todo');
// const weekendJobs = new JobQueue('weekend')

class JobQueue {
  constructor(name) {
    this.name = name;
    this.queue = [];
  }

  // add job to the front of the queue
  skipToFirst(job) {
    this.queue.unshift(job);
  }
  merge(queue) {
    this.queue.concat(queue);
  }
  size() {
    return this.queue.length;
  }
  getName() {
    return this.name;
  }
  add(job) {
    this.queue.push(job);
    return this;
  }
  next() {
    return this.queue.shift();
  }
  print(printer) {
    console.log("Job: " + this.name + " " + this.queue.length);

    this.queue.forEach((job, i) => {
      console.log(i, job);
    });
  }
  find(searchKey) {
    return this.queue.find((job) => job.task.includes(searchKey));
  }
  filterBy(searchKey) {
    // filter if it includes the searchKey
    return this.queue.filter((job) => {
      return job.task.includes(searchKey);
    });
  }
  transform(transfomer) {
    //
    this.queue = this.queue.map(transfomer);
    return this;
  }
}
class Job {
  constructor(task) {
    this.task = task;
  }
}

// const todoList = new JobQueue("todo");
// const weekendlist = new JobQueue("weekend");
// todoList
//   .add(new Job("clean up room milk"))
//   .add(new Job("buy milk"))
//   .add(new Job("do homework"))
//   .add(new Job("sleep"))
//   .transform((job) => {
//     job.task = `🤚${job.task}`;
//     job.deadline = "tomorrow";
//     return job;
//   })
//   .transform((job) => {
//     job.task = `${job.task}📌`;
//     return job;
//   });

// // console.log("find --->", todoList.filterBy("milk"));

// todoList.print();

function sum(numbers) {
  // [1,2]
  // 3
  //   let sum = 0;
  //   for (let num of numbers) {
  //     sum += num;
  //   }
  //   return sum;
  function reducer(result, item) {
    return result + item;
  }
  return numbers.reduce(reducer, 0);
}

// console.log(sum([1, 2, 3]));

const priceObject = { banana: 1, pineapple: 2, watermelon: 5 };

/// increase by 1
/// new price list =  { banana: 2, pineapple: 3, watermelon: 6 }

function increasePrice(costIncrease) {
  //   const keys = Object.keys(priceObject);
  //   for (const key of keys) {
  //     const newPrice = priceObject[key] + costIncrease;
  //     priceObject[key] = newPrice;
  //   }

  return Object.keys(priceObject).reduce((result, key) => {
    return {
      ...result,
      [key]: priceObject[key] + costIncrease,
    };
  }, {});
}

console.log(increasePrice(10));
console.log(priceObject);
