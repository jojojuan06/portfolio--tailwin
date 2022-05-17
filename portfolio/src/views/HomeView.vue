<template>
<div style="height: 100vh;" class=" flex justify-center items-center flex-col bg-white bg-cover w-screen">
    <div class="font-bold text-4xl mb-32">
        <span>Port</span> 
        <span class="text-[#EEAB61]">folio</span>
    </div>
    <div class="flex">
        <div class="flex justify-center items-center ml-4">
            <ul>
                <li class="transition duration-500 transform hover:rotate-180"><font-awesome-icon :icon="['fab', 'twitter']"/></li>
                <li class="transition duration-500 transform hover:rotate-180"><font-awesome-icon :icon="['fab', 'discord']"/></li>
                <li class="transition duration-500 transform hover:rotate-180"><font-awesome-icon :icon="['fab', 'linkedin']"/></li>
                <li class="transition duration-500 transform hover:rotate-180"><font-awesome-icon :icon="['fab', 'instagram']"/></li>
            </ul> 
        </div>
        <div>
            <div style="max-width:400px;" class=" flex flex-col justify-center items-center">
                <h2 class="font-bold">Bonjour !</h2>
                <br>
                <p class="font-bold">Je M’apelle Jonathan Morin</p>
                <br>
                <p class="font-bold w-2/4">een the industry's standard dummy text ever since the 1500s,when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book.<strong class="text-[#EEAB61]">Web Designer </strong>! 
                </p>  
            </div>
            <div class="flex justify-center items-center">
                <a href="#" class="mt-4 font-bold text-white bg-gradient-to-r from-pink-900 via-pink-500 to-orange-800 px-3 py-1 rounded-2xl">Contacter Moi</a>
            </div>
        </div>
        <div class="mr-8">
            <img style="max-width:300px;" src="../assets/images/profil--img.png" alt="image de profil">
        </div>
    </div>
</div>

</template>

<script>

</script>

<style scoped>
ul{
    position: relative;
}
ul:after {
    content:"";
    position: absolute;
    background: black;
    width: 4px;
    height: 100px;
    left: 6px;
    bottom: 117px;
}
ul:before {
    content:"";
    position: absolute;
    background: black;
    width: 4px;
    height: 100px;
    left: 6px;
    top: 117px;
}
</style>
