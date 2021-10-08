<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        intro="Images extraites de la serie &quot;Fumeurs de Hué&quot;."
        image="<img src='/galerie/hue_Arbres.png' />" 
        titre="Entre deux arbres"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2016"
        commentaire="Hué, Vietnam."
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/hue_Cloture.png' />" 
        titre="La clotûre brisée"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2016"
        commentaire=""
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