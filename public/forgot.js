const form = document.getElementById('forgot-password-form');
const emailField = document.getElementById('email');
const baseUrl = `http://18.212.164.153:3000`;

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const email = emailField.value;
        console.log(email);
        let res = await axios.post(`${baseUrl}/password/forgotpassword`,{email: email});
        if(res.status === 200) {
            alert(res.data.message);
            window.location.href ='login.html';
        }
    } catch (error) {
        console.log(error);
    }
})