let togglebtn = document.getElementById('theme_toggler')
let body = document.body
let darkMode = localStorage.getItem('darkmode')

const enableDarkMode = () =>{
    togglebtn.classList.replace('fa-sun','fa-moon');
    body.classList.add('dark');
    localStorage.setItem('darkmode' , 'enabled');
}
const disableDarkMode = () =>{
    togglebtn.classList.replace('fa-moon','fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('darkmode' , 'disabled');
}

if(darkMode === 'enabled'){
    enableDarkMode();
}

togglebtn.onclick = (e) =>{
    darkMode = localStorage.getItem('darkmode')
    if(darkMode === 'disabled'){
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }
}