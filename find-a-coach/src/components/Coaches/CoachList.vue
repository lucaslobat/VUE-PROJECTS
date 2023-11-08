<template>
    <BaseCard baseCardStyle="card-container">Filter</BaseCard>
    <BaseCard baseCardStyle="card-container">
        <BaseCard baseCardStyle="card-container controls">
            <BaseButton classToApply="styled-button" toProp="/home">Refresh
            </BaseButton>
            <BaseButton classToApply="styled-button" toProp="/register" isRouterLink>Register new coach
            </BaseButton>
        </BaseCard>
        <div class="coachItems" v-if="hasCoaches">
            <CoachItem v-for="coach in getAllCoaches" :key="coach.id" :id="coach.id" :firstName="coach.firstName"
                :lastName="coach.lastName" :biography="coach.biography" :rate="coach.rate"
                :technologies="coach.technologies" />
        </div>
        <p v-else>No coaches found</p>
    </BaseCard>
</template>

<script>
import CoachItem from './CoachItem.vue'
export default {
    components: { CoachItem },
    computed: {
        getAllCoaches() {
            return this.$store.getters['coachModule/getAllCoaches']
        },
        hasCoaches() {
            return this.$store.getters['coachModule/hasCoaches']
        }
    }
}
</script>

<style scoped>
.card-container {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 70%;
}
.controls {
    flex-direction: row;
    justify-content: space-between;
    max-width: 50rem;
}
</style>