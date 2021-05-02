$('document').ready(()=>{
  function appendTaskToList(val) {
    $('.list-group').append(`<li class="list-group-item d-flex justify-content-between align-items-center">${val}<i class="fas fa-times remove"></i></li>`);
  }
  
  
  if (localStorage['tasks']) {
    var tasks = JSON.parse(localStorage['tasks']);
  }else {
    var tasks = [];
  }
  
  for(var i=0;i<tasks.length;i++) {
    appendTaskToList(tasks[i]);
  }
  
  var addTask = function(){
    // get value from #name input
    var val = $('.input').val();
    
    // add the task to the array
    tasks.push(val);
    
    // save to local storage
    localStorage["tasks"] = JSON.stringify(tasks);
    
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
  
  
  // approach 1
  /*$('.done-btn').click(function(){
    $(this).parent('li').addClass('done');
  });*/
    
  $('.remove').click(function(){
    let removeKey = $(this).parent('li').text();
      
tasks = tasks.filter(function(item) {
  return item !== removeKey
})

console.log(tasks)
      
    $(this).parent('li').remove();

});   

});




