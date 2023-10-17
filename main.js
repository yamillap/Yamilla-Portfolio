import './contact.html'




// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.nav-links');

// menu.onclick = () => {
//     // menu.classList.toggle('menu-icon');
//     // navbar.classList.toggle('open');

// }

function isValid() {
    
    const name = document.getElementById('name');
    const add = document.getElementById('address');
    const tel = document.getElementById('tel');

    let nameFlag = false;
    let telFlag = false;

    if (name.value.match(/^[a-zA-Z]+$/)) nameFlag = true; 
    if (tel.value.match(/^[1-9]\d{2}-\d{3}-\d{4}/)) telFlag = true;
    

    if (!nameFlag) alert("Name cannot contain numbers");
    if (!telFlag) alert("Incorrect format, must be xxx-xxx-xxxx");

    if (nameFlag && telFlag) {
        document.getElementById('nameUser').innerHTML = name.value;
        document.getElementById('addUser').innerHTML = add.value;
        document.getElementById('telUser').innerHTML = tel.value;
    }
    
}




