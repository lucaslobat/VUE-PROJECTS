<template>
    <section>Filter</section>
    <div>
        <RouterLink to="/register" class="button">Register new coach</RouterLink>
    </div>
    <div>
        <CoachDetail v-for="coach in getAllCoaches" :key="coach.id" :id="coach.id" :firstName="coach.firstName"
            :lastName="coach.lastName" :biography="coach.biography" :rate="coach.rate" :technologies="coach.technologies" />
    </div>
</template>

<script>
import CoachDetail from './CoachDetail.vue';
export default {
    components: { CoachDetail },
    computed: {
        getAllCoaches() {
            return this.$store.getters['coachModule/getAllCoaches']
        }
    }
}
</script>

<style scoped>
a:visited {
    color: inherit;

}

a,
u {
    text-decoration: none;
}
.button {
    background: #FF5A5F;
    color: #fff;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;
}

.button:hover {
    background: #E74B4E;
    transform: scale(1.05);
}
</style>