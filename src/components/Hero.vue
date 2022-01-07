<script>
export default {
    data() {
        return {
            img: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/2019/11/06/jianyang.png?itok=p8trcyBP"
        };
    },
}
</script>

<template>
    <main class="grid h-[calc(100vh-4rem)] lg:grid-cols-[1fr,2fr] container mx-auto px-4">
        <div class="flex justify-center items-center flex-col lg:items-start my-16">
            <h1 class="font-bold text-4xl text-center lg:text-left">
                Jian Yang&apos;s 12 best octopus recipes!
            </h1>
            <p class="mt-4 font-semibold text-lg">Find your favorite recipe now</p>
            <a
                href="#recipies"
                class="bg-orange-500 px-4 py-2 justify-self-start mt-4 font-semibold text-white"
            >See Recipies</a>
        </div>
        <img :src="img" alt="Chef Jian Yang" class="lg:absolute right-0" />
    </main>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
    main {
        overflow: hidden;
    }
    main > img {
        height: calc(100vh - 4rem);
        max-width: 65vw;
        object-fit: cover;
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 20% 100%);
    }
}
</style>
