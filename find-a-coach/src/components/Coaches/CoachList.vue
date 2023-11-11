<template>
    <!-- Documentar esto -->
    <CoachFilter @selectedCheckboxes="filterByAreas"></CoachFilter>
    <BaseCard baseCardStyle="card-container controls">
        <BaseButton classToApply="styled-button" toProp="/home">Refresh
        </BaseButton>
        <BaseButton classToApply="styled-button" toProp="/register" isRouterLink>Register new coach
        </BaseButton>
    </BaseCard>
    <BaseCard baseCardStyle="card-container">
        <div class="coachItems" v-if="hasCoaches">
            <CoachItem v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :firstName="coach.firstName"
                :lastName="coach.lastName" :biography="coach.biography" :rate="coach.rate"
                :technologies="coach.technologies" />
        </div>
        <p v-else>No coaches found</p>
    </BaseCard>
</template>

<script>
import CoachItem from './CoachItem.vue'
import CoachFilter from './CoachFilter.vue'
export default {

    data() {
        return {
            //Documentar esto
            activeFilters: [],
            hola: undefined

        }
    },
    components: { CoachItem, CoachFilter },
    computed: {
        getAllCoaches() {
            return this.$store.getters['coachModule/getAllCoaches']
        },
        hasCoaches() {
            return this.$store.getters['coachModule/hasCoaches']
        },

        //Documentar esto
        filteredCoaches() {
            const allCoaches = this.$store.getters['coachModule/getAllCoaches'];
            return allCoaches.filter(coach => {
                if (coach.areas.includes(...this.activeFilters)) {
                    return true;
                } else {
                    return false
                }
            })
        }
    },
    methods: {
        filterByAreas(checkedOptions) {
            this.activeFilters = checkedOptions;
        },
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
    max-width: 70%;
}
</style>