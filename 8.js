document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username === "juli" && password === "78") {
        alert("Login berhasil!");
        window.location.href = "efek loading.html"; // Ganti dengan halaman tujuan
    } else {
        alert("Username atau password salah!");
    }
    function logout() {
        alert("Anda telah berhasil logout.");
        window.location.href = "login.html"; // Redirect ke halaman login
    }
    
});