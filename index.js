let id = 0;

document.getElementById('create').addEventListener('click', () => {
	let createDate = new Date();
	let docTable = document.getElementById('entry-log');
	let newRow = docTable.insertRow(1);
	newRow.setAttribute('id', `item-${id}`);
	newRow.insertCell(0).innerHTML = `${
		createDate.getMonth() + 1
	}/${createDate.getDate()}/${createDate.getFullYear()}`;
	newRow.insertCell(1).innerHTML = document.getElementById('category').value;
	newRow.insertCell(2).innerHTML =
		document.getElementById('journal-entry').value;
	let actions = newRow.insertCell(3);
	actions.appendChild(deleteButton(id++));
	document.getElementById('journal-entry').value = '';
});

function deleteButton(id) {
	let actionButton = document.createElement('button');
	actionButton.className = 'btn btn-primary';
	actionButton.id = id;
	actionButton.innerHTML = 'Delete';
	actionButton.onclick = () => {
		console.log(`Deleting row with id: item-${id}`);
		let elementToDelete = document.getElementById(`item-${id}`);
		elementToDelete.parentNode.removeChild(elementToDelete);
	};
	return actionButton;
}
