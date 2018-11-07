const navButtons = document.querySelectorAll('#navbar ul li');
const navBar = document.querySelector('#navbar');

function wrapper() {
    
    const changeColor  = () => {
        //toggle class red on navBar
        navBar.classList.toggle('red');
    };
    
    const loopThrough = () => {
      let thisButtonText = this.childNodes[0].nodeValue;
      let thisButtonLength = thisButtonText.length;

    for (let i = 0; i < thisButtonLength; i++) {
        changeColor(); //run function
    }

  };
  loopThrough();
};

for(let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', wrapper);
};
