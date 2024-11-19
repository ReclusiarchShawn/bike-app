<script setup>

    const props = defineProps({
        bikeId: {
            type: String,
            required: true
        }
    })


</script>
<template>
    <div class="container">
      <div class="bike-details">
        <img src="" alt="Hunter 350">
        <div class="details">
        <p><strong>Model Name:</strong> Hunter 350</p>
        <p><strong>Brand:</strong> Royal Enfield</p>
        <p><strong>Price (₹):</strong> 1,87,000.00</p>
        <p><strong>Horsepower:</strong></p>
        <p><strong>Torque:</strong> 27</p>
        <p><strong>Seat Height:</strong> 3</p>
        <p><strong>Stocks:</strong> 1</p>
        </div>
      </div>
  
      <div class="booking-form">
        <label for="full-name">Full Name</label>
        <input type="text" id="full-name" placeholder="Enter your full name" required>

        <label for="phone-number">Phone Number</label>
        <input type="tel" id="phone-number" placeholder="Enter your phone number" required>
  
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required>
  
        <!-- Booking Date Field -->
        <label for="booking-date">Booking Date</label>
        <input type="date" id="booking-date" required>
  
        <!-- Action Field -->
        <label for="action">Action</label>
        <p class="action">Booking</p> <!-- Static text for "Booking" -->
  
        <button type="submit" class="full-row">Proceed</button>
      </div>
    </div>
  </template>
  
  
  <style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--secondary-color);
    color: var(--text-color);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px; 
    
}
.action{
    font-weight: bold;

}
.bike-details{
    display: flex;
    justify-content: space-between
}

.bike-details, .booking-form {
   
    padding: 20px;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 700px;
 
    margin-top: 10px;
}

.bike-details img {
    width: 100%;
    max-width: 300px;
    display: block;
    background-color:white;
}

.bike-details p {
    margin: 5px 0;
}
.details{
    background-color:white;
    display: flex;
    flex-direction: column;
   
    
}
.booking-form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    align-items: center;
}

.booking-form label {
    grid-column: span 1;
    font-weight: bold;
    text-align: left;
}

.booking-form input, 
.booking-form select {
    grid-column: span 2;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: var(--border-radius);
    font-size: 16px;
}

.booking-form .full-row {
    grid-column: span 3;
}

.booking-form button {
    background-color: #ff4d4d; 
    color: white;
    border: none;
    padding: 15px; 
    border-radius: var(--border-radius);
    font-size: 18px; 
    font-weight: bold; 
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

.booking-form button:hover {
    background-color: green; 
    transform: translateY(-2px); 
}
</style>

  
