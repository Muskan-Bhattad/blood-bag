// Get references to HTML elements
const deliveryForm = document.getElementById('deliveryForm');
const displayInfo = document.getElementById('displayInfo');
const displayBloodType = document.getElementById('displayBloodType');
const displayPatientName = document.getElementById('displayPatientName');
const displayBloodQuantity = document.getElementById('displayBloodQuantity');
const bloodTypeSelect = document.getElementById('bloodType');

// Function to update blood type color
function updateBloodTypeColor(selectedBloodType) {
    const options = bloodTypeSelect.getElementsByTagName('option');

    for (const option of options) {
        if (option.value === selectedBloodType) {
            option.style.backgroundColor = '#d9534f';
            option.style.color = 'white';
        } else {
            option.style.backgroundColor = '';
            option.style.color = '';
        }
    }
}

// Add event listener for form submission
deliveryForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Form submitted'); // Add this line


    const bloodType = bloodTypeSelect.value;
    const patientName = document.getElementById('patientName').value;
    const bloodQuantity = document.getElementById('bloodQuantity').value;

    // Update the displayed information
    displayBloodType.textContent = `Blood Type: ${bloodType}`;
    displayPatientName.textContent = `Patient Name: ${patientName}`;
    displayBloodQuantity.textContent = `Blood Quantity: ${bloodQuantity}`;

    // Toggle visibility of the display information div
    displayInfo.classList.toggle('show');
});

// Add event listener for blood type color change
bloodTypeSelect.addEventListener('change', function () {
    const selectedBloodType = this.value;
    updateBloodTypeColor(selectedBloodType);
});
