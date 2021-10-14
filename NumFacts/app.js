let favNum=6;
let baseURL="http://numbersapi.com";


//1
$.getJSON(`${baseURL}/${favNum}?json`).then(res => console.log(res));



let favNumbers=[6,15,24]
$.getJSON(`${baseURL}/${favNumbers}/json`).then(data => console.log(data));


Promise.all(
    Array.from({length:4}, ()=>{
        return $.getJSON(`${baseURL}/${favNum}?json`);
    })
).then(fact =>{
 fact.forEach(data=>$('body').append(`<p> ${data.text}</p>`));
});