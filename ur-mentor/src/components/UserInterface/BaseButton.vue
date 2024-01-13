<template>
    <RouterLink v-if="isRouterLink" :to="toProp">
        <v-btn :color="color">
            <slot></slot>
        </v-btn>
    </RouterLink>

    <a v-else>
        <v-btn :color="color">
            <slot></slot>
        </v-btn>
    </a>
</template>
<script>
export default {
    props: {
        isRouterLink: {
            type: Boolean,
            required: false,
            default: false,
        },
        toProp: {
            type: String,
            required: false,
            default: null,
        },
        color: {
            type: String,
            required: false,
            defaul: null,
        },
    },
}
</script>
<style scoped>
.styled-button {
    background: #e4e4de;
    color: #1b1b1b;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    transition:
        background 0.3s,
        transform 0.3s;
    margin: 0.5rem 0.2rem;
    text-decoration: none;
    background-color: #fdb652;
}

.styled-button:hover {
    background: #ff9f1c;
    color: #1b1b1b;
}
</style>
