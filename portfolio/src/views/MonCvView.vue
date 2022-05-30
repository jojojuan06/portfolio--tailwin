<template>
    <div  class=" md:h-screen flex flex-col relative justify-center border--img">
        <div class="flex justify-center items-center" >
            <img src="../assets/images/img--cv.png" class="duration-500 cv--img w-[8rem] border-solid border-[1px] border-black rounded-full" alt="">
        </div>
        <CvList/>
        <div class="flex flex-col  md:flex-row md:justify-around mb-4 md:mb-0">
            <div class="flex items-center justify-center order-2 md:order-none">
                <ul class="px-4 pt-8 md:p-4 flex flex-col list--contact">
                    <h3 class="reference--title font-bold text-center">Contacts</h3>
                    <li class="flex decoration-2 duration-500 underline decoration-transparent hover:decoration-black hover:cursor-pointer hover:underline underline-offset-4"><font-awesome-icon :icon="['fas', 'house']" class="text-white --contact p-2 bg-black rounded-full"/>
                    <span class="ml-2">19 avenue louis gallet</span> 
                    </li>
                    <li class="py-2 flex decoration-2 duration-500 underline decoration-transparent hover:cursor-pointer hover:decoration-black hover:underline underline-offset-4"><font-awesome-icon :icon="['fas', 'phone']" class="text-white --contact p-2 bg-black rounded-full"/> 
                    <span class="ml-2">06-00-00-00-00</span> 
                    </li>
                    <li class="flex decoration-2 duration-500 underline decoration-transparent hover:cursor-pointer hover:decoration-black hover:underline underline-offset-4"><font-awesome-icon :icon="['fas', 'at']" class="text-white --contact p-2 bg-black rounded-full"/>
                     <a href="mailto:jonh_06@live.fr"><span class="--mail ml-2">jonh_06@live.fr</span> </a>
                     </li>
                </ul> 
            </div>
            <div>
                <ul class="moncv--night flex flex-col justify-center  items-center md:p-4">
                <h3 class="reference--title font-bold text-center">Réference Outils</h3>
                <li>
                <font-awesome-icon :icon="['fab', 'js']" class="text-[yellow] bg-black mr-2"/>
                JavaScript
                <font-awesome-icon :icon="['fas', 'circle']" class="--blue mr-2 ml-6"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--blue mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--transparent mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--transparent mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--transparent mr-2"/>
                </li>
                <li>
                <font-awesome-icon :icon="['fas', 'cube']" class="text-[#3e869d] mr-2"/>
                Sequelize
                <font-awesome-icon :icon="['fas', 'circle']" class="--blue mr-2 ml-6"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--blue mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--transparent mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--transparent mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--transparent mr-2"/>
                </li>
                <li>
                <font-awesome-icon :icon="['fab', 'vuejs']" class="text-[green] mr-2"/>
                Vue-js
                <font-awesome-icon :icon="['fas', 'circle']" class="--blue mr-2 ml-12"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--blue mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--blue mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--transparent mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--transparent mr-2"/>
                </li>
                <li><font-awesome-icon :icon="['fab', 'html5']" class="text-[blue] mr-2"/>
                Html/Css
                <font-awesome-icon :icon="['fas', 'circle']" class="--blue mr-2 ml-7"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--blue mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--blue mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--transparent mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--transparent mr-2"/>
                </li>
                <li><font-awesome-icon :icon="['fas', 'file-lines']" class="text-[yellow] mr-2 bg-black"/>
                Google-Slide
                <font-awesome-icon :icon="['fas', 'circle']" class="--blue mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--blue mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--blue mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--transparent mr-2"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="--transparent mr-2"/>
                </li>
            </ul>
            </div>
            
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
        background:black;
        height: 2px;
        left: 160px;
        top: 238px;
        animation: img-border ease-in-out .9s forwards; 
    }
    .border--img:after {
        content:"";
        position: absolute;
        background: black;
        height: 2px;
        right: 160px;
        top: 238px;
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
ul.moncv--night:before{
    content: '';
    position: absolute;
    top: -2px;
    left:-2px;
    width: 0;
    height: 0;
    background: transparent;
    border: 2px solid transparent;
}

ul.moncv--night:hover:before {
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

    ul.moncv--night:after{
        content: '';
        position: absolute;
        top: -2px;
        left:-2px;
        width: 0;
        height: 0;
        background: transparent;
        border: 2px solid transparent;
    }

    ul.moncv--night:hover:after {
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
.--blue {
    color: #3e869d;
    border: solid black 1px;
    border-radius:16px;
}
.--transparent {
    color: transparent;
    border: solid black 1px;
    border-radius:16px;
}
</style>