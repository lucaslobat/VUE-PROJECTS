<template>
  <nav class="navbar flex">
    <div class="navbar-content flex">
      <div class="navbar-logo">
        <RouterLink to="/">urMentor</RouterLink>
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
    </div>
  </nav>
</template>
<script></script>
<style scoped>
.navbar {
  background-color: #1b1b1b;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  width: 100%;
  top: 0;
  position: sticky;
  z-index: 1;
}

.navbar-content {
  justify-content: space-between;
  align-items: center;
  gap:4em;
  width:80vw;
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
  color: #ff9f1c;
}

@media (width <= 412px) {
  .navbar-content {
    gap:2em;
    max-width: 100%
  }
}
</style>
