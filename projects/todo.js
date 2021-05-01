const addForm = document.querySelector(".add");
let list = document.querySelector(".todos");
const search = document.querySelector(".search > .form-control");

const generateTemplate = (todo) => {
  const item = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <span class="delete">×</span>
      </li>`;
  list.innerHTML += item
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const todo = addForm.add.value.trim();
  if(todo.length) {
    generateTemplate(todo)
    addForm.reset()
  }
  
});

// Delete todo
list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove()
  }
})

// filter todos
const filterTodo = term => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));
  
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
}
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase()
  filterTodo(term)
})

