<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/battambang_Airport.png' />" 
        titre="La tour de contrôle de l'aéroport de Battambang"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2019"
        commentaire="Battambang, Cambodge."
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/battambang_Marche.png' />" 
        titre="Le marché central de Battambang"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2019"
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