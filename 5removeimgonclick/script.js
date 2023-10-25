// const rem = document.getElementById('.images');

document.querySelector('#images').addEventListener('click',function(e){

    console.log(e.target.parentNode);
    let removeIt=e.target.parentNode;
    if(e.target.tagName === 'IMG'){
        removeIt.remove();
    }
    

})