<template>
    <header class="shadow-md bg-white">
        <nav class="container mx-auto px-4 flex items-center justify-between">
            <div class="text-orange-500 font-bold text-2xl flex items-center h-16">
                Seafood
                <img src="/octopus.svg" alt="Logo" class="h-8 w-8 ml-2" />
            </div>
            <ul class="flex items-center gap-4 lg:gap-8">
                <li class="font-semibold">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="font-semibold">
                    <router-link to="/about">About</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>