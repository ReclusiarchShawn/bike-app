<script setup>
</script>
<template>
  <section class="booking">
    <div class="booking-container">
        <h1>Bike Service Booking</h1>
        <p>Fill out the form to book a service appointment for your bike.</p>

        <form action="#" method="post">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required>
            </div>

            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required>
            </div>

            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required>
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>
            </div>

            <div class="form-group">
                <label for="bookingDate">Booking Date</label>
                <input type="date" id="bookingDate" name="bookingDate" required>
            </div>

            <button type="submit">Book</button>
        </form>
    </div>
  </section>
  </template>
  
  <style scoped>
  .booking{
    width: 100%;
    height: 90vh;
    display:flex;
    justify-content: center;
    align-items: center;

  }
  .booking-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .booking-container h1 {
    text-align: center;
    font-weight: bold;
    color: #0d0303;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #050101;
  }
  
  .form-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #a72839;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>
  