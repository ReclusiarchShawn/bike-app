<script setup>

</script>

<template>
  <section class="contact">
    <div class="contact-form">
        <h2>Contact Us</h2>
        <form action="#">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" required>
    
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required>
    
          <label for="phone">Phone</label>
          <input type="tel" id="phone" name="phone" required>
    
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
    
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
    
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
</template>
<style scoped>

  .contact{
    display: flex;
    width: 100%;
    height: 90vh;
    justify-content: center;
    align-items: center;
  }
  .contact-form {

    
    width: 100%;
    max-width: 400px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .contact-form h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }

  .contact-form label {
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
    display: block;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
  }

  .contact-form input:focus,
  .contact-form textarea:focus {
    outline: none;
    border-color: #333;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  .contact-form button {
    width: 100%;
    padding: 10px;
    background-color: #e63946;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .contact-form button:hover {
    background-color: #d62828;
  }
</style>