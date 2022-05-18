<template>
    <div style="height: 100vh;"  class="flex justify-center items-center">
        <div class="flex flex-col md:flex-row flex-wrap w-screen justify-center items-center">
            <div class="barre relative mr-4 w-screen text-center" style="max-width:300px">
                <h2 class="font-bold text-4xl pb-4">Let's talk business</h2>
                <p class="max-w-[300px]">een the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book.
                </p>
            </div>
            <div class="flex justify-center items-center">
                <form method="POST" action="https://herotofu.com/start" class="w-[250px]">
                    <label class="block mb-6">
                        <span class="text-gray-700">Votre nom</span>
                        <input type="text" name="name" class="font-text-center placeholder-[black] block w-full mt-1 bg-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Joe Bloggs"/>
                    </label>
                    <label class="block mb-6">
                        <span class="text-gray-700">Votre adresse mail</span>
                        <input name="email" type="email" class="text-center placeholder-[black] block w-full mt-1 bg-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="joe.bloggs@example.com" required/>
                    </label>
                    <label class="block mb-6">
                        <span class="text-gray-700">Message</span>
                        <textarea name="message" class="pt-6 text-center placeholder-[black] h-20 block w-full mt-1 bg-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"  placeholder="Tapez votre text ici...">
                        </textarea>
                    </label>
                    <div class="mb-6">
                        <button
                        type="submit"
                        class="
                            delay-500
                            font-bold
                            h-10
                            w-full
                            px-5
                            text-indigo-100
                            bg-[#3e869d]
                            hover:transition-colors
                            duration-150
                            focus:shadow-outline
                            hover:bg-[#ED69BD]
                        "
                        >
                        Contactez-moi
                        </button>
                    </div>
                </form>
            </div>
            <div class="barre2 relative"></div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media screen and (min-width: 768px){
    .barre:after{
    content: "";
    position: absolute;
    background: black;
    width: 4px;
    height: 400px;
    left: -40px;
    bottom: -90px;
}
.barre2:before {
    content: "";
    position: absolute;
    background: black;
    width: 400px;
    height: 4px;
    top: 250px;
    right:1px ;
    }
}

</style>
