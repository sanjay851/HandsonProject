console.log('Todo App JS');
const clickAddList = document.getElementById('tasks');
clickAddList.setAttribute('onclick', 'popUpBox()');
clickAddList.style.cursor = 'pointer';
const containerSlotsMain = document.getElementsByClassName('contains-slots');
//for popup list
const popUp = document.getElementsByClassName('popup_list');
popUp[0].style.display = 'none';
const blurMain = document.getElementById('main');
//variable assign for seprate new title
const navigateToSeparateSlot = document.getElementById('navTitle');
navigateToSeparateSlot.style.display = 'none';
//this pop() function will call in onclick function.
function pop() {
    blurMain.style.filter = 'blur(5px)';
    navigateToSeparateSlot.style.filter = 'blur(5px)';
    popUp[0].style.display = 'block';
}
//Emty Array to push object
let array = [];
//this function for counting no of slots and assign dynamic id's for slots(child node).
let count = 0;
function increaseValueOfId() {  
    return count++;
}
//this function for counting no of items in the individual slots 
//and assign dynamic id's for items.
let countItems = 0;
function increaseCountOfItems() { 
    return countItems++;
}
//this function for 1st popup box when click add Item on front page.
function popUpBox() {
    pop();
    popUp[0].innerHTML = `
    <p><span class="add">Add New List</span></p>
    <input type="text" name="addList" class = "textBoxList" id="textBoxAddList"><br><br>
    <button class="add-button" onclick="added()">ADD</button>
    <button class="close-button" onclick="closed()">Close</button>`;
}
//this function for when click + icon on new heading then this function apply.
function anotherAdding(){
    blurMain.style.display = 'block';  
    navigateToSeparateSlot.style.display = 'none';
}
//this function contains all the function like add ,delete,close.
function added() {
    let id = increaseValueOfId();
    closed();
     document.getElementById('no-items').style.display = 'none';
    const elementForSlots = document.createElement('div');
    elementForSlots.className = 'slots';
    elementForSlots.id = `slotsId${id} ${id}`
    document.querySelector('.contains-slots').appendChild(elementForSlots);
    const tripTitle = document.getElementById('textBoxAddList').value;
    elementForSlots.innerHTML = `
    <p class="list_head" id= "titleClick${id}">${tripTitle}</p>
    <hr>
    <p id = "contains-item${id}"></p>
    <div class= "addItem">
        <i class="fas fa-trash-alt hovering" id = "delete${id}"></i> &nbsp;
        <i class="fas fa-plus-circle hovering" id = "addNewItemDialogue${id}"></i>
    </div>`
    document.getElementById(`addNewItemDialogue${id}`).onclick = function () {
        pop();
        popUp[0].innerHTML = `
        <p><span class="add">Add New Item</span></p>
        <input type="text" name="" class = "textBoxItem" id="textBoxAddItem${id}"><br><br>
        <button class="add-button" id = "addNewItem${id}">ADD</button>
        <button class="close-button" onclick="closed()">Close</button>`;

        document.getElementById(`addNewItem${id}`).onclick = function () {
            let idForItems = increaseCountOfItems();
            closed();
            let getNewItem = document.getElementById(`textBoxAddItem${id}`).value;
            const addNewItemInSlot = document.createElement('p');
            addNewItemInSlot.id = `item${idForItems}`
            addNewItemInSlot.className = 'addItemsInsideSlot'
            document.querySelector(`#contains-item${id}`).appendChild(addNewItemInSlot);
            addNewItemInSlot.innerHTML = `${getNewItem} <span id = "buttonForItem${idForItems}" class = "buttonForItem"> Mark Done </span><br>`
            const markDone = document.getElementById(`buttonForItem${idForItems}`)
            markDone.onclick = function () {
                const done = document.getElementById(`item${idForItems}`);
                done.style.textDecoration = 'line-through';
                done.style.color = 'red';
                markDone.style.display = 'none';
            }
        }
    }
    document.getElementById(`titleClick${id}`).onclick = function () {
        navigateToSeparateSlot.style.display = 'block';
        blurMain.style.display = 'none';
        navigateToSeparateSlot.style.display = 'block';
        document.getElementById('tripTitleHeader').innerText = tripTitle;
        document.getElementById('containsSeparateSlot').appendChild(elementForSlots);
        document.getElementById('navigateToHome').onclick = function () {
            blurMain.style.display = 'block';
            navigateToSeparateSlot.style.display = 'none';
//Inserting  to the same position using insertBefore Method with the help of id.
            containerSlotsMain[0].insertBefore(elementForSlots, containerSlotsMain[0].children[id]); 
        }
        const addSlotHome = document.getElementById('addSlotInHome');
        addSlotHome.onclick = function () {
            containerSlotsMain[0].insertBefore(elementForSlots, containerSlotsMain[0].children[id]); 
            pop();
            popUp[0].innerHTML = `
            <p><span class="add">Add New List</span></p>
            <input type="text" name="addList" class = "textBoxList" id="textBoxAddList"><br><br>
            <button class="add-button" onclick="added(), anotherAdding()">ADD</button>
            <button class="close-button" onclick="closed()">Close</button>`;
        }
        document.getElementById(`delete${id}`).onclick = function () {
                document.querySelector('#containsSeparateSlot').removeChild(elementForSlots);
                blurMain.style.display = 'block';
                document.getElementById('no-items').style.display = 'block';
                navigateToSeparateSlot.style.display = 'none';
            }
        }
        document.getElementById(`delete${id}`).onclick = function () {
            document.querySelector('.contains-slots').removeChild(elementForSlots);
            document.getElementById('no-items').style.display = 'block';
        }
    }
function closed(){
    popUp[0].style.display = 'none';
    blurMain.style.filter = 'blur(0px)';
    navigateToSeparateSlot.style.filter = 'blur(0px)';
}
