<template>
    <div class="flex ">
        <ul class="flex flex-wrap justify-center items-center">
            <li style="max-width:400px" class="flex  pb-8 flex-col justify-center items-center" v-for="(cv, index) in listCv" :key="index">
            <h2 class="font-bold text-center">{{cv.title}}</h2>
            <p class="w-2/4 text-center">{{cv.descriptions}}</p>
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
                    descriptions: 'Mettre en place un systeme de veille,Développez vos soft skills,Découvrez les métiers de développeur',
                },
                {
                    title:"Formation",
                    descriptions: 'Mettre en place un systeme de veille,Développez vos soft skills,Découvrez les métiers de développeur',
                },
                {
                    title:"Compétence",
                    descriptions: 'Mettre en place un systeme de veille,Développez vos soft skills,Découvrez les métiers de développeur',
                },
            ]
        }
    }
}
</script>