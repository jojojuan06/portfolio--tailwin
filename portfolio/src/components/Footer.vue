<template>
    <footer class="pt-6  text-white bg-[#3e869d]"  style="max-height: 150px;">
            <div class="justify-center items-center">
                <!-- boucle sur chaque link (ajouter dans le futur et je les affiches   -->  
                <div  class="flex justify-center items-center">
                    <a  class="hover:text-[#ED69BD] .no-underline" href="mailto:san@antonio.net">
                    <div class="flex">
                        <span class="mr-2 text-center mdi mdi-mail"></span>
                        <h2 class="text-base font-bold">Nous Contacter</h2>  
                    </div>
                    </a>
                </div>
                <div class="pb-3 text-center">
                    {{ new Date().getFullYear() }} — <strong>Portfolio</strong>
                </div>
            </div>
    </footer>
</template>

<script>
export default {
name:'FooterComponent',

}
</script>

<style scoped>
</style>