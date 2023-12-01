function createListItem() {
  const listItemContent = prompt('Введите содержимое пункта списка:');
  if (listItemContent === null || listItemContent === '') {
    return;
  }

  const listItem = document.createElement('li');
  listItem.textContent = listItemContent;

  document.getElementById('list').appendChild(listItem);

  createListItem();
}

createListItem();