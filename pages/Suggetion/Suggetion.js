const tab = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab-content");

for (let i = 0; i < tab.length; i++) {
     tab[i].onclick = tabActive;
}

function tabActive() {
     for (let i = 0; i < tab.length; i++) {
          this.classList.add("tab-active");

          if (tab[i] !== this) {
               tab[i].classList.remove("tab-active");
          }
     }

     for (let i = 0; i < tabContent.length; i++) {
          tabContent[i].classList.add("tab-content-active");

          if (tab[i] !== this) {
               tabContent[i].classList.remove("tab-content-active");
          }
     }
}