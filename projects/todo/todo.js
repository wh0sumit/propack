$('document').ready(()=>{
  function appendTaskToList(val) {
    $('.list-group').append(`<li class="list-group-item d-flex justify-content-between align-items-center">${val}<i class="fas fa-times remove"></i></li>`);
  }
  
  
  if (localStorage['todos']) {
    var todos = JSON.parse(localStorage['todos']);
  }else {
    var todos = [];
  }
  
  for(var i=0;i<todos.length;i++) {
    appendTaskToList(todos[i]);
  }
  
  var addTask = function(){
    // get value from #name input
    var val = $('.input').val();
    
    // add the task to the array
    todos.push(val);
    
    // save to local storage
    localStorage["todos"] = JSON.stringify(todos);
    
    // append the name to the list
    appendTaskToList(val);
    
    // reset the input field and focus it.
    $('.input').val("").focus();
  }
  
  $('.add').click(addTask);
  $('.input').keyup(function(e){
    if (e.keyCode === 13) {
        addTask();
    }
  });
  
  

  $('.remove').click(function(){
    let value = $(this).parent('li');
    value.remove();
     removeLocalTodo(value);
     
  });
 
      
  

});   





