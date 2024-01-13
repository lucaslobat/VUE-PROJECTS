<template>
    <BaseContainer customClass="card-container flex">
        <div class="mentor-form flex">
            <div class="text-h5 font-weight-bold">Plan your first class with {{ identifiedMentor.firstName }}</div>

            <v-textarea
                no-resize
                clearable
                clear-icon="mdi-close-circle"
                label="Message"
                bg-color="white"
                :model-value="inputText"
            ></v-textarea>
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
    data() {
        return {
            inputText: `Hello José Angel,my name is Lucas and I am looking for a tutor.I would like the classes to be at your home or mine and I would like to start as soon as possible, would you be available? Do not hesitate to contact me to make an agreement. Thank you for your time.See you soon! Lucas`,
        }
    },
    computed: {
        identifiedMentor() {
            return this.$store.getters[`mentorsModule/getMentorById`](this.$route.params.id)
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

.mentor-form {
    flex-direction: column;
    gap: 1em;
    min-width: 40%;
    max-width: 40%;
    border-radius: 0.5em;
    padding: 1em;
    background-color: #fff8ef;
}
</style>
