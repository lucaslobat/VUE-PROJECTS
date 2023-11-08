<template>
    <a v-if="!isRouterLink" :class="classToApply">
        <slot></slot>
    </a>

    <RouterLink v-else :to="toProp" :class="classToApply">
        <slot></slot>
    </RouterLink>
</template>
<script>
export default {
    props: {
        classToApply: {
            type: String,
            required: false,
            default: null

        },
        isRouterLink: {
            type: Boolean,
            required: false,
            default: false
        },
        toProp: {
            type: String,
            required: false,
            default: null

        }
    }
}
</script>
<style scoped>
.styled-button {
    background: #E74B4E;
    color: #fff;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;
    margin: 0.5rem 0.2rem;

}

.styled-button:hover {
    background: #e93a3d;
}

</style>