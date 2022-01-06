<script>
import Testimonial from "./Testimonial.vue";

export default {
    components: {
        Testimonial
    },
    mounted() {
        this.testimonials = [
            {
                name: "Erlich Bachman",
                quote: "Richard, I'm an independent businessman. Emphasis on \"independent.\" And \"business.\" And \"man,\" come to think of it.",
                image: "https://pbs.twimg.com/profile_images/461277151514222593/xYCOja56_400x400.jpeg"
            },
            {
                name: "Richard Hendriks",
                quote: "Well, I mean, we have an unemployed and very pissed off systems guy, who very publicly threatened to skillfuck our whole system.",
                image: "https://biosan.github.io/jsonresume-theme-macchiato/index_files/a.jpg"
            },
            {
                name: "Bertram Gilfoyle",
                quote: "I think we should dig our own well and build our own generator.I also think we should store a year's worth of food and ammunition in a blast cellar. But we don't.So good luck when the shit hits the fan.",
                image: "https://didukhn.github.io/homepage/assets/img/photo.jpg"
            },
        ];
    },
    data() {
        return {
            testimonials: []
        };
    },
}
</script>

<template>
    <div class="container mx-auto px-4 my-16">
        <div class="flex items-center flex-col">
            <h1 class="text-center font-bold text-xl">What people say about us?</h1>
            <hr class="w-24 mt-2 h-1 bg-orange-500 text-transparent" />
        </div>
    </div>
    <div class="testimonials mb-16 grid place-content-center">
        <div class="container mx-auto px-4 grid gap-16 lg:grid-cols-3 justify-center items-center">
            <div v-for="testimonial in testimonials" :key="testimonial.name">
                <Testimonial :testimonial="testimonial" />
            </div>
        </div>
    </div>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
    .testimonials {
        background-image: url("https://wallpaperaccess.com/full/781500.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 440px;
        width: 100%;
    }
}
</style>