<template>
    <div style="height: 100vh;" class="flex flex-col relative justify-start border--img">
        <div class="flex justify-center items-center" >
            <img src="../assets/images/img--cv.png" class=" w-[8rem]" alt="">
        </div>
        <CvList/>
        <div class="flex flex-col">
            <h3 class="font-bold text-center">Réference Outils</h3>
            <ul class="flex flex-col justify-center items-center">
                <li><font-awesome-icon :icon="['fab', 'js']" class="text-[yellow] bg-black mr-2"/>JavaScript</li>
                <li><font-awesome-icon :icon="['fab', 'vuejs']" class="text-[green] mr-2"/>/>Vue-js</li>
                <li><font-awesome-icon :icon="['fab', 'html5']" class="text-[blue] mr-2"/>Html/Css</li>
                <li><font-awesome-icon :icon="['fas', 'file-lines']" class="text-[yellow] mr-2 bg-black"/>Google-Slide</li>
                <li><font-awesome-icon :icon="['fas', 'cube']" class="text-[#3e869d] mr-2"/>Sequelize</li>
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

</style>