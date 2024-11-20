<script setup>
import { RouterLink } from 'vue-router';
import {ref, onMounted} from 'vue'
import { storeToRefs } from 'pinia';
import { useHomeStore } from '@/stores/home';
import { useRouter } from 'vue-router';

const router = useRouter()


const home = useHomeStore()
const {bikes} = storeToRefs(home)
const { getBikeByBrand} = home


const props = defineProps({
    brandId: {type: String, required: true}
})
onMounted(()=>{

    getBikeByBrand(Number(props.brandId))
})



// List of bike data (can be dynamic or fetched from an API)

</script>

<template>
  <div class="container">
    <!-- Loop through bikes and display each one as a card -->
    <div v-for="bike in bikes" :key="bike.bike_id" class="card">
      <img :src="bike.img_path" :alt="bike.model_name">
      <div class="card-content">
        <h3>{{ bike.model_name }}</h3>
        <p class="price">₹{{ bike.price.toLocaleString() }}</p>
        <p class="price">bhp {{bike.horsepower}}</p>
        <p class="price">nm {{bike.torque}}</p>
        <p class="price">mm {{bike.seatheight}}</p>
        <p class="price"> {{bike.stocks}}</p>

      </div>
      <RouterLink :to="`/BookingPanel/${bike.bike_id}`" class="select-button">Select</RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* Ensure the body covers the full height and centers content */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Full height of the viewport */
}

/* The container should be a grid with two columns, and it should be centered */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjust to fit cards responsively */
  gap: 20px; /* Space between the cards */
  max-width: 1200px; /* Max width of the container */
  width: 90%; /* Ensure the container takes up most of the screen */
  justify-items: center; /* Center the cards horizontally */
  align-items: center; /* Vertically center the cards */
  text-align: center; /* Ensure text is centered within each card */
}

/* Style for each card */
.card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 250px; /* Limit card width */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
}

/* Hover effect for the cards */
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Card image styles */
.card img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eee;
  margin-top: 10px;
}

/* Card content styling */
.card-content {
  padding: 20px;
  width: 80%;
}

/* Card title styling */
.card-content h3 {
  font-size: 20px;
  color: #333;
  margin: 0;
}

/* Card price styling */
.card-content .price {
  font-size: 18px;
  color: #777;
  font-weight: bold;
  margin: 8px 0;
}

/* Button styling */
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

/* Button hover effect */
.select-button:hover {
  background-color: green;
  transform: translateY(-5px);
}
</style>



