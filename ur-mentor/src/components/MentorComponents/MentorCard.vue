<template>
    <v-card class="d-flex flex-column align-center pa-6 mentor-card">
        <template v-slot:title>
            <v-avatar image="https://cdn.vuetifyjs.com/images/john-smirk.png" size="80"> </v-avatar>
        </template>

        <template v-slot:text>
            <div class="text-h5">{{ `${firstName} ${lastName}` }}</div>
        </template>

        <div class="card-details flex">
            <span>Hourly rate</span>
            <span>{{ hourlyRate }}€</span>
        </div>
        <div class="card-details flex">
            <span>Average response</span>
            <span>1h</span>
        </div>
        <div class="card-details flex">
            <span># of students</span>
            <span>30</span>
        </div>
    </v-card>
</template>

<script>
export default {
    props: ['id', 'firstName', 'lastName', 'hourlyRate'],
}
</script>

<style scoped>
.mentor-card {
    gap: 1em;
    padding: 1em;
    min-width: 20%;
    max-width: 20%;
    background-color: #fff8ef;
}
.card-details {
    justify-content: space-between;
    width: 100%;
}
</style>
