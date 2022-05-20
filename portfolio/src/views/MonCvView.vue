<template>
    <div  class="md:h-screen flex flex-col relative justify-start border--img">
        <div class="flex justify-center items-center" >
            <img src="../assets/images/img--cv.png" class="cv--img w-[8rem]" alt="">
        </div>
        <CvList/>
        <div class="flex  md:ml-24 mb-4 md:mb-0">
            <ul class=" flex flex-col justify-center  items-center md:p-4">
            <h3 class="font-bold text-center">Réference Outils</h3>
                <li><font-awesome-icon :icon="['fab', 'js']" class="text-[yellow] bg-black mr-2"/>JavaScript
                <font-awesome-icon :icon="['fas', 'circle']" class="text-[#3e869d] mr-2"/>
                </li>
                <li class="mr-2"><font-awesome-icon :icon="['fas', 'cube']" class="text-[#3e869d] mr-2"/>Sequelize
                <font-awesome-icon :icon="['fas', 'circle']" class="text-[#3e869d] mr-2"/></li>
                <li class="mr-2"><font-awesome-icon :icon="['fab', 'vuejs']" class="text-[green] mr-2"/>Vue-js
                <font-awesome-icon :icon="['fas', 'circle']" class="text-[#3e869d] mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="text-[#3e869d] mr-2"/>
                </li>
                <li class="ml-8"><font-awesome-icon :icon="['fab', 'html5']" class="text-[blue] mr-2"/>Html/Css
                <font-awesome-icon :icon="['fas', 'circle']" class="text-[#3e869d] mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="text-[#3e869d] mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="text-[#3e869d] mr-2"/>
                </li>
                <li class="ml-14"><font-awesome-icon :icon="['fas', 'file-lines']" class="text-[yellow] mr-2 bg-black"/>Google-Slide
                <font-awesome-icon :icon="['fas', 'circle']" class="text-[#3e869d] mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="text-[#3e869d] mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="text-[#3e869d] mr-2"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import CvList from "../components/CvList.vue";
export default {
    components: { CvList }
}
</script>

<style scoped>
@media screen and (min-width:1450px) {
    .border--img:before {
        content:"";
        position: absolute;
        background: black;
        height: 2px;
        left: 160px;
        top: 85px;
        animation: img-border ease-in-out .9s forwards; 
    }
    .border--img:after {
        content:"";
        position: absolute;
        background: black;
        height: 2px;
        right: 160px;
        top: 85px;
        animation: img-border ease-in-out .9s forwards; 
    }
    @keyframes img-border {
        0% { width: 0px; }
        100% { width: 500px; }
    }
}

@media screen and (min-width:768px) {
    ul{
    position: relative;
    text-decoration: none;
}
ul:before{
    content: '';
    position: absolute;
    top: -2px;
    left:-2px;
    width: 0;
    height: 0;
    background: transparent;
    border: 2px solid transparent;
}

ul:hover:before {
    animation: border--before 1.5s linear forwards
}

@keyframes border--before {
        0%{
            width: 0;
            height: 0;
            border-top-color: black;
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-left-color: transparent;
        }
        50% {
            width:100%;
            height: 0;
            border-top-color:black;
            border-right-color: black;
            border-bottom-color: transparent;
            border-left-color: transparent;
        }
        100% {
            width:100%;
            height: 100%;
            border-top-color: black;
            border-right-color: black;
            border-bottom-color: transparent;
            border-left-color: transparent;
        }
    
    }

    ul:after{
        content: '';
        position: absolute;
        top: -2px;
        left:-2px;
        width: 0;
        height: 0;
        background: transparent;
        border: 2px solid transparent;
    }

    ul:hover:after {
        animation: border--after 1.5s linear forwards
    }

    @keyframes border--after {
        0%{
            width: 0;
            height: 0;
            border-top-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-left-color: black;
        }
        50% {
            width:0;
            height: 100%;
            border-top-color:transparent;
            border-right-color: transparent;
            border-bottom-color: black;
            border-left-color: black;
        }
        100% {
            width:100%;
            height: 100%;
            border-top-color: transparent;
            border-right-color: transparent;
            border-bottom-color: black;
            border-left-color: black;
        }
    
    }
}

</style>