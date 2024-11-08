<script setup>
</script>

<template>
  <nav>
    <RouterLink to="/admin" class="link">bikes</RouterLink >
    <RouterLink to="/Customers" class="link">Customers</RouterLink>
    <RouterLink to="/Payments" class="link">Payments</RouterLink>
    <RouterLink to="" class="link">ContactUs</RouterLink>
  </nav>   
    
</template>
<style scoped>
nav{
  width: 200px;
  height: 100vh;
  border-right: 1px solid gray;
}
nav .link {
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  font-weight: bolder;
  color: black;

}
nav .link:hover{
  background-color: green;
}


</style>