<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/londres_Lexham.png' />" 
        titre="London nocturne 2"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2017"
        commentaire="Londres, Lexham Mews."
        >
        </Imagedetails>
    </div>
</template>

<script>
import Imagedetails from '@/components/Imagdetails'
import Retourindex from '@/components/Retourindex'

export default{
    components: {
        Imagedetails,
        Retourindex
    },
    data(){
        return{
        }
    }

}