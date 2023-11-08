<template>
    <div class="badge">
        <span class="badge-text">{{ badgeText }}</span>
    </div>
</template>
<script>
export default {
    props: ['badgeText']
}
</script>
<style scoped>
.badge {
    background-color: #e65154;
    color: #fff;
    border-radius: 0.8rem;
    margin:0rem 0.1rem;
    padding:0.5rem 0.8rem;
    display:inline-block;
    font-size: 0.8rem;
}

.badge-text {
    font-weight: bold;
}
</style>