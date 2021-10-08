<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/dalat_Lycee.png' />" 
        titre="Le lycée Yersin au crépuscule"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2021"
        commentaire="Dalat, Vietnam."
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
        Retourindex,
    },
    data(){
        return{
        }
    }

}