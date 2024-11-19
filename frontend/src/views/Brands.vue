<script setup>
import { RouterLink } from 'vue-router';
 
</script>
<template>
    <div class="container">
        <!-- Hunter 350 Card -->
        <div class="card">
            <img src="../assets/hunter350rebelred.jpg" alt="Hunter 350">
            <div class="card-content">
                <h3>Hunter 350</h3>
                <p class="price">₹1,87,000</p>
            </div>
            <RouterLink to="/BookingPanel/:bikeId" class="select-button">Select</RouterLink>
        </div>

        
    </div>

</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 500px;
    width: 50%;
    align-items: center;
    margin-top: 60px;
}

.card {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.card img {
    width: 40%; 
    height: 50%;
    border-bottom: 1px solid #eee;
    margin-top: 10px; 
}

.card-content {
    padding: 20px;
    width: 50%;
    text-align: center;
}

.card-content h3 {
    font-size: 20px;
    color: #333;
    margin: 0;
}

.card-content .price {
    font-size: 18px;
    color: #777;
    font-weight: bold;
    margin: 8px 0;
}

.content {
    display: block;
    padding: 15px;
    border-top: 1px solid #ddd;
    background-color: #f9f9f9;
    border-radius: 0 0 8px 8px;
    color: #555;
    font-size: 14px;
    line-height: 1.6;
    position: relative;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.select-button {
    background-color: red;
    color: white;
    border: none;
    width: 100%;
    padding: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 0 0 12px 12px;
    text-decoration-line: none;
    text-align: center;
}

.select-button:hover {
    background-color: green;
    transform: translateY(-5px);
}

</style>
