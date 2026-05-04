import { LinkedList } from "./linked-list.js";

const myList = new LinkedList();

myList.append("dog");
myList.append("cat");
myList.append("parrot");
myList.append("snake");
myList.append("lion");

console.log(myList.toString());