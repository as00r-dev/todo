import "./ui/components/root-element/root";
import "./ui/pages/home/home";

import { TodoFactory } from "./logic/app/TodoFactory";
import { TodoList } from "./logic/app/TodoList";

const list1 = TodoList();
const list2 = TodoList();

let i = 0;

for (; i < 5; i++) {
	const todo = TodoFactory();
	todo.createTestTodo();
	list1.pushToList(todo.getTodo());
}

for (; i < 10; i++) {
	const todo = TodoFactory();
	todo.createTestTodo();
	list2.pushToList(todo.getTodo());
}

for (let j = 0; j < list1.getLength(); j++) {
	console.log(list1.getTodoAt(j));
}

for (let j = 0; j < list2.getLength(); j++) {
	console.log(list2.getTodoAt(j));
}
