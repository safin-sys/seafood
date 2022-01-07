<script>
import { useRoute } from "vue-router";
import getSlug from "../libs/getSlug";

export default {
    data() {
        return {
            recipe: {},
        };
    },
    async mounted() {
        const id = useRoute().params.id
        const res = await fetch("https://raw.githubusercontent.com/safin-sys/seafood/master/public/recipe.json");
        const data = await res.json();
        this.recipe = data.find(recipe => getSlug(recipe.name) === id);
        console.log(this.recipe);
    },
}
</script>

<template>
    <div class="container mx-auto px-4 my-8" v-if="recipe.image">
        <img
            :src="`https://raw.githubusercontent.com/safin-sys/seafood/master/public/${recipe.image.url}`"
            :alt="recipe.name"
            class="w-full lg:h-[400px] object-cover object-center"
        />
        <h1 class="mt-8 font-bold">{{ recipe.name }}</h1>
        <p class="my-2">{{ recipe.recipeYield }}</p>
        <p>{{ recipe.description }}</p>
        <hr class="my-4" />
        <h2 class="font-bold mb-4">Ingredients</h2>
        <ul v-for="ing in recipe.recipeIngredient" :key="ing">
            <li>{{ ing }}</li>
        </ul>
        <h2 class="font-bold my-4">Instruction</h2>
        <ul v-for="ins in recipe.recipeInstructions" :key="ins">
            <li>{{ ins.text }}</li>
        </ul>
    </div>
</template>