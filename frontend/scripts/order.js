// ENDPOINT

const ENDPOINT = 'http://localhost:5000/api/orders/';

// VARIABLES
// --- DOMElements
const form = document.querySelector('form');

// Functions

// Events
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = e.target.elements.fname.value;
  let surname = e.target.elements.lname.value;
  let email = e.target.elements.email.value;
  let phoneNr = e.target.elements.phone.value;
  let tableType = e.target.elements['table-type'].value;
  let color = e.target.elements['table-color'].value;
  let dimensions = e.target.elements['table-dimensions'].value;
  let wood = e.target.elements['table-material'].value;

  fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      surname,
      email,
      phoneNr,
      tableDesc: {
        tableType,
        color,
        dimensions,
        wood,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => console.log(result));
});
