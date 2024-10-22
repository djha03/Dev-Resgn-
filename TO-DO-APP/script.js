
const textfield=document.createElement('input');
textfield.type='text';
textfield.placeholder="Enter your todo...";
textfield.id="textspace";

const button=document.createElement('button')
button.innerText="Add Todo";

button.addEventListener("click", function(){
 const input=document.getElementById("textspace");
 alert(input.value);
})



const todo=document.getElementById('todo');
todo.append(textfield);
todo.append(button);