
 const apiUrl = ""; // Change if backend URL is different
 = ""; // Change if backend URL is different

// Handle login
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        try {
            const response = await fetch(apiUrl + '/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                window.location.href = 'dashboard.html';
            } else {
                document.getElementById('errorMessage').innerText = data.message || 'Login failed';
            }
        } catch (error) {
            document.getElementById('errorMessage').innerText = 'Server error';
        }
    });
}

// Handle logout
if (document.getElementById('logoutButton')) {
    document.getElementById('logoutButton').addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = 'index.html';
    });
}
