<template>
    <div class="card">
        <div class="name">{{ `${lastName}, ${firstName}` }}</div>
        <div class="biography">
            {{ biography }}
        </div>
        <div class="rate">
            {{ `Rate: €${rate}/hour` }}
        </div>
        <div class="technologies">
            {{ technologies }}
        </div>
        <BaseButton :toProp='seeDetailsLink' classToApply="styled-button" isRouterLink>See details</BaseButton>
        <BaseButton :toProp='contactCoachLink' classToApply="styled-button" isRouterLink>Contact coach</BaseButton>
    </div>
</template>
<script>

export default {

    props: ['id', 'firstName', 'lastName', 'biography', 'rate', 'technologies'],
    computed: {
        /* Grab the current route and concatenate another route, in case we ever change the defined route in our router.js file */
        seeDetailsLink() {
            return `${this.$route.path}/${this.id}`;
        },
        contactCoachLink() {
            return `${this.$route.path}/${this.id}/contact`;
        },
    }
}
</script>

<style scoped>
.card {
    background-color: #fff;
    padding: 20px;
    width: 25rem;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.biography {
    font-size: 14px;
    margin-bottom: 10px;
}

.rate {
    font-size: 18px;
    color: #FF5A5F;
    margin-bottom: 10px;
}

.technologies {
    font-size: 1rem;
}
</style>