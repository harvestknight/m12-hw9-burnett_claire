const navButtons = document.querySelectorAll('#navbar ul li');
const navBar = document.querySelector('#navbar');

function wrapper() {
    const loopThrough = () => {
        let thisButtonText = this.childNodes[0].nodeValue;
        let thisButtonLength = thisButtonText.length;

        for (let i = 0; i < thisButtonLength; i++) {
            console.log('hi');
        }
    };
    loopThrough();
};

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', wrapper);
};