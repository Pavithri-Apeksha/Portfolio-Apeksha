document.getElementById('downloadBtn').addEventListener('click', () => {
    console.log("Click");
    
    const link = document.createElement('a');
    link.href = 'Other/Apeksha_CV.pdf';
    link.download = 'Apeksha_CV.pdf'; 
    link.click(); 
})