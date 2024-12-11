document.getElementById('downloadBtn').addEventListener('click', () => {
    console.log("Click");
    
    const link = document.createElement('a');
    link.href = 'Other/Apeksha_CV.pdf';
    link.download = 'Apeksha_CV.pdf'; 
    link.click(); 
});
document.getElementById("sendButton").addEventListener("click", () => {
    event.preventDefault();
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Validate form
    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Send data to Google Sheets
    const url = 'https://script.google.com/macros/s/AKfycbwvaJCfBQHbDx_CJDP9W43AFKJ-N1lpAfbvopat9KuVbFDS5jaclqdK2-0zBYa2tGHU/exec';  // Replace with your Web App URL

    const data = new URLSearchParams();
    data.append("name", name);
    data.append("email", email);
    data.append("subject", subject);
    data.append("message", message);

    fetch(url, {
        method: "POST",
        body: data
    })
    .then(response => response.text())
    .then(response => {
        alert("Message sent successfully!");
        console.log("Success:", response);
        document.getElementById("contactForm").reset();
    })
    .catch(error => {
        alert("Failed to send message. Please try again.");
        console.error("Error:", error);
    });
});
