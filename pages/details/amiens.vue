<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/amiens_Cottenchy.png' />" 
        titre="La rue de Cottenchy au crépuscule"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2019"
        commentaire="Amiens, haut de la rue de Cottenchy, vue du boulevard de Bapaume."
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/amiens_Bapaume.png' />" 
        titre="Vue du boulevard Bapaume"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2019"
        commentaire="Amiens."
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/amiens_Neige.png' />" 
        titre="La place du Don sous la neige"
        formatpapier="29,7 x 42 cm"
        formatimage="20 x 35 cm"
        date="2019"
        commentaire="Amiens."
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




