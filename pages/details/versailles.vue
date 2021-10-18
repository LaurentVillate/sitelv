<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img alt='Chateau de Versailles de nuit' src='/galerie/versailles_Chateau.png' />" 
        :titre="$t('details.versailles.a.title')"
        :formatpapier="$t('details.versailles.a.papersize')"
        :formatimage="$t('details.versailles.a.imagesize')"
        :date="$t('details.versailles.a.date')"
        :commentaire="$t('details.versailles.a.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Le Chateau de Versailles aile nord' src='/galerie/versailles_Chateaujour.png' />" 
        :titre="$t('details.versailles.b.title')"
        :formatpapier="$t('details.versailles.b.papersize')"
        :formatimage="$t('details.versailles.b.imagesize')"
        :date="$t('details.versailles.b.date')"
        :commentaire="$t('details.versailles.b.comment')"
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