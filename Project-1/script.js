// We select HTML elements 
document.getElementById('input-text');
document.getElementById('js-add-me-button');
document.getElementById('task-list');

// now i add in variable using cosnt
const inputText = document.getElementById('input-text');
const addButtion = document.getElementById('js-add-me-button');
const taskList = document.getElementById('task-list');

// now i am adding in function
addButtion.addEventListener('click', function () {
  // get input value
  const task = inputText.value
  // we create a list using javascript in HTML 
  const li = document.createElement('li');
  // adding text
  li.textContent = task;

  // show on page 
  taskList.appendChild(li);
  // clear input box 
  inputText.value = '';
})


