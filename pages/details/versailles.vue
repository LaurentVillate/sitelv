<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/versailles_Chateau.png' />" 
        titre="Ronde de nuit au château de Versailles"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2021"
        commentaire="Le chateau de Versailles vu depuis le parterre du Nord."
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/versailles_Chateaujour.png' />" 
        titre="Fenêtre dans le salon de la Guerre"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2021"
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