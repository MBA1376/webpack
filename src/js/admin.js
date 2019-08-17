import '../styles/index.scss';
let isClose = true;
const collapseDropDown = () => {
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.opacity === "1") {
        content.style.opacity = "0";
        content.style.maxHeight = '0';
      } else {
        content.style.opacity = "1";
        content.style.maxHeight = '150px';
      }
    });
  }
}

const toggleSideBar = () => {
  
  let toggler = document.getElementsByClassName('sidebar-toggle')[0];

  toggler.addEventListener('click' , () => {
    if(isClose) {
      document.getElementsByClassName('sidebar')[0].style.width = '265px'; 
      document.getElementsByClassName('user-area')[0].style.display = 'flex';
      document.getElementsByClassName('lists')[0].style.display = 'block';
      document.getElementsByClassName('sidebar-toggle')[0].style.left = '3px';
     //document.getElementsByClassName('page-container')[0].style.gridTemplateColumns = '2.3fr .7fr';

      // if(window.innerWidth >= 1536) {
      //   document.getElementsByClassName('main-area')[0].style.marginRight = '-180px';
      // }
      // if(window.innerWidth <= 1295) {
      //   document.getElementsByClassName('main-area')[0].style.marginRight = '0px';
      // }

      isClose = !isClose;
    }
    else {
      document.getElementsByClassName('sidebar')[0].style.width = '60px';
      document.getElementsByClassName('user-area')[0].style.display = 'none';
      document.getElementsByClassName('lists')[0].style.display = 'none';
      document.getElementsByClassName('sidebar-toggle')[0].style.left = '18px';
      //document.getElementsByClassName('page-container')[0].style.gridTemplateColumns = '2.9fr .1fr';

      // if(window.innerWidth >= 1536) {
      //   document.getElementsByClassName('main-area')[0].style.marginRight = '-290px';
      // }

      // if(window.innerWidth <= 1295) {
      //   document.getElementsByClassName('main-area')[0].style.marginRight = '0px';
      // }
      
      isClose = !isClose;
    }
  });
}

setInterval( () => {
  console.log(window.innerWidth);
} , 1000);
collapseDropDown();
toggleSideBar();