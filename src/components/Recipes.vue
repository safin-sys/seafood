<script>
import Recipe from "./Recipe.vue";
export default {
    components: {
        Recipe
    },
    data() {
        return {
            recipes: []
        };
    },
    async mounted() {
        const res = await fetch("/recipes.json");
        const data = await res.json();
        this.recipes = data;
    },
}
</script>

<template>
    <div id="recipes" class="container mx-auto px-4 my-16">
        <div class="flex items-center flex-col">
            <h1 class="text-center font-bold text-xl">Our Recipies</h1>
            <hr class="w-24 mt-2 h-1 bg-orange-500 text-transparent" />
        </div>

        <div class="grid lg:grid-cols-4 justify-center gap-8 mt-16">
            <div v-for="recipe in recipes" :key="recipe.name">
                <Recipe :recipe="recipe" />
            </div>
        </div>
    </div>
</template>