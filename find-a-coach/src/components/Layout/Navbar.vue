<template>
    <nav class="navbar">
        <div class="navbar-logo">
            <a href="#">urCoach</a>
        </div>
        <ul class="navbar-links">
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/coaches">Coaches</RouterLink>
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
    font-family: "Poppins", sans-serif;
}

.navbar {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
}

.navbar-logo a {
    font-size: 1.5em;
    text-decoration: none;
    color: #FF5A5F;
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
    color: #333;
    font-weight: 500;
}

a:active,
a.router-link-active,
.navbar-links a:hover {
    color: #FF5A5F;
}</style>