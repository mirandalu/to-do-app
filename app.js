function onReady() {
  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++;

    newToDoText.value = '';
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li'); // <li></li>
      const checkbox = document.createElement('input'); // <input>
      checkbox.type = "checkbox"; // <input type="checkbox">

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete!";

      deleteBtn.addEventListener('click', event => {
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
        })

        renderTheUI();
      });

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi); //<li>Title</li>
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);
    });
  }

  addToDoForm.addEventListener('submit', event => {
  event.preventDefault(); // don't refresh page
  createNewToDo();
});
  renderTheUI();
}

window.onload = function() {
  onReady();
};
