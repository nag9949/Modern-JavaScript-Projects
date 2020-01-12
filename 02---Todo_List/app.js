//** Todo-list */
const addNewTodoForm = document.querySelector('.addTodo');
const list = document.querySelector('.todos');

const search = document.querySelector('.search input');

//.... add new todo  to the list
const generateTemplate = newtodo => {

  const htmlTemp = ` 
<li class="list-group-item d-flex justify-content-between align-items-center">
<span>${newtodo}</span>
<i class="far fa-trash-alt delete"></i>
</li>
`;

  list.innerHTML += htmlTemp;

};

//..Add -new-Todo in action
addNewTodoForm.addEventListener('submit', e => {
  e.preventDefault();

  const newtodo = addNewTodoForm.add.value.trim();

  if (newtodo.length) {
    generateTemplate(newtodo); //.. it method perform the remaining process of adding new todo to the list
    addNewTodoForm.reset();
  }

});

//..... Delete-Todo
list.addEventListener('click', e => {

  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }

});

//...Search-Todo
const filterTodo = (eachElement) => {

  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(eachElement))
    .forEach(todo => todo.classList.add('filtered'));

  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(eachElement))
    .forEach(todo => todo.classList.remove('filtered'));

};

//.....key-up events
search.addEventListener('keyup', (e) => {

  const eachElement = e.target.value.trim().toLowerCase();

  filterTodo(eachElement); //.. this method checks wehter searching data present in list or not.

});