// import React from 'react'

export default function App() {
  //basis..........................................

  const name: string = "roopesh"; //not needed
  const fname = 7; //best -> type inference

  console.log(name, fname);

  function addNum(num1: number, num2: number): number {
    return num1 + num2;
  }

  const addNum2 = (num1: number, num2: number): number => {
    return num1 + num2;
  };
  console.log(addNum(10, 7));
  console.log(addNum2(10, 7));

  const arr = ["a", "b", "c"];

  const arr2 = arr.map((ele: string): string => {
    //ele:string was not needed it was infered defaulty...
    return `ele is ${ele}`;
  });

  console.log(arr2);
  console.log(arr);

  function printHai(): void {
    //again infered not needed (void)
    console.log("hello");
  }
  printHai();

  // function genError(): never {
  //   throw Error("haha");
  // }

  //1
  function createUser({ name, age }: { name: string; age: number }): {
    // ({params}:{types}):{return types ->when obj}{ body}
    name: string;
    age: number;
  } {
    name.toLocaleLowerCase();
    age.toString();
    return { name, age };
  }
  createUser({ name: "roop", age: 10 });

  //2
  //using same type more  times then create one
  type User = {
    name: string;
    age: number;
  };
  function createUser2(obj: User): User {
    return obj;
  }
  const obj = {
    name: "roop",
    age: 100,
  };
  createUser2(obj);

  //3 readonly
  type User2 = {
    readonly id: string; // if id was string then we can do push opr even it was read-only
    name: string;
    optionalParameter?: boolean; // this paramter can be used or not optional -> '?'
  };
  const user: User2 = {
    id: "11",
    name: "roop",
  };
  user.name = "roopesh";
  // user.id="123"

  const allUsers: User2[] = [];
  // allUsers.push("hai")
  allUsers.push(user);

  const twoD: number[][] = [];
  twoD.push([1, 2, 3]);
  // twoD.push(123)

  //unions................

  let score: number | string = 100;
  score = "won";
  console.log(score);

  // person : user| admin  aa user can be changed to admin in future ->here admin and user are types

  function sample(id: number | string) {
    // id.toUpperCase() -> IDE error because type is union
    if (typeof id === "string") {
      id.toUpperCase(); // type was string only ....
    }
  }
  sample(100);

  const arr1: (number | string)[] = [1, "1"]; //number [] | string [] was wrong it says all strings or all numbs
  console.log(arr1);

  let limitedVals: "A" | "B" = "A";
  limitedVals = "B";
  // limitedVals="C"

  let tuple: [string, number];
  tuple = ["hai", 1];
  // tuple=[2,"hello"]

  let rgb: [number, number, number];
  rgb = [0, 0, 255];

  //interfaces   --> same as types
  interface UserIF {
    readonly id: number;
    name: string;
    age: number;
  }
  interface UserIF {
    emial: string; //reopening of interface
    weCanHaveMethods?(): string; //optional symobol give string was return tpype
  }

  const IfUser: UserIF = {
    id: 1,
    name: "roope",
    age: 100,
    emial: "dd",
  };
  console.log(IfUser);

  //classes
  class UserC {
    name: string; //all variables should be given before constructor only ....
    age: number;
    email?: string;
    private xyz: string = ""; //cannot acces outside class

    private _cnt = 1;
    constructor(x: string, y: number) {
      this.name = x;
      this.age = y;
      console.log(this.xyz);
    }

    get cntval(): number {
      return this._cnt;
    }

    set cntval(num: number) {
      //setters cannot have return type even void aslo, it must left like this
      this._cnt = this._cnt + num;
    }
  }

  const userobj = new UserC("roop", 100);
  console.log(userobj.cntval);

  //generics

  function adding<T>(x: T): T {
    return x;
  }
  adding<number>(10);
  return <div>App</div>;
}
