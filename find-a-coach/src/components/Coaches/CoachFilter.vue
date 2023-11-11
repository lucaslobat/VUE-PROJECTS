<template>
    <BaseCard baseCardStyle="card-container">
        <h2>Find your coach</h2>
        <div class="filter-options">
            <span>
                <input type="checkbox" id="frontend" value="frontend" v-model="checkedOptions">
                <label for="frontend">Frontend</label>
            </span>
            <span>
                <input type="checkbox" id="backend" value="backend" v-model="checkedOptions">
                <label for="backend">Backend</label>
            </span>
            <span>
                <input type="checkbox" id="fullstack" value="fullstack" v-model="checkedOptions">
                <label for="fullstack">Fullstack</label>
            </span>
        </div>
    </BaseCard>
</template>

<script>
export default {
    emits: ['selectedCheckboxes'],
    data() {
        return {
            checkedOptions: []
        }
    },
    watch: {
        checkedOptions(checkedOptions) {
            this.$emit('selectedCheckboxes', checkedOptions)
        }
    }

}
</script>

<style scoped>
.card-container {
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    max-width: 70%;
}

.filter-options {
    display: flex;
    gap: 1rem;
}
</style>