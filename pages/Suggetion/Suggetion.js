$(document).ready(() => {
     let card;
     async function getProjects() {
          // await response of fetch call
          let response = await fetch('./suggestion.json');
          // only proceed once promise is resolved
          let data = await response.json();
          fetchProjects(data);
     }



     function fetchProjects(projects) {

          const {
               icons
          } = projects;
          icons.map(icons => {
               card = `<div class="col-md-4 my-1">
               <div class="card h-100 shadow-sm">
                    <div class="card-body text-start p-4">
                         <h5 class="card-title text-start fw-bold">${icons.title}</h5>
                         <p class="card-text">${icons.description}
                         </p>
                    </div>
                    <div class="d-flex justify-content-between m-3">
                         <a href="${icons.live}"
                              class="btn btn-secondary-custom text-light rounded-pill align-self-center" target="_blank">Visit Now</a>
                              <span class="badge align-self-center bg-dark">${icons.format}</span>
                    </div>
               </div>
          </div>`;
               $('.suggestionCard').append(card);
          })

     }

     getProjects();

});