<script setup>

</script>
<template>
    <section class="login">
    <div class="login-container">
        <div class="user-icon">👤</div>
        <form>
            <input type="text" placeholder="Username" required>
            <input type="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    </div>
</section>
</template>
<style scoped>
      

        .login{
            display: flex;
            width: 100%;
            height: 100vh;
            justify-content: center;
            align-items: center;
        }

        .login-container {
            width: 100%;
            max-width: 400px;
            background-color: #ffffff;
            padding: 40px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            text-align: center;
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .login-container .user-icon {
            font-size: 60px;
            color: #555;
            margin-bottom: 20px;
        }

        .login-container input[type="text"],
        .login-container input[type="password"] {
            width: 100%;
            padding: 12px 20px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 6px;
            background-color: #f9f9f9;
            font-size: 16px;
        }

        .login-container button {
            width: 100%;
            padding: 12px;
            background-color: #007bff;
            border: none;
            border-radius: 6px;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .login-container button:hover {
            background-color: #0056b3;
        }

        input::placeholder {
            color: #aaa;
        }
</style>
