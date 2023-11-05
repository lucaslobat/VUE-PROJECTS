<template>
    <div class="card">
        <div class="name">{{ `${lastName}, ${firstName}` }}</div>
        <div class="biography">
            {{ biography }}
        </div>
        <div class="rate">
            {{ `Rate: €${rate}/hour` }}
        </div>
        <div class="technologies">
            {{ technologies }}
        </div>
        <RouterLink :to='`/coaches/${id}/contact`'>Contact</RouterLink>
    </div>
</template>
<script>
export default {
    props: ['id', 'firstName', 'lastName', 'biography', 'rate', 'technologies'],
    computed: {
        getAllCoaches() {
            return this.$store.getters['coachModule/getAllCoaches']
        }
    }
}
</script>
<style scoped>
.card {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 25rem;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
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
    font-size: 14px;
}
</style>