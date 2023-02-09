let myList = [];
const myListInput = document.getElementById('input-t');
const mySubmit = document.getElementById('input-sub');
const myListElement = document.getElementById('result');
const myDelbutton = document.getElementById('delete-b')

mySubmit.addEventListener("click", addListElement);
myDelbutton.addEventListener("click", removeElement);


function addListElement() {
   myList.push(myListInput.value);

    console.log(myList);
    updateList();


}

function removeElement(){
    myList.shift(myListInput.value);
    console.log(myList);
    updateList();

}


function updateList() {

    let myText = '<strong> Du har valgt:</strong><br><ul>';
    
    myList.map((items )=> {
    console.log('item: ' + items);
    myText = myText + '<li>'+ items + '</li>';
    console.log('text: ' + myText);

    }
    
    );


    myText= myText + '</ul>';
    console.log(myText);
    myListElement.innerHTML = myText;


}

