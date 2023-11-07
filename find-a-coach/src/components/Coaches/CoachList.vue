<template>
    <BaseCard>Filter</BaseCard>
    <BaseCard>
        <div>
            <BaseButton classToApply="styled-button" toProp="/home. An>Refresh
            </BaseButton>
            <BaseButton isRouterLink class="styled-button" toProp="/register">Register new coach</BaseButton>
        </div>
        <div v-if="hasCoaches">
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
.card {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
</style>