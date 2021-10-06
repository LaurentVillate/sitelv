<template>
        <Imagedetails
        image="<img src='/galerie/tokyo_Meiji.png' />" 
        titre="Le temple de Meiji"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2017"
        commentaire="Tokyo."
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