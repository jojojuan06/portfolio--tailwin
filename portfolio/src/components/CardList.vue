<template>
    <div class="flex flex-wrap justify-center items-center gap-x-10 gap-y-10 pb-4 pt-4" style="max-width:1350px">
        <div v-for="(card, index) in cards" :key="index">
            <!-- kebab-case en HTML -->
            <Card :card-data="card"/>
        </div>
    </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
name: "CardList",
components: {
        Card
    },
    data() {
        return {
            cards: [
                {
                    projectnumber:"01",
                    name: 'Prenez en main votre formation de dévloppeur web',
                    image: '/src/assets/images/project01.png',
                    descriptions: 'Mettre en place un systeme de veille,Développez vos soft skills,Découvrez les métiers de développeur',
                    duration: '20 heures',
                    link:'https://docs.google.com/presentation/d/1BeG7d45GTPg-toqZ4pwp6J1PYjSezym0Xtl4ctGSx8c/edit?usp=sharing'
                },
                {
                    projectnumber:"02",
                    name: 'Transformez une maquette en site web avec HTML & CSS' ,
                    image: '/src/assets/images/project02.png',
                    descriptions: 'créer ce prototype en intégrant la maquette en HTML et CSS (utilisation de grid et flexbox)',
                    duration: '90 heures',
                    link:'https://jojojuan06.github.io/P2_morinjonathan_code/'
                },
                {
                    projectnumber:"03",
                    name: 'Dynamisez une page web avec des animations CSS' ,
                    image: '/src/assets/images/project03.png',
                    descriptions: 'créer des animations css modernes,utilisation de Git/Github,utiliser sass',
                    duration: '70 heures',
                    link: 'https://jojojuan06.github.io/JonathanMorin_3_10012022/'
                },
                {
                    projectnumber:"04",
                    name: 'Optimisez un site web existant' ,
                    image: '/src/assets/images/project04.png',
                    descriptions: 'Amélioration du SEO, de la vitesse de chargement du site, de l’accessibilité',
                    duration: '30 heures',
                    link: 'https://jojojuan06.github.io/MorinJonathan_4_28012022/'
                },
                {
                    projectnumber:"05",
                    name: 'Construisez un site e-commerce en JavaScript' ,
                    image: '/src/assets/images/project05.png',
                    descriptions: 'Communiquer avec une api en utilisant des methodes https comme fetch et interagissez avec le dom',
                    duration: '90 heures',
                    link:'https://docs.google.com/presentation/d/14Mu6S6YP2FFUiHrrLEhUmEJynQuAmJaxMr0x8rciet0/edit#slide=id.ge7b5133482_0_0'
                },
                {
                    projectnumber:"06",
                    name: 'Construisez une API sécurisée pour une application d\'avis gastronomiques' ,
                    image: '/src/assets/images/project06.png',
                    descriptions: 'Utilisations de node.js pour le back-end , Utilisation d\'une base de donnée nosql (MongoDb),crée une Api rest (CRUD)',
                    duration: '50 heures',
                    link:'https://docs.google.com/presentation/d/1lxK69WqPIH0NQWJVFobVImQpEjJAiKjf94UW4XU4jqY/edit?usp=sharing'
                },
                {
                    projectnumber:"07",
                    name: 'Créez un réseau social d’entreprise' ,
                    image: '/src/assets/images/project07.png',
                    descriptions: 'En plus d\'un back end avec sequelize/mysql/wamp utiliser un framework-js front-end Vue-js et Vuetify et axios pour les requetes http',
                    duration: '50 heures',
                    link:'https://629f9cd2eaec8a04206857e5--classy-mochi-95f0ad.netlify.app/'
                },
            ]
        }
    }
}
</script>