<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img alt='Parking Uniclo à Ujiie (Tochigi)' src='/galerie/ujiie_Parking.png' />" 
        :titre="$t('details.ujiie.title')"
        :formatpapier="$t('details.ujiie.papersize')"
        :formatimage="$t('details.ujiie.imagesize')"
        :date="$t('details.ujiie.date')"
        :commentaire="$t('details.ujiie.comment')"
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