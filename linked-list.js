import {Node} from './node.js'

export class LinkedList {
    constructor(){
        this.head = null;
    }

    append(value){
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.nextNode !== null){
           current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    prepend(value){
        const newNode = new Node(value, this.head);
        this.head = newNode;
    }

    size(){
        let counter = 0;
        let current = this.head;

        while (current !== null){
            counter++;
            current = current.nextNode;
        }
        return counter;
    }

    head(){
        if (this.head === null){
            return undefined;
        }

        return this.head
    }

    tail(){
        if (this.head === null){
            return undefined;
        }
        let current = this.head;
        while (current.nextNode !== null){
            current = current.newNode;
        }
        return current;
    }

    at(index){
        if (this.head === null){
            return undefined;
        }
        let counter = 0;
        let current = this.head;

        while (current !== null){
            if (counter === index){
                return current;
            }
            counter++;
            current = current.nextNode;
        }
        return null;
    }

    pop(){
        if (this.head === null) return undefined;

        const poppedValue = this.head.value;

        this.head = this.head.nextNode;

        return poppedValue;
    }

    contains (value){
        let current = this.head;

        while(current !== null){
            if(current.value === value){
                return true;
            } 
            current = current.nextNode;
        }
        return false;
    }

    findIndex(value){
        let index = 0;
        let current = this.head;

        while (current !== 0){
            if(current.value === value){
                return index;
            }
            index++;
            current = current.nextNode;
        }
        return -1;
    }

    toString(){
        if (this.head === null) return [];

        const myString = [];
        let current = this.head;

        while (current !== null){
            myString.push(`(${current.value})`);
            current = current.nextNode;
        }
        return myString.join(" -> ") + " -> null";
    }


}

