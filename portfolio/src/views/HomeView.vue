<template>
<div style="height: 100vh;" class=" flex justify-center items-center flex-col bg-white bg-cover w-screen">
    <div class="">
        <h1>Portfolio</h1> 
    </div>
    <div class="flex">
        <div class="flex justify-center items-center">
            <ul>
                <li><font-awesome-icon :icon="['fab', 'twitter']"/></li>
                <li><font-awesome-icon :icon="['fab', 'discord']"/></li>
                <li><font-awesome-icon :icon="['fab', 'linkedin']"/></li>
                <li><font-awesome-icon :icon="['fab', 'instagram']"/></li>
            </ul> 
        </div>
        <div>
            <div class="flex flex-col justify-center items-center">
                <h2>Bonjour !</h2>
                <p>Je M’apelle Jonathan Morin</p>
                <p class="w-2/4">een the industry's standard dummy text ever since the 1500s, A Web Designer
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>  
            </div>
            <div class="flex justify-center items-center">
                <a href="#" class="font-bold text-white bg-gradient-to-r from-pink-900 via-pink-500 to-orange-800 px-3 py-1 rounded-2xl">Contacter Moi</a>
            </div>
        </div>
        <div class="mr-8">
            <img src="../assets/images/profil--img.png" alt="image de profil">
        </div>
    </div>
</div>

</template>

<script>

</script>

<style scoped>

</style>
