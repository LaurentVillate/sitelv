<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/kampot_Linge.png' />" 
        titre="linge au vent"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2015"
        commentaire="Kampot, Cambodge."
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