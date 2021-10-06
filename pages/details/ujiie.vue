<template>
        <Imagedetails
        image="<img src='/galerie/ujiie_Parking.png' />" 
        titre="Ujiie, parking"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2018"
        commentaire="Parking du magasin Uniclo à Ujiie, Japon."
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