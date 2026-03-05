function openTicket(type) {
    const message = prompt("Describe your request:");
    if (!message) return;
    alert(type + " request submitted.");
}

function openApplication() {
    alert("Application system coming soon.");
}

function discordLogin() {
    // This will later link to Discord OAuth
    alert("Discord login system requires backend setup.");
}