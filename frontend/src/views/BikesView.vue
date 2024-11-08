<script setup>
</script>
<template>
    <div class="container">
        <form class="form">
            <input type="text" name="bikeName" placeholder="Bike Name">
            <input type="number" name="horsePower" placeholder="Horsepower">
            <input type="number" name="torque" placeholder="Torque">
            <input type="number" name="seatHeight" placeholder="Seat Height">
            <input type="text" name="brake" placeholder="Brake">
            <button name="addBike">Add</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Horsepower</th>
                    <th>Torque</th>
                    <th>Seat Height</th>
                    <th>Brake</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>DSADSA</td>
                    <td>dsaSDA</td>
                    <td>dsadsa</td>
                    <td>dsadsad</td>
                    <td>dsadsadsa</td>
                    <td>dsadsadas</td>
                    <td>dsadsadasdsa</td>
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
    max-width: 400px; 
    padding: 20px; 
    margin-top: 10px;
    border: 1px solid #ddd; 
    border-radius: 10px; 
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
    background-color: #f9f9f9;
}

input[type="text"], input[type="number"] {
    width: 100%;
    padding: 12px 15px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 8px; 
    box-sizing: border-box;
    font-size: 16px;
    background-color: #fff;
    transition: border-color 0.3s ease;
}

input[type="text"]:focus, input[type="number"]:focus {
    border-color: #007BFF;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.2); 
}

button {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #ff0019; 
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
  }


</style>

