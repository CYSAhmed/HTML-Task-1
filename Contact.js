document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the form
    const form = document.querySelector('form');
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Get the form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Add a new row to the table
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${message}</td>
        `;
        tbody.appendChild(newRow);

        // Clear the form
        form.reset();
    });
});
