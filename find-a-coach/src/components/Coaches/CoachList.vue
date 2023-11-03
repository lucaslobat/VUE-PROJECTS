<template>
    <div>
        <CoachCard v-for="coach in getAllCoaches" :key="coach.id" :fName="coach.firstName" :lName="coach.lastName"
            :bio="coach.biography" :rate="coach.rate" :techs="coach.technologies" />
    </div>
</template>

<script>
import CoachCard from './CoachCard.vue';
export default {
    components: { CoachCard },
    computed: {
        getAllCoaches() {
            return this.$store.getters['coachModule/getAllCoaches']
        }
    }
}
</script>

<style scoped></style>