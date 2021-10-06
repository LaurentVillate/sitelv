<template>
        <Imagedetails
        image="<img src='/galerie/kampot_Linge.png' />" 
        titre="linge au vent"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2015"
        commentaire="Kampot, Cambodge."
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