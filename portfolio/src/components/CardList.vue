<template>
    <div class=" h-screen flex flex-wrap justify-center items-center gap-x-10 pt-4">
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
                    name: 'Prenez en main votre formation de dévloppeur web',
                    image: './images/project01.png',
                    descriptions: 'Mettre en place un systeme de veille,Développez vos soft skills,Découvrez les métiers de développeur',
                    duration: '20 heures'
                },
                {
                    name: 'Transformez une maquette en site web avec HTML & CSS' ,
                    image: './images/project02.png',
                    descriptions: 'créer ce prototype en intégrant la maquette en HTML et CSS (utilisation de grid et flexbox)',
                    duration: '90 heures'
                },
                {
                    name: 'Dynamisez une page web avec des animations CSS' ,
                    image: './images/project03.png',
                    descriptions: 'créer des animations css modernes,utilisation de Git/Github,utiliser sass',
                    duration: '70 heures'
                },
                {
                    name: 'Optimisez un site web existant' ,
                    image: './images/project04.png',
                    descriptions: 'Amélioration du SEO, de la vitesse de chargement du site, de l’accessibilité',
                    duration: '30 heures'
                },
                {
                    name: 'Construisez un site e-commerce en JavaScript' ,
                    image: './images/project05.png',
                    descriptions: 'Communiquer avec une api en utilisant des methodes https comme fetch et interagissez avec le dom',
                    duration: '90 heures'
                },
                {
                    name: 'Construisez une API sécurisée pour une application d\'avis gastronomiques' ,
                    image: './images/project06.png',
                    descriptions: 'Utilisations de node.js pour le back-end , Utilisation d\'une base de donnée nosql (MongoDb),crée une Api rest (CRUD)',
                    duration: '50 heures'
                },
                {
                    name: 'Créez un réseau social d’entreprise' ,
                    image: './images/project07.png',
                    descriptions: 'En plus d\'un back end avec sequelize/mysql/wamp utiliser un framework-js front-end Vue-js et Vuetify et axios pour les requetes http',
                    duration: '50 heures'
                },
            ]
        }
    }
}
</script>