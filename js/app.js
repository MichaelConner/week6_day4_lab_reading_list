document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form')
    form.addEventListener('submit', handleFormSubmit)
    document.getElementById(selector).reset();
})

const handleFormSubmit = function (event) {
  // console.log(event);
  event.preventDefault();

  const formResultDiv = document.querySelector('#reading-list')
    formResultDiv.appendChild(newBookItem(event))
}

const newBookItem = function (event) {
  document.createElement('p')
  newBookItem.textContent =
  `Title: ${event.target.title.value}
  Author: ${event.target.author.value}
  Category: ${event.target.category.value}`
}
