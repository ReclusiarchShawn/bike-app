<script setup>
 
</script>

<template>
    <div class="container">
        <div class="card">
            <img src="../assets/hunter350rebelred.jpg" alt="Hunter 350">
            <div class="card-content">
                <h3>Hunter 350</h3>
                <p>Price: ₹1,87,000</p>
                <button class="collapsible">Specification & Features</button>
                <div class="content">
                    <p>Mileage: 35 kmpl</p>
                    <p>Max Power: 20.2 bhp @ 6100 rpm</p>
                    <p>Max Torque: 27 Nm @ 4000 rpm</p>
                    <p>Fuel Tank Capacity: 13 litres</p>
                    <p>Kerb Weight: 177 kg</p>
                    <p>Seat Height: 800 mm</p>
                    <p>Ground Clearance: 150 mm</p>
                </div>
            </div>
            <button class="select-button">Select</button>
        </div>

        <div class="card">
            <img src="../assets/classic350stealthblack.jpg" alt="Classic 350">
            <div class="card-content">
                <h3>Classic 350</h3>
                <p>Price: ₹2,25,000</p>
                <button class="collapsible">Specification & Features</button>
                <div class="content">
                    <p>Mileage: 34 kmpl</p>
                    <p>Max Power: 20.2 bhp @ 6100 rpm</p>
                    <p>Max Torque: 27 Nm @ 4000 rpm</p>
                    <p>Fuel Tank Capacity: 13 litres</p>
                    <p>Kerb Weight: 195 kg</p>
                    <p>Seat Height: 805 mm</p>
                    <p>Ground Clearance: 170 mm</p>
                </div>
            </div>
            <button class="select-button">Select</button>
        </div>

        <div class="card">
            <img src="../assets/scram411graphiteblue.jpg" alt="Scram 411">
            <div class="card-content">
                <h3>Scram 411</h3>
                <p>Price: ₹2,07,837</p>
                <button class="collapsible">Specification & Features</button>
                <div class="content">
                    <p>Mileage: 29.6 kmpl</p>
                    <p>Max Power: 24.3 bhp @ 6500 rpm</p>
                    <p>Max Torque: 32 Nm @ 4250 rpm</p>
                    <p>Fuel Tank Capacity: 15 litres</p>
                    <p>Kerb Weight: 185 kg</p>
                    <p>Seat Height: 795 mm</p>
                    <p>Ground Clearance: 200 mm</p>
                </div>
            </div>
            <button class="select-button">Select</button>
        </div>

        <div class="card">
            <img src="../assets/himalayan450slatepoppyblue.jpg" alt="Himalaya 450">
            <div class="card-content">
                <h3>Himalaya 450</h3>
                <p>Price: ₹2,98,000</p>
                <button class="collapsible">Specification & Features</button>
                <div class="content">
                    <p>Mileage: 30 kmpl</p>
                    <p>Max Power: 39.47 bhp @ 8000 rpm</p>
                    <p>Max Torque: 40 Nm @ 5500 rpm</p>
                    <p>Fuel Tank Capacity: 17 litres</p>
                    <p>Kerb Weight: 196 kg</p>
                    <p>Seat Height: 825 mm</p>
                    <p>Ground Clearance: 230 mm</p>
                </div>
            </div>
            <button class="select-button">Select</button>
        </div>
    </div>
</template>
<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}
.card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 250px;
}
.card img {
    width: 100%;
    height: auto;
}
.card-content {
    padding: 15px;
    text-align: center;
}
.card-content h3 {
    margin: 0;
    font-size: 18px;
}
.card-content p {
    margin: 5px 0;
    color: #666;
}
.collapsible {
    background-color: #f1f1f1;
    border: none;
    outline: none;
    width: 100%;
    text-align: left;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
}
.collapsible:hover {
    background-color: #e2e2e2;
}
.content {
    display: none;
    padding: 0 15px;
    text-align: left;
    border-top: 1px solid #ccc;
}
.select-button {
    background-color: #ff3d3d;
    color: white;
    border: none;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
}
.select-button:hover {
    background-color: #e63333;
}

</style>