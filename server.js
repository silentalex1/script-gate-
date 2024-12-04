// Create account API call
createAccountBtn.addEventListener('click', async () => {
    const enteredCode = document.getElementById('code').value;
    const storedCode = sessionStorage.getItem('verificationCode');
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('create-password').value;

    if (enteredCode !== storedCode) {
        alert('Invalid code. Please check your email.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/create-account', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, username, password }),
        });

        const result = await response.json();

        if (response.status === 201) {
            alert(result.message);
            createAccountForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again.');
    }
});

// Login API call
loginButton.addEventListener('click', async () => {
    const username = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (response.status === 200) {
            alert(result.message);
            window.location.href = '/scripts';
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again.');
    }
});
