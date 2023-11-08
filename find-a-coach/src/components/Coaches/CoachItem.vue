<template>
    <BaseCard baseCardStyle="card-item">
        <div class="name">{{ `${lastName}, ${firstName}` }}</div>
        <div class="biography">
            {{ biography }}
        </div>
        <div class="rate">
            {{ `Rate: €${rate}/hour` }}
        </div>
        <div class="technologies">
            <BaseBadge v-for="technology in technologies" :badgeText="technology">
            </BaseBadge>
        </div>
        <div class="controls">
            <BaseButton :toProp='seeDetailsLink' classToApply="styled-button" isRouterLink>See details</BaseButton>
            <BaseButton :toProp='contactCoachLink' classToApply="styled-button" isRouterLink>Contact coach</BaseButton>
        </div>
    </BaseCard>
</template>
<script>
import BaseBadge from '../UI/BaseBadge.vue';


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
    },
    components: { BaseBadge }
}
</script>

<style scoped>
.card-item {
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
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

.controls {
    margin: 1rem 0;
}
</style>