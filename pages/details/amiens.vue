<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/amiens_Cottenchy.png' />" 
        :titre="$t('details.amiens.a.title')"
        :formatpapier="$t('details.amiens.a.papersize')"
        :formatimage="$t('details.amiens.a.imagesize')"
        :date="$t('details.amiens.a.date')"
        :commentaire="$t('details.amiens.a.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/amiens_Bapaume.png' />" 
        :titre="$t('details.amiens.b.title')"
        :formatpapier="$t('details.amiens.b.papersize')"
        :formatimage="$t('details.amiens.b.imagesize')"
        :date="$t('details.amiens.b.date')"
        :commentaire="$t('details.amiens.b.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/amiens_Neige.png' />" 
        :titre="$t('details.amiens.c.title')"
        :formatpapier="$t('details.amiens.c.papersize')"
        :formatimage="$t('details.amiens.c.imagesize')"
        :date="$t('details.amiens.c.date')"
        :commentaire="$t('details.amiens.c.comment')"
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




