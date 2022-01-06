<script>
export default {
    props: {
        testimonial: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="bg-orange-500 lg:bg-white lg:text-black text-white shadow-md h-64 relative p-10 rounded flex flex-col items-center text-center mt-4">
        <img
            :src="testimonial.image"
            :alt="testimonial.name"
            class="object-cover w-20 h-20 rounded-full object-center absolute top-[-15%] left-0"
        />
        <h3 class="font-medium mb-4">{{ testimonial.name }}</h3>
        <p>"{{ testimonial.quote }}"</p>
    </div>
</template>