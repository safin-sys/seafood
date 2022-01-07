<script>
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'

export default {
	components: {
    Footer,
    Nav
}
}
</script>

<template>
    <Nav />
	<router-view></router-view>
	<Footer />
</template>