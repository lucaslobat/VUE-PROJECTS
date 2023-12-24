<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div>
          <p>&copy; 2023 urMentor. All rights reserved.</p>
        </div>
        <div>
          <ul class="social-icons">
            <li><a href="#" target="_blank">Facebook</a></li>
            <li><a href="#" target="_blank">Twitter</a></li>
            <li><a href="#" target="_blank">Instagram</a></li>
            <!-- Add more social icons as needed -->
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style scoped>
footer {
  background-color: #1b1b1b;
  color: #fff;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-icons {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.social-icons li {
  margin-right: 15px;
}

.social-icons a {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
}
</style>
