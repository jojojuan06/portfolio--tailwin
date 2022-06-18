<template>
    <div class="flex flex-col">
        <ul class="flex flex-wrap justify-center  pt-8 items-center">
            <li class="self-start flex  grow basis-[400px] pt-4 pb-8 flex-col justify-center items-center" v-for="(cv, index) in listCv" :key="index">
            <h2 class="font-bold text-center --before relative pb-2">{{cv.title}}</h2>
            <p style="max-width:300px" class="w-2/4 text-center pb-4">{{cv.descriptions}}</p>
            <hr class="h-4 w-[70%] md:hidden"> 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
name: "CvList",
    data() {
        return {
            listCv: [
                {
                    title:"Profil",
                    descriptions: 'Sérieux, Organisé, d\'un bon relationnel, je saurai mettre à disposition mon expérience afin de réaliser divers projets seul ou en équipe',
                },
                {
                    title:"Formation",
                    descriptions: 'Formation à distance, Développeur web Junior Openclassrooms',
                },
                {
                    title:"Compétences",
                    descriptions: 'Réaliser un site vitrine depuis une maquette et une charte graphique. Réaliser des animations CSS. Réaliser un back-end avec MongoDB(NoSQL) ou Sequelize (SQL). Utilisation d\'un framework VueJS en front-end',
                },
            ]
        }
    }
}
</script>

<style scoped>

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
            width: 100%;
    }
}
</style>