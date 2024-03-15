let input = document.getElementById('input');
let button = document.getElementById('btn');
let errMsg = document.getElementById('err')


button.onclick = function(){
    if (input.value === ''){
     let error =  errMsg.innerHTML = "Error!!!! Please input a value"
     setInterval(() => stopError(), 3000);
    }
}

function stopError (){
    errMsg.style.display = "none"
}