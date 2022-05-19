<template>
    <div class="flex flex-col">
        <ul class="flex flex-wrap justify-center  items-center">
            <li class="flex  grow basis-[400px] pb-8 flex-col justify-center items-center" v-for="(cv, index) in listCv" :key="index">
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