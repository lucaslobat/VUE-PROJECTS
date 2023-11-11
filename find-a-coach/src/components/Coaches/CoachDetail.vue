<template>
    <BaseCard baseCardStyle="card-container">
        <div class="name">{{ fullName }}</div>
        <div class="technologies">
            <BaseBadge v-for="technology in technologies" :badgeText="technology"></BaseBadge>
        </div>
        <div class="description">{{ biography }}</div>
        <div class="rate">{{ rate }}€ per hour</div>

        <div>
            <BaseButton classToApply="styled-button" :toProp="contactLink" isRouterLink>Contact</BaseButton>
        </div>
        <RouterView></RouterView>
    </BaseCard>
</template>
<script>
export default {
    props: ['id'],
    data() {
        return {
            fetchedCoach: null
        }
    },
    computed: {
        fullName() {
            return `${this.fetchedCoach.lastName},${this.fetchedCoach.firstName}`
        },
        contactLink() {
            return `${this.$route.path}/contact`
        },
        biography() {
            return this.fetchedCoach.biography
        },
        rate() {
            return this.fetchedCoach.rate
        },
        technologies() {
            return this.fetchedCoach.technologies
        }

    },
    created() {
        // Store all coaches
        const allCoaches = this.$store.getters['coachModule/getAllCoaches'];
        // User the method find() on the allCoaches array and find the coach that matches the id
        const identifiedCoach = allCoaches.find(coach => coach.id == this.id);
        // Define the local variable "identifiedCoach" as the found coach.
        this.fetchedCoach = identifiedCoach;
    }
}
</script>
<style scoped>
.card-container {
    flex-direction: column;
    gap: 0.5rem;
    max-width: 40rem;
    padding: 2rem;
}

.name {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px 0;
}

.description {
    font-size: 1.1rem;
    margin: 10px 0;
}

.rate {
    font-size: 1.2rem;
    margin: 10px 0;
}

.technologies {
    font-size: 1.1rem;
    margin: 10px 0;
}
</style>