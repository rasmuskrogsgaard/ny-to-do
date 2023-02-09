let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra() {
   myExtras.push(myExtrasInput.value);

    console.log(myExtras);
    updateExtras();


}



function updateExtras() {

    let myText = '<strong> Du har valgt:</strong><br><ul>';
    
    myExtras.map((items )=> {
    console.log('item: ' + items);
    myText = myText + '<li>'+ items + '</li>';
    console.log('text: ' + myText);

    }
    
    );


    myText= myText + '</ul>';
    console.log(myText);
    myExtrasListElement.innerHTML = myText;


}

