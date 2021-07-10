// async function
async function fetchAsync () {
     // await response of fetch call
     let response = await fetch('./Suggestion.json');
     // only proceed once promise is resolved
     let data = await response.json();
     // only proceed once second promise is resolved
     return data;
   }
   
   // trigger async function
   // log response or catch error of fetch promise
   fetchAsync()
       .then(data => data.forEach(dataShow))
       .catch(reason => console.log(reason.message))
   let count =0;
       function dataShow(data){
          let card = `<div class="col-md-4 my-1">
          <div class="card h-100 shadow-sm">
               <div class="card-body p-4">
                    <h5 class="card-title fw-bold">${data.poolNumber}</h5>
                    <p class="card-text">
                         ProPack To Do is a task management web app to help you stay organized and manage
                         your
                         day-to-day.</p>
               </div>
               <div class="d-flex justify-content-between m-3">
                    <a href="/projects/todo/todo.html"
                         class="btn btn-secondary-custom text-light rounded-pill align-self-center">Live
                         Preview</a>
                    <a href="https://github.com/WH0SUMIT/propack/tree/main/projects/todo"
                         class="text-decoration-none text-black align-self-center"> <i
                              class="fab fa-github fs-1 align-self-center mx-3 "></i></a>
               </div>
          </div>
     </div>`;
     $('.cards').append(card);
        count++;
       }
  

