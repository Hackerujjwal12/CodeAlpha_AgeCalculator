function calculateAge() {
    let dob = document.getElementById('dob').value;
    if (dob) {
        let birthDate = new Date(dob);
        let today = new Date();
        
        let age = today.getFullYear() - birthDate.getFullYear();
        let month = today.getMonth() - birthDate.getMonth();
        let day = today.getDate() - birthDate.getDate();
        
        if (month < 0 || (month === 0 && day < 0)) {
            age--;
        }
        
        document.getElementById('result').innerText = `Your age is ${age} years.`;
    } else {
        document.getElementById('result').innerText = 'Please enter your date of birth.';
    }
}
