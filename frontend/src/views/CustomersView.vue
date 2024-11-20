<script setup>
import { ref, onMounted } from 'vue';

const customers = ref([]); // Store all customer data

// Fetch customers from the server
const fetchCustomers = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/customers');
    customers.value = await response.json();
  } catch (error) {
    console.error('Failed to fetch customers:', error);
  }
};

// Add a customer programmatically
const addCustomer = async (customer) => {
  try {
    const response = await fetch('http://localhost:3000/api/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    });

    if (!response.ok) throw new Error('Failed to save customer data');

    const result = await response.json();
    console.log('Customer added:', result);
    customers.value.push(result.customer); // Update the table
  } catch (error) {
    console.error(error);
  }
};

// Add sample customer data
const addSampleCustomers = () => {
  const sampleCustomers = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      bikeModelId: 'BM123',
      status: 'Pending',
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phoneNumber: '987-654-3210',
      bikeModelId: 'BM456',
      status: 'Confirmed',
    },
  ];

  sampleCustomers.forEach(addCustomer);
};

// Fetch customers when the component is mounted
onMounted(() => {
  fetchCustomers();
  addSampleCustomers(); // Add sample customers on page load
});
</script>

<template>
  <section class="container">
    <!-- Customer Table -->
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Bike Model ID</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="index">
          <td>{{ customer.id }}</td>
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phoneNumber }}</td>
          <td>{{ customer.bikeModelId }}</td>
          <td>{{ customer.status }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<style scoped>

container {
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
}</style>