<template>
        <Imagedetails
        image="<img src='/galerie/battambang_Airport.png' />" 
        titre="La tour de contrôle de l'aéroport de Battambang"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2019"
        commentaire="Battambang, Cambodge."
        >
        </Imagedetails>
</template>

<script>
import Imagedetails from '@/components/Imagdetails'

export default{
    components: {
        Imagedetails,
    },
    data(){
        return{
        }
    }

}