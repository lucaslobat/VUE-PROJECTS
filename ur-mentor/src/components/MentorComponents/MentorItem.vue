<template>
    <BaseContainer customClass="card-item">
        <div class="name flex">
            <v-avatar>
                <FontAwesomeIcon icon="circle-user" />
            </v-avatar>

            <h4>{{ getFullName }}</h4>
        </div>

        <div class="areas flex">
            <v-chip v-for="area in areas" :key="area" color="primary">{{ area }}</v-chip>
        </div>

        <div class="technologies flex">
            <i
                v-for="(tech, index) in technologies"
                :key="index"
                :class="getIconClass(tech)"
                class="colored"
                :title="tech"
            ></i>
        </div>

        <div class="rate">{{ rate }}€ / hour</div>
        <div class="controls flex">
            <BaseButton isRouterLink :toProp="detailsLink" color="#FFAD3A">Details</BaseButton>
            <BaseButton isRouterLink :toProp="contactLink" color="#FFAD3A">Contact</BaseButton>
        </div>
    </BaseContainer>
</template>

<script>
export default {
    props: ['id', 'firstName', 'lastName', 'rate', 'technologies', 'areas'],
    data() {
        return {}
    },
    computed: {
        detailsLink() {
            /* Grab the current route and concatenate the 'id' prop.
      This is useful in case we ever change the route definition in our router.js */
            return `${this.$route.path}/${this.id}`
        },
        contactLink() {
            return `${this.$route.path}/${this.id}/contact`
        },
        getFullName() {
            return `${this.firstName} ${this.lastName}`
        },
    },
    methods: {
        getIconClass(tech) {
            const techClassMapping = {
                vue: 'devicon-vuejs-plain vue',
                javascript: 'devicon-javascript-plain',
                html: 'devicon-html5-plain',
                css: 'devicon-css3-plain',
                'c#': 'devicon-csharp-plain',
                '.net': 'devicon-dot-net-plain',
                python: 'devicon-python-plai',
            }

            const lowerCasedTech = tech.toLowerCase()
            return techClassMapping[lowerCasedTech] || ''
        },
    },
}
</script>
<style scoped>
.card-item {
    flex-direction: column;
    gap: 1rem;
    border-radius: 1em;
    box-shadow:
        rgba(9, 30, 66, 0.25) 0px 1px 1px,
        rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
}

.card-item > * {
    flex: 1;
}

.areas {
    gap: 0.5em;
}

.name {
    font-size: 1.5em;
    font-weight: bold;
    color: #1b1b1b;
    gap: 0.5em;
}

.rate {
    font-size: 18px;
    color: rgb(255, 159, 28);
    font-weight: 600;
}

.technologies {
    font-size: 2rem;
    gap: 0.2em;
}

.controls {
    margin: 1rem 0;
    gap: 0.5em;
}
</style>
