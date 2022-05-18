<template>
    <div style="height: 100vh;"  class="flex justify-center items-center">
        <div class="flex flex-col md:flex-row flex-wrap w-screen justify-center items-center">
            <div class="barre relative md:mr-12 w-screen text-center" style="max-width:300px">
                <h2 class="font-bold text-[2rem] pb-4">Let's talk business</h2>
                <p class="max-w-[300px] text-center">een the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book.
                </p>
            </div>
            <div class="flex justify-center items-center">
                <!-- l'évènement `submit` ne rechargera plus la page -->
                <form ref="form"  @submit.prevent="sendEmail" class="w-[250px]">
                    <label class="block mb-6">
                        <span class="text-gray-700">Votre nom</span>
                        <input  type="text" name="name" class="py-3 text-center placeholder-[black] block w-full mt-1 bg-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Joe Bloggs"/>
                    </label>
                    <label class="block mb-6">
                        <span class="text-gray-700">Votre adresse mail</span>
                        <input  name="email" type="email" class="py-3 text-center placeholder-[black] block w-full mt-1 bg-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="joe.bloggs@example.com" required/>
                    </label>
                    <label class="block mb-6">
                        <span class="text-gray-700">Message</span>
                        <textarea  name="message" class="pt-6 text-center placeholder-[black] h-20 block w-full mt-1 bg-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"  placeholder="Tapez votre text ici...">
                        </textarea>
                    </label>
                    <div class="mb-6">
                        <input
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
                        value="Contactez-moi"
                        >
                    </div>
                </form>
            </div>
            <div class="barre2 relative"></div>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
        name:'Contact',
        methods: {
        sendEmail() {
            emailjs.sendForm('service_kdb3q67', 'template_oz4cy29',this.$refs.form,'GcXikoVfjeR6n0TXK') 
            .then((res) => {
                alert("Message envoyé avec success");
            }).catch((error) => { console.error(error); });
        }
    }
}
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
