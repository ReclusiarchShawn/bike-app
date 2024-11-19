<script setup>
    import { RouterLink } from 'vue-router';

</script>
<template>


    <header>
        <div class="logo">BikeEasy</div>
        <nav>
          <RouterLink to="/">Home</RouterLink >
          <RouterLink to="/brand">Brand</RouterLink >
          <RouterLink to="">Accessories</RouterLink >
          <RouterLink to="/Services">Services</RouterLink >
          <RouterLink to="/contactus">Contact us</RouterLink >
          <RouterLink to="/admin-login">Admin</RouterLink >
        </nav>
      </header>
</template>
<style scoped>

header {
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  header .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  header nav a {
    margin-left: 20px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  header nav a:hover {
    color: red;
  }

</style>