<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Pendaftaran Akun</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: url(6.jpg);
            margin: 0;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            width: 350px;
            text-align: center;
            transition: transform 0.3s ease-in-out;
        }
        .container:hover {
            transform: scale(1.05);
        }
        h2 {
            color: #333;
            margin-bottom: 20px;
        }
        input {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: 2px solid #ccc;
            border-radius: 8px;
            font-size: 16px;
            outline: none;
            transition: border 0.3s;
        }
        input:focus {
            border-color: #667eea;
        }
        button {
            width: 100%;
            padding: 12px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 18px;
            cursor: pointer;
            transition: background 0.3s;
        }
        button:hover {
            background: #5647a2;
        }
        #message {
            margin-top: 15px;
            font-weight: bold;
            color: #d9534f;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Daftar Akun</h2>
        <form id="registerForm">
            <input type="text" id="username" placeholder="Username" required>
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Password" required>
            <button type="submit">Daftar</button>
        </form>
        <p id="message"></p>
    </div>

    <script>
        document.getElementById("registerForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            let username = document.getElementById("username").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            
            if (username && email && password) {
                localStorage.setItem("username", username);
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
                document.getElementById("message").innerText = "Pendaftaran berhasil! Mengalihkan ke halaman login...";
                document.getElementById("message").style.color = "#28a745";
                setTimeout(() => {
                    window.location.href = "login.html";
                }, 2000);
            } else {
                document.getElementById("message").innerText = "Harap isi semua bidang!";
                document.getElementById("message").style.color = "#d9534f";
            }
        });
    </script>
</body>
</html>
