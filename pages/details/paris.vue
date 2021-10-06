<template>
        <Imagedetails
        image="<img src='/galerie/paris_PontMarie.png' />" 
        titre="Regard sur le pont Marie"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2018"
        commentaire="Paris, le pont Marie vu du quai des Célestins, face à l'île Saint-Louis."
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