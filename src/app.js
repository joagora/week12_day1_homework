const FormView = require('./views/form_view.js');
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const formView = new FormView();
  formView.bindEvents();
});
