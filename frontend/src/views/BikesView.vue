<script setup>
import { ref } from 'vue';

// Form data state
const formData = ref({
  bikeId: '',
  modelName: '',
  brand: '',
  price: '',
  horsepower: '',
  torque: '',
  seatHeight: '',
  image: null, // Holds the file
  stocks: '',
});

// State for the list of bikes
const bikes = ref([]);

// Handle file selection
const handleFileChange = (event) => {
  formData.value.image = event.target.files[0];
};

// Fetch existing bikes from the server (initial load)
const fetchBikes = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/bikes');
    if (!response.ok) throw new Error('Failed to fetch bikes');

    bikes.value = await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Submit the form and add a new bike
const addBike = async (event) => {
  event.preventDefault();

  const data = new FormData();
  Object.entries(formData.value).forEach(([key, value]) => {
    data.append(key, value);
  });

  try {
    const response = await fetch('http://localhost:3000/api/bikes', {
      method: 'POST',
      body: data,
    });

    if (!response.ok) throw new Error('Failed to add bike');

    const result = await response.json();
    bikes.value.push(result.bike); // Add the new bike to the list
    console.log('Bike added:', result);

    // Reset the form
    Object.keys(formData.value).forEach((key) => {
      formData.value[key] = key === 'image' ? null : '';
    });
  } catch (error) {
    console.error(error);
  }
};

// Fetch bikes when the component loads
fetchBikes();
</script>

<template>
  <div class="container">
    <form class="form" @submit="addBike">
      <input v-model="formData.bikeId" placeholder="Bike ID" required />
      <input v-model="formData.modelName" placeholder="Model Name" required />
      <input v-model="formData.brand" placeholder="Brand" required />
      <input v-model="formData.price" placeholder="Price" required />
      <input v-model="formData.horsepower" placeholder="Horsepower" required />
      <input v-model="formData.torque" placeholder="Torque" required />
      <input v-model="formData.seatHeight" placeholder="Seat Height" required />
      <input type="file" @change="handleFileChange" accept="image/*" required />
      <input v-model="formData.stocks" placeholder="Stocks" required />
      <button type="submit">Add Bike</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>Bike ID</th>
          <th>Model Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Horsepower</th>
          <th>Torque</th>
          <th>Seat Height</th>
          <th>Stocks</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bike, index) in bikes" :key="index">
          <td>{{ bike.bikeId }}</td>
          <td>{{ bike.modelName }}</td>
          <td>{{ bike.brand }}</td>
          <td>{{ bike.price }}</td>
          <td>{{ bike.horsepower }}</td>
          <td>{{ bike.torque }}</td>
          <td>{{ bike.seatHeight }}</td>
          <td>{{ bike.stocks }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px; 
    margin-top: 20px;
}

table {
    width: 100%;
    border-collapse: collapse; 
    margin-bottom: 20px;
    padding-top: 20px;
    margin-top: 20px;
}

th, td {
    border: 1px solid #ccc; 
    padding: 12px 15px; 
    text-align: left;
}

th {
    background-color: #f4f4f4; 
    font-weight: bold;
    color: #333; 
}

tbody tr:nth-child(even) {
    background-color: #f9f9f9; 
}

tbody tr:hover {
    background-color: #e0f7fa;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 320px; 
    padding: 16px;
    margin-top: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    background-color: #ebeaea;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

button {
    margin-top: 15px;
    padding: 8px 14px; 
    background: linear-gradient(45deg, #ff4b2b, #ff416c);
    color: #ffffff;
    font-weight: 600;
    font-size: 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
}

button:hover {
    background: linear-gradient(45deg, #28a745, #218838); 
    transform: scale(1.05);
}


input, textarea, select {
    width: 100%;
    padding: 5px; 
    margin: 8px 0;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 15px; 
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

label {
    align-self: flex-start;
    font-size: 15px; 
    font-weight: 500;
    color: #333;
    margin-bottom: 4px; 
}



</style>

