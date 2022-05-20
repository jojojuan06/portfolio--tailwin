<template>
<div style="height: 100vh;" class=" flex justify-center items-center flex-col bg-white bg-cover">
    <div class="font-bold text-4xl mb-32">
        <span>Port</span> 
        <span class="text-[#EEAB61]">folio</span>
    </div>
    <div class="flex flex-wrap  flex-col md:flex-row">
        <div class="md:order-1">
            <div style="max-width:400px;" class="flex flex-col justify-center items-center">
                <h2 class="font-bold">Bonjour !</h2>
                <br>
                <p class="font-bold">Je m’apelle Jonathan Morin</p>
                <br>
                <p class="font-bold w-2/4 text-center">een the industry's standard dummy text ever since the 1500s,when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book.<strong class="text-[#EEAB61]">Web Designer </strong>! 
                </p>  
            </div>
            <div class="flex justify-center items-center">
                <router-link to="/contact" class="duration-700  border-solid border-2 border-black hover:scale-[1.05] mt-4 font-bold text-black hover:bg-[#ED69BD] px-3 py-1 rounded-2xl">Contacter Moi</router-link>
            </div>
        </div>
        
        <div class="mr-8  hidden md:flex md:order-1">
            <img style="max-width:300px;" src="../assets/images/profil--img.png" alt="image de profil">
        </div>
        <div class=" flex flex-col md:flex-row justify-center items-center ml-4">
            <ul class="flex md:inline m-4">
                <li class="transition duration-500 transform hover:rotate-180"><font-awesome-icon :icon="['fab', 'twitter']"/></li>
                <li class="transition duration-500 transform hover:rotate-180"><font-awesome-icon :icon="['fab', 'discord']"/></li>
                <li class="transition duration-500 transform hover:rotate-180"><font-awesome-icon :icon="['fab', 'linkedin']"/></li>
                <li class="transition duration-500 transform hover:rotate-180"><font-awesome-icon :icon="['fab', 'instagram']"/></li>
            </ul> 
        </div>
    </div>
</div>

</template>

<script>
</script>

<style scoped>
li {
    margin: 8px;
}
@media screen and (min-width:768px) {
    ul{
        position: relative;
    } 
    ul:after {
        content:"";
        position: absolute;
        background: black;
        width: 4px;
        height: 100px;
        left: 13px;
        bottom: 140px;
        animation: top-border ease-in-out .9s forwards;
    }
    ul:before {
        content:"";
        position: absolute;
        background: black;
        width: 4px;
        left: 13px;
        top: 140px;
        animation: bottom-border ease-in-out .9s forwards;
    }
}
    
@keyframes top-border {
    0% { height: 0px; }
    100% { height: 100px; }
}

@keyframes bottom-border {
    0% { height: 0px; }
    100% { height: 100px; }
}
</style>
