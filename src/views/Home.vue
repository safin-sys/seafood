<script>
import Recipies from '../components/Recipes.vue'
import Testimonials from '../components/Testimonials.vue'
import Hero from '../components/Hero.vue'

export default {
    components: {
        Recipies,
        Testimonials,
        Hero
    }
}
</script>

<template>
    <Hero />
    <Recipies />
    <Testimonials />
</template>