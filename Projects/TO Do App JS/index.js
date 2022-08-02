console.log('Todo App JS');
const clickAddList = document.getElementById('tasks');
clickAddList.setAttribute('onclick', 'popUpBox()');
clickAddList.style.cursor = 'pointer';
const containerSlotsMain = document.getElementsByClassName('contains-slots');
const popUp = document.getElementsByClassName('popup_list');


popUp[0].style.display = 'none';
const blurMain = document.getElementById('main');

const navigateToSeparateSlot = document.getElementById('navTitle');
navigateToSeparateSlot.style.display = 'none';
function pop() {
    blurMain.style.filter = 'blur(5px)';
    navigateToSeparateSlot.style.filter = 'blur(5px)';
    //document.querySelector('body').style.overflow = 'hidden';
    popUp[0].style.display = 'block';
}
let array = [];
let count = 0;
function increaseValueOfId() {  //this function for counting no of slots and assign id's for slots.
    return count++;
}

let countItems = 0;
function increaseCountOfItems() { //this function for counting no of items in the individual slots and assign id's for items.
    return countItems++;
}

function popUpBox() {
    pop();
    popUp[0].innerHTML = `
    <p><span class="add">Add New List</span></p>
    <input type="text" name="addList" class = "textBoxList" id="textBoxAddList"><br><br>
    <button class="add-button" onclick="added()">ADD</button>
    <button class="close-button" onclick="closed()">Close</button>`;

}
function anotherAdding(){
    blurMain.style.display = 'block';  
    navigateToSeparateSlot.style.display = 'none';
}
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
    <p class="list_head" id= "titleClick${id}">${tripTitle}</p><hr>
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
            containerSlotsMain[0].insertBefore(elementForSlots, containerSlotsMain[0].children[id]); //Inserting the to the same position using insertBefore Method with the help of id.
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
            //pop();
            popUp[0].innerHTML = `
            <p><span class="add">
                Are you sure want to delete
                </span></p>
            <p id = 'title'>${tripTitle} ?</p>     
            <button class="add-button" id = "deleteConfirm${id}">&check;</button>
            <button class="close-button" onclick="closed()">X</button>`;
            document.getElementById(`delete${id}`).onclick = function () {
                document.querySelector('#containsSeparateSlot').removeChild(elementForSlots);
                navigateToSeparateSlot.style.display = 'none';
                blurMain.style.display = 'block';
                closed();
            }
        }

    }
        document.getElementById(`delete${id}`).onclick = function () {
            document.querySelector('.contains-slots').removeChild(elementForSlots);
        closed();
        }
    }

function closed() {
    popUp[0].style.display = 'none';
    blurMain.style.filter = 'blur(0px)';
    navigateToSeparateSlot.style.filter = 'blur(0px)';
     //document.querySelector('body').style.overflow = 'visible';
}
