<script setup>
import { ref } from 'vue';

// Reactive variables for form fields
const username = ref('');
const email = ref('');
const password = ref('');

// Reactive variable for submission status
const submissionStatus = ref('');

// Function to validate the form inputs
const validateForm = () => {
  if (!username.value || !email.value || !password.value) {
    submissionStatus.value = 'All fields are required.';
    return false;
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    submissionStatus.value = 'Please enter a valid email address.';
    return false;
  }

  return true; // Form is valid
};

// Function to handle form submission
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent the default form submission (page reload)

  // Validate form inputs
  if (!validateForm()) {
    return; // Stop submission if validation fails
  }

  // Simulate a successful login submission
  submissionStatus.value = 'Submitting...'; // Show loading message

  setTimeout(() => {
    submissionStatus.value = 'Login successful!'; // Show success message
    clearForm(); // Clear form fields after successful submission
  }, 2000); // Simulate an API call delay
};

// Function to clear the form fields
const clearForm = () => {
  username.value = '';
  email.value = '';
  password.value = '';
};
</script>

<template>
  <section class="login">
    <div class="login-container">
      <div class="user-icon">👤</div>

      <!-- Form -->
      <form @submit="handleSubmit">
        <input 
          type="text" 
          placeholder="Username" 
          v-model="username" 
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          v-model="email" 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          v-model="password" 
          required 
        />
        <button type="submit">Login</button>
      </form>

      <!-- Display submission status -->
      <p v-if="submissionStatus" class="status-message">{{ submissionStatus }}</p>
    </div>
  </section>
</template>

<style scoped>
  .login {
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
  .login-container input[type="email"],
  .login-container input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background-color: #f9f9f9;
    font-size: 16px;
  }

  input[type="email"]::placeholder {
    color: grey;
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
    background-color: green;
  }

  .status-message {
    font-size: 14px;
    color: green;
    margin-top: 10px;
  }

  .status-message.error {
    color: red;
  }

  input::placeholder {
    color: grey;
  }
</style>

