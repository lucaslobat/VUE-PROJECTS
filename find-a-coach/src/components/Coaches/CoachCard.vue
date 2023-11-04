<template>
    <div class="card">
        <div class="name">{{ `${lName}, ${fName}` }}</div>
        <div class="biography">
            {{ bio }}
        </div>
        <div class="rate">
            {{ `Rate: €${rate}/hour` }}
        </div>
        <div class="technologies">
            {{ techs }}
        </div>
        <RouterLink to="">See details</RouterLink>
    </div>
</template>
<script>
export default {
    props: ['fName', 'lName', 'bio', 'rate', 'techs']
}
</script>
<style scoped>
.card {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    width: 300px;
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
    color: #0077b6;
    margin-bottom: 10px;
}

.technologies {
    font-size: 14px;
}
</style>