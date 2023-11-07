<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<style scoped>
.card {
    display:flex;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    max-width: 60%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
}
</style>