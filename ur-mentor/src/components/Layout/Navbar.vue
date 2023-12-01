<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <RouterLink to="/">urCoach</RouterLink>
    </div>
    <ul class="navbar-links">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/mentors">Mentors</RouterLink>
      </li>
      <li>
        <RouterLink to="/requests">Requests</RouterLink>
      </li>
    </ul>
  </nav>
</template>
<script></script>
<style scoped>
* {
  font-family: "Libre Baskerville", serif;
}

.navbar {
  background-color: #1b1b1b;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
}

.navbar-logo a {
  font-size: 1.5em;
  text-decoration: none;
  color: #e4e4de;
  font-weight: bold;
}

.navbar-links {
  list-style: none;
  display: flex;
}

.navbar-links li {
  margin-right: 20px;
}

.navbar-links a {
  text-decoration: none;
  color: #e4e4de;
  font-weight: 500;
}

a:active,
a.router-link-active,
.navbar-links a:hover {
  color: #C4C5BA;
}
</style>
