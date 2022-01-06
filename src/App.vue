<script>
import Hero from './components/Hero.vue'
import Recipies from './components/Recipes.vue'
import Testimonials from './components/Testimonials.vue'
import Footer from './components/Footer.vue'

export default {
	components: {
    Hero,
    Recipies,
    Testimonials,
    Footer
}
}
</script>

<template>
	<Hero />
	<Recipies />
	<Testimonials />
	<Footer />
</template>