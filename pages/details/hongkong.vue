<template>
        <Imagedetails
        image="<img src='/galerie/hongkong_Pont.png' />" 
        titre="Le petit pont rouge"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2016"
        commentaire="Hong Kong, Nan Liang Garden."
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