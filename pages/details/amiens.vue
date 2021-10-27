<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img alt='Amiens rue de Cottenchy' src='/galerie/amiens_Cottenchy.png' />" 
        :titre="$t('details.amiens.a.title')"
        :formatpapier="$t('details.amiens.a.papersize')"
        :formatimage="$t('details.amiens.a.imagesize')"
        :date="$t('details.amiens.a.date')"
        :commentaire="$t('details.amiens.a.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Amiens la tour Perret' src='/galerie/amiens_Bapaume.png' />" 
        :titre="$t('details.amiens.b.title')"
        :formatpapier="$t('details.amiens.b.papersize')"
        :formatimage="$t('details.amiens.b.imagesize')"
        :date="$t('details.amiens.b.date')"
        :commentaire="$t('details.amiens.b.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Cathedrale d'Amiens' src='/galerie/amiens_Neige.png' />" 
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




