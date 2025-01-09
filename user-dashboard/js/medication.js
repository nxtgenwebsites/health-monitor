document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('addMedicationForm');

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const medication = {
            name: document.getElementById('medicationName').value,
            lastTaken: document.getElementById('lastTaken').value,
            next: document.getElementById('nextDate').value,
            starts: document.getElementById('startDate').value,
            ends: document.getElementById('endDate').value,
            total: document.getElementById('totalPills').value
        };

        // Here you would typically send this data to your backend
        console.log('New medication:', medication);

        // Close the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('addMedicationModal'));
        modal.hide();

        // Reset the form
        form.reset();
    });
});

// Add click handler to the "Add new" button
document.querySelector('.add-new').addEventListener('click', function() {
    const modal = new bootstrap.Modal(document.getElementById('addMedicationModal'));
    modal.show();
});