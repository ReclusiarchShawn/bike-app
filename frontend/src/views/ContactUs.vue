<script setup>
</script>
<template>
    <section class="container">
    <table>
        <thead>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Message</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>DSADSA</td>
                <td>dsaSDA</td>
                <td>dsadsa</td>
                <td>dsadsad</td>
                <td>dsadsadsa</td>
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