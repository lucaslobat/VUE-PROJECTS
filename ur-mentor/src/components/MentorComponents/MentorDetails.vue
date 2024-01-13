<template>
    <BaseContainer customClass="card-container flex">
        <div class="mentor-details flex">
            <div class="area-badges">
                <v-chip v-for="area in identifiedMentor.areas" :key="area" color="primary">{{ area }}</v-chip>
            </div>
            <div class="about">
                <h2>About</h2>
                <p>{{ identifiedMentor.about }}</p>
            </div>
        </div>
        <MentorCard
            :id="identifiedMentor.id"
            :firstName="identifiedMentor.firstName"
            :lastName="identifiedMentor.lastName"
            :hourlyRate="identifiedMentor.rate"
        />
    </BaseContainer>
</template>
<script>
import MentorCard from './MentorCard.vue'
export default {
    components: { MentorCard },
    computed: {
        identifiedMentor() {
            return this.$store.getters[`mentorsModule/getMentorById`](this.$route.params.id)
        },
        contactLink() {
            return `${this.$route.path}/contact`
        },
    },
}
</script>
<style scoped>
.card-container {
    gap: 1em;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
}

.mentor-details {
    flex-direction: column;
    gap: 1em;
    min-width: 40%;
    max-width: 40%;
    border-radius: 0.5em;
    padding: 1em;
    background-color: #fff8ef;
}
</style>
