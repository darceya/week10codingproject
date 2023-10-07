let id = 4;

document.getElementById('add').addEventListener('click', () => {
    let createDate = new Date();
    let table = document.getElementById('members');
    let row = table.insertRow(-1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('firstName').value;
    row.insertCell(1).innerHTML = document.getElementById('lastName').value;
    row.insertCell(2).innerHTML = document.getElementById('membershipType').value;
    row.insertCell(3).innerHTML = `${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`;
    let cancel = row.insertCell(4);
    cancel.appendChild(createCancelButton(id++));
    document.getElementById('firstName').value = ''; 
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('membershipType').value = '';
}); 

function createCancelButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Cancel';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToCancel = document.getElementById(`item-${id}`);
        elementToCancel.parentNode.removeChild(elementToCancel);
    };
    return btn; 

}