function openTicket(department) {
    const message = prompt("Describe your issue:");

    if (!message) return;

    alert("Ticket sent to " + department + "!");

    // If you want real Discord logging, I can add webhook support next.
}

function submitApplication(event) {
    event.preventDefault();
    alert("Application submitted successfully!");
}