<template>
    <nav class="navbar">
        <div class="container">
            <a href="#" class="logo">Find a dev coach</a>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Coaches</a></li>
                <li><a href="#">Requests</a></li>
            </ul>
        </div>
    </nav>
</template>
<script></script>
<style scoped>
* {
    font-family: "Poppins", sans-serif;
}

.navbar {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 24px;
    text-decoration: none;
    color: #fff;
}

.nav-links {
    list-style: none;
}

.nav-links li {
    display: inline;
    margin-right: 20px;
}

.nav-links a {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #55a7e7;
}
</style>