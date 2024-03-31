/*const add=(a, b)=>{
    return a+b;
}

const solution=(a, b, add)=>{
    console.log("before addding funciton");
    return add(a, b)
}
const ans =solution(5, 10, add);
console.log(ans);
const params=()=>{
    return "I am param of other function"
}

const outPutFun=(args)=>{
    console.log("before params execute");
    return args();
}
console.log(outPutFun(params));

const additon=(a)=>{
    return (b)=>{
        return a+b;
    }
}

const add1=additon(8);
console.log(add1(5));


function person(name , age , school) {
    
    console.log(name , "before this key word use");
    function getAge() {
        console.log(age,school);
    }
    return getAge;
}

const a=person("riya", 26, "nav jeevan");
a();


function details(text="N/A"){
    return this.fname+" - "+this.lname +" "+ text;
}

const p1={
    fname:"riya",
    lname:"singh",
    age:42,
    getage(data){
        return this.age+data
    }

}
const p2={
    fname:"rahul",
    lname:"yadav",
    age:77,
}

// console.log(p1, p2);
const fullname=details.call(p1);
const fullname1=details.call(p2 ,"is a great leander");
console.log(fullname1);
console.log(fullname);
console.log(p1.getage(" year old"));
console.log(p1.getage.call(p2, " too old"));

const fullNameByApply=details.apply(p1, ["is my hot gf"]);
console.log(fullNameByApply);
const binding=details.bind(p1);
console.log(binding(" is good girl"));


let add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = a + b;
      res > 10
        ? resolve(res)
        : reject("result is not to good to go ahead for subtraction thanks");
    }, 1000);
  });
};

let sub = (a) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const innerval = 20;
      innerval > a
        ? reject(
            "the result of previous solution is not enough for this solution"
          )
        : resolve(a - innerval);
    }, 1000);
  });
};

add(8, 5).then((data)=>{
    console.log(data);
    return sub(data);
})
.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("the code is executed successfully");
})
const cleanup = () => {
  console.log("done code executed");
};

const execution = async() => {
  try {
    const ans = await add(10, 5);
    const ans1 = await sub(ans);
    console.log(ans1);
  } catch (error) {
    console.log(error);
  } finally {
    cleanup();
  }
};
execution();
*/

const order=(callback1, callback2, callback3)=>{
    console.log("customer enter inside the restaurant");
}