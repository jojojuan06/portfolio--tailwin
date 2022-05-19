<template>
    <div class="flex flex-col">
        <ul class="flex flex-wrap justify-center  items-center">
            <li class="flex  grow basis-[400px] pt-4 pb-8 flex-col justify-center items-center" v-for="(cv, index) in listCv" :key="index">
            <h2 class="font-bold text-center">{{cv.title}}</h2>
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
                    title:"profil",
                    descriptions: 'Sérieux , Organiser ,d\'un bon relationnel je serais mettre a disposition mon experience afin de realiser diverse projet seul ou en equipe',
                },
                {
                    title:"Formation",
                    descriptions: 'Formation a distance , Dévloppeur web Junior Openclassroom',
                },
                {
                    title:"Compétence",
                    descriptions: 'Réalisez un site vitrine depuis une maquette et charte Graphiqe.Réalisez des animation css.Realisez un back-end avec mongoose(nosql) ou sequelize (sql).Utilisation d\'un frameworl Vue js en front-end',
                },
            ]
        }
    }
}
</script>

<style scoped>
</style>