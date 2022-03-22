
const taskList = document.querySelector('.task-list');
taskList.addEventListener('click', event => {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.nodeName === 'BUTTON') {
    const listItem = event.target.closest('.task-list-item');
    console.log('list item:', listItem);
    listItem.remove();
  }
});
