<template>
    <div style="height: 100vh;"  class="flex justify-end items-center mr-56">
        <div class="w-[400px]">
            <form method="POST" action="https://herotofu.com/start">
            <label class="block mb-6">
                <span class="text-gray-700">Votre nom</span>
                <input type="text" name="name" class="block w-full mt-1 bg-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Joe Bloggs"/>
            </label>
            <label class="block mb-6">
                <span class="text-gray-700">Votre adresse mail</span>
                <input name="email" type="email" class=" block w-full mt-1 bg-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="joe.bloggs@example.com" required/>
            </label>
            <label class="block mb-6">
                <span class="text-gray-700">Message</span>
                <textarea name="message" class="block w-full mt-1 bg-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="3" placeholder="Tapez votre text ici...">
                </textarea>
            </label>
            <div class="mb-6">
                <button
                type="submit"
                class="
                    h-10
                    w-full
                    px-5
                    text-indigo-100
                    bg-[#3e869d]
                    transition-colors
                    duration-150
                    focus:shadow-outline
                    hover:bg-[#ED69BD]
                "
                >
                Contactez-moi
                </button>
            </div>
            <div>
            </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
