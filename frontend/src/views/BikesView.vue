<script setup>
</script>
<template>
    <div class="container">
        <form class="form">
            <input name="Bike id" placeholder="Bike ID">
            <input name="Model name" placeholder="Model Name">
            <input name="Brand" placeholder="Brand">
            <input name="Price" placeholder="Price">
            <input name="Horsepower" placeholder="Horsepower">
            <input name="Torque" placeholder="Torque">
            <input name="Seatheight" placeholder="Seat Height">
            <input name="Image" placeholder="Image">
            <input name="Stocks" placeholder="Stocks">
            <button type="submit" name="addBike">Add</button>
        </form>
        
        <table>
            <thead>
                <tr>
                    <th>Bike id</th>
                    <th>Model name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Horsepower</th>
                    <th>Torque</th>
                    <th>Seatheight</th>
                    <th>Image</th>
                    <th>Stocks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>DSAD</td>
                    <td>dsaSDA</td>
                    <td>dsadsa</td>
                    <td>dsadsad</td>
                    <td>dsadsadsa</td>
                    <td>dsadsadas</td>
                    <td>dsadsadasdsa</td>
                    <td>dfafdgdf</td>
                    <td>sfdsgg</td>

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

