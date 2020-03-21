let myImg = document.querySelector('img');
myImg.onclick = function(){
    let mySrc = myImg.getAttribute('src');
    if(mySrc === 'images/pig.jpg'){
        myImg.setAttribute('src', 'images/pig2.jpg');
    }else{
        myImg.setAttribute('src', 'images/pig.jpg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('input your name');
    if(!myName || myName == null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}