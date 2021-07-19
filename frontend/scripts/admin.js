// API
const ENDPOINT = 'http://localhost:5000/api/orders/';

// VARIABLES
// --- DOMElements
const orderContainer = document.querySelector('#orders--admin-container');

// FUNCTIONS
const displayOrders = () => {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((result) => {
      // Displaying orders to DOM using innerHTML and reduce
      orderContainer.innerHTML += result.reduce((a, v) => {
        a += `
        <div >
          <div>
            <h3 class="contacts">${v.name} ${v.surname}</h3>
            <p class="contacts">${v.email}</p>
            <p class="contacts">${v.phoneNr}</p>
          </div>
          <div >
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Color</th>
                  <th>Dimensions</th>
                  <th>Wood type</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${v.tableDesc.tableType}</td>
                  <td>${v.tableDesc.color}</td>          
                  <td>${v.tableDesc.dimensions}</td>          
                  <td>${v.tableDesc.wood}</td>
                </tr>  
              </tbody>
            </table>       
          </div>
          <div class="switch-container">
            <button value="${v._id}" class="status-btn" data-status="${v.status}"><span class="material-icons">pending</span></button>
          </div>
        </div>
        `;
        return a;
      }, '');

      // Grabbing created  button and adding event click
      const statusBtn = document.querySelectorAll('.status-btn');
      statusBtn.forEach((btn) => {
        // Setting button style depending on status
        if (btn.dataset.status === 'true') {
          btn.innerHTML = `<span class="material-icons"> check_circle </span>`;
          btn.style.backgroundColor = '#52ad9c';
          btn.setAttribute('disabled', 'disabled');
          btn.style.cursor = 'not-allowed';
        } else {
          btn.innerHTML = `<span class='material-icons'>pending</span>`;
          btn.style.backgroundColor = '#fec600';
        }
        btn.addEventListener('click', updateOrderStatus);
      });
    });
};

// Fetching for PUT request
const updateFetchFunc = (id, status) => {
  fetch(ENDPOINT + id, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(status),
  })
    .then((response) => response.json())
    .then((result) => console.log(result));
};

const updateOrderStatus = (e) => {
  let button = e.target;
  const id = e.target.value;
  button.innerHTML = `<span class="material-icons"> check_circle </span>`;
  button.style.backgroundColor = '#52ad9c';

  updateFetchFunc(id, { status: true });
};

// EVENTS
document.addEventListener('DOMContentLoaded', displayOrders);
