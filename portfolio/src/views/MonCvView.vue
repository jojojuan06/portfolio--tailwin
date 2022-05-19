<template>
    <div style="height: 100vh;" class="flex flex-col justify-start items-center">
        <div class="flex justify-center items-center relative img--after" >
            <img src="../assets/images/img--cv.png" class="w-[8rem] " alt="">
        </div>
        <CvList/>
    </div>
</template>

<script>
import CvList from "../components/CvList.vue";
export default {
    components: { CvList }
}
</script>

<style scoped>
.img--after:before {
    content:"";
    position: absolute;
    background: black;
    width: 300px;
    height: 2px;
    left: 160px;
    top: 85px;
    /* animation: bottom-border ease-in-out .9s forwards; */
}
.img--after:after {
    content:"";
    position: absolute;
    background: black;
    width: 300px;
    height: 2px;
    right: 160px;
    top: 85px;
    /* animation: bottom-border ease-in-out .9s forwards; */
}
@keyframes bottom-border {
    0% { width: 0px; }
    100% { width: 400px; }
}
</style>