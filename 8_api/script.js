const names=document.querySelector('#name');
const proimage= document.querySelector('#img')
const followers=document.querySelector('#followers');

const reqURL= "https://api.github.com/users/harsh3sahu";

const xhr= new XMLHttpRequest();

xhr.open('GET', reqURL);
xhr.send()

let data
xhr.onreadystatechange = function(){
    data = JSON.parse(this.responseText)
    // console.log(typeof data)
    // console.log(data);
    // console.log(data.followers)
    makeChanges(data.name, data.followers,)
}


const makeChanges= function(name,followers,img){

    names.innerHTML=`<h1> harsh sahu </h1>`




}