<script>
import getSlug from "../libs/getSlug"

export default {
    props: {
        recipe: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            slug: getSlug(this.recipe.name)
        }
    },
}
</script>

<template>
    <router-link :to="`/recipe/${slug}`" class="w-[calc(100vw-4rem)] lg:w-full overflow-hidden shadow-lg">
        <img
            class="w-full h-64 object-cover object-center"
            :src="`https://raw.githubusercontent.com/safin-sys/seafood/master/public/${recipe.image.url}`"
            :alt="recipe.name"
        />
        <div class="px-6 py-4">
            <h2 class="font-bold text-xl mb-2">{{ recipe.name }}</h2>
            <p class="text-gray-700 text-base">{{ recipe.description }}</p>
        </div>
    </router-link>
</template>

<style scoped>
h2 {
    display: -webkit-box;
    max-width: 200px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
p {
    display: -webkit-box;
    max-width: 200px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>