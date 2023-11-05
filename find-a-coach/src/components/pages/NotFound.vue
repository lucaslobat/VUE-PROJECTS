<template>
    <div class="not-found-container">
        <h1>404</h1>
        <p>Page Not Found</p>
        <p>Sorry, the page you are looking for does not exist.</p>
        <RouterLink to="/">Go Back to Home</RouterLink>
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
* {
    margin: 1rem;

}

.not-found-container {
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
}

h1 {
    font-size: 4em;
    color: #333;
}

p {
    font-size: 1.2em;
    color: #555;
}

a {
    text-decoration: none;
    background-color: #007BFF;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1.2em;
    transition: background-color 0.3s;
}

a:hover {
    background-color: #0056b3;
}
</style>