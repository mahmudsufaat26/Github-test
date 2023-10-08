 const form = document.getElementById('form');
 const table = document.getElementById('table');
 const tbody = table.querySelector('tbody');

 form.addEventListener('submit', (e) => {
   e.preventDefault();
   const name = e.target.name.value;
   const age = e.target.age.value;
   const address = e.target.address.value;
   const row = document.createElement('tr');
   const nameCell = document.createElement('td');
   const ageCell = document.createElement('td');
   const addressCell = document.createElement('td');
   const actionCell = document.createElement('td');
   const removeButton = document.createElement('button');
   nameCell.textContent = name;
   ageCell.textContent = age;
   addressCell.textContent = address;
   removeButton.textContent = 'Remove';
   removeButton.addEventListener('click', () => {
     row.remove();
   });
   actionCell.appendChild(removeButton);
   row.appendChild(nameCell);
   row.appendChild(ageCell);
   row.appendChild(addressCell);
   row.appendChild(actionCell);
   tbody.appendChild(row);
   e.target.reset();
 });