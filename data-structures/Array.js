const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];

strings[2] //O(1)
//push
strings.push('e'); //O(1)

//pop
strings.pop(); //O(1)


//unshift
strings.unshift('x'); //O(n)

//splice
strings.splice(2, 1, 'alien'); //O(n)

console.log(strings); 


//construction:class

class MyArray{
	constructor(){
		this.length = 0;
		this.data = {};
	}

	get(index){
		return this.data[index]
	}

	push(item){
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop(){
		const lastItem = this.data[this.length-1];
		delete this.data[this.length-1];
		this.length--;
		return lastItem;
	}

	delete(index){
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}

	shiftItems(index){
		for (let i = index; i < this.length - 1; i++){
			this.data[i] = this.data[i+1];
		}
		delete this.data[this.length-1];
		this.length--;
	}

}

const newArray = new MyArray();
newArray.push('hello');
newArray.push('world');
newArray.push('!');
newArray.pop();
newArray.delete(0)

console.log(newArray.get(0));

