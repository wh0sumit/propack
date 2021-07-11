$(document).ready(() => {
    //Preloader
    preloaderFadeOutTime = 1500;

    function hidePreloader() {
         var preloader = $('#spinner-wrapper');
         preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();

     let card;
     async function getProjects() {
          // await response of fetch call
          let response = await fetch('./project.json');
          // only proceed once promise is resolved
          let data = await response.json();



          fetchProjects(data);




     }



     function fetchProjects(projects) {
          projects.map(project => {
               card = `<div class="col-md-4 my-1">
               <div class="card h-100 shadow-sm">
                    <div class="card-body p-4">
                         <h5 class="card-title fw-bold">${project.title}</h5>
                         <p class="card-text">${project.description}
                         </p>
                    </div>
                    <div class="d-flex justify-content-between m-3">
                         <a href="${project.live}"
                              class="btn btn-secondary-custom text-light rounded-pill align-self-center">Live
                              Preview</a>
                         <a href="${project.github_url}"
                              class="text-decoration-none text-black align-self-center"> <i
                                   class="fab fa-github fs-1 align-self-center mx-3 "></i></a>
                    </div>
               </div>
          </div>`;
               $('.projectCard').append(card);
          })

     }

     getProjects();

});