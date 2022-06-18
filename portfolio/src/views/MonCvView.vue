<template>
    <div  class=" md:h-screen flex flex-col relative justify-center border--img">
        <div class="flex justify-center items-center" >
            <img src="../assets/images/img--cv.png" class="duration-500 cv--img w-[8rem] border-solid border-[1px] border-black rounded-full" alt="">
        </div>
        <CvList/>
        <div class=" flex flex-col md:ml-32 md:mr-28 md:flex-row md:justify-between mb-4 md:mb-0">
            <div class="flex items-center justify-center order-2 md:order-none ">
                <ul class="px-4 pt-8 md:p-4 flex flex-col list--contact">
                    <h2 class="reference--title font-bold text-center mb-4 relative --contact">Contacts</h2>
                    <li class="flex decoration-2 duration-500 underline decoration-transparent hover:decoration-black hover:cursor-pointer hover:underline underline-offset-4"><font-awesome-icon :icon="['fas', 'house']" class="text-white li--contact p-2 bg-black rounded-full"/>
                    <span class="ml-2 whitespace-nowrap">Antibes</span> 
                    </li>
                    <li class="mt-2 flex decoration-2 duration-500 underline decoration-transparent hover:cursor-pointer hover:decoration-black hover:underline underline-offset-4"><font-awesome-icon :icon="['fas', 'phone']" class="text-white li--contact p-2 bg-black rounded-full"/> 
                    <span class="ml-2">06-00-00-00-00</span> 
                    </li>
                    <li class="mt-2 flex decoration-2 duration-500 underline decoration-transparent hover:cursor-pointer hover:decoration-black hover:underline underline-offset-4"><font-awesome-icon :icon="['fas', 'at']" class="text-white li--contact p-2 bg-black rounded-full"/>
                     <a href="mailto:jonh_06@live.fr"><span class="--mail ml-2">jonh_06@live.fr</span> </a>
                    </li>
                    <li class="mt-2 flex decoration-2 duration-500 underline decoration-transparent hover:cursor-pointer hover:decoration-black hover:underline underline-offset-4"><font-awesome-icon :icon="['fab', 'github']" class="text-white li--contact p-2 bg-black rounded-full"/>
                     <a href="https://github.com/jojojuan06" target="_blank"><span class="--mail ml-2">jojojuan06</span> </a>
                    </li>
                </ul> 
            </div>
            <div class="moncv--night relative flex flex-col p-4">
                <h2 class="reference--title --before font-bold text-center mb-4 relative ">HARD SKILLS</h2>
                <div class="flex flex-col justify-center items-center md:items-start">
                        <h3 class="mr-6 md:mr-0">- Mes favoris :</h3>
                    <ul class="flex flex-col  justify-center items-start md:pb-4 mr-4">
                        <li class="ml-16 md:ml-0">
                        <font-awesome-icon :icon="['fab', 'vuejs']" class="text-[green] mr-2"/>
                        Vue-js /
                        <font-awesome-icon :icon="['fab', 'js']" class="text-[yellow] bg-black mr-2"/>
                        JavaScript
                        </li>
                        <li class="ml-16 md:ml-0"><font-awesome-icon :icon="['fab', 'html5']" class="text-[blue] mr-2"/>
                        Html/Css
                        </li>
                    </ul>
                    <ul class="flex flex-col justify-center  items-start mr-4">
                        <h2 class="ml-6 md:ml-0">- Mes occasionnels : </h2>
                        <li class="ml-6 md:ml-0">
                        <font-awesome-icon :icon="['fab', 'node-js']" class="text-[green] mr-2"/>
                        Express/NodeJS
                        </li>
                        <li class="ml-6 md:ml-0">
                        <font-awesome-icon :icon="['fas', 'cube']" class="text-[#3e869d] mr-2"/>
                        Sequelize
                        </li>
                        <li class="ml-6 md:ml-0"><font-awesome-icon :icon="['fab', 'laravel']" class="text-[orange] mr-2"/>
                        Laravel/PHP
                        </li>
                    </ul>
                    <ul class="flex flex-col justify-center  items-start pt-4 mr-12">
                        <h2>- Mes outils : </h2>
                        <li>
                        <font-awesome-icon :icon="['fab', 'git-alt']" class="text-[orange] mr-2"/>
                        Git
                        </li>
                        <li><font-awesome-icon :icon="['fas', 'file-lines']" class="text-[yellow] mr-2 bg-black"/>
                        Jira
                        </li>
                        <li><font-awesome-icon :icon="['fas', 'user-astronaut']" class="text-[orange] mr-2"/>
                        Postman
                        </li>
                    </ul>
                </div>
                
            </div>
            <div class="moncv--night relative h-[190px] md:p-4">
                <h2 class="reference--title font-bold text-center mb-4 --before relative">SOFT SKILLS</h2>
                <div class="flex flex-col justify-center items-center">
                    <ul class="flex flex-col justify-center items-start">
                        <h3>- Mes principaux :</h3>
                        <li>
                        <font-awesome-icon :icon="['fas', 'people-group']" class="text-black"/>
                        Travailler en équipe
                        </li>
                        <li>
                        <font-awesome-icon :icon="['fas', 'handshake-angle']" class="text-black mr-2"/>
                        Entraide
                        </li>
                        <li>
                        <font-awesome-icon :icon="['fas', 'address-book']" class="text-black mr-2"/>
                        Réseau de contacts
                        </li>
                        <li><font-awesome-icon :icon="['fas', 'hand-fist']" class="text-black mr-2"/>
                        Persévérance
                        </li>
                    </ul>
                </div>
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
@media screen and (min-width:1500px) {
    .border--img:before {
        content:"";
        position: absolute;
        background:rgba(0,0,0,0.5);
        height: 2px;
        left: 160px;
        top: 238px;
        animation: img-border ease-in-out .9s forwards; 
    }
    .border--img:after {
        content:"";
        position: absolute;
        background: rgba(0,0,0,0.5);
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

ul {
    text-decoration: none;
}

@media screen and (min-width:768px) {
.moncv--night:before{
    content: '';
    position: absolute;
    top: -2px;
    left:-2px;
    width: 0;
    height: 0;
    background: transparent;
    border: 2px solid transparent;
}

.moncv--night:hover:before {
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

    .moncv--night:after{
        content: '';
        position: absolute;
        top: -2px;
        left:-2px;
        width: 0;
        height: 0;
        background: transparent;
        border: 2px solid transparent;
    }

    .moncv--night:hover:after {
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

@keyframes border--bottom {
        0%{
            height: 0px;
        }
        100% {
            height: 200px;
    }
}
h2.--before::before {
    content: "";
    height: 3px;
    background-color: #ED69BD;
    position: absolute;
    bottom: 0;
    top: 26px;
    animation: h2--before 0.8s linear forwards
}

@keyframes h2--before  {
        0%{
            width: 0;
        }
        100% {
            width: 100px;
    }
}

h2.--contact::before {
    content: "";
    height: 3px;
    background-color: #ED69BD;
    position: absolute;
    bottom: 0;
    top: 26px;
    animation: h2--contact 0.8s linear forwards
}

@keyframes h2--contact  {
        0%{
            width: 0px;
        }
        100% {
            width: 65px;
    }
}
</style>