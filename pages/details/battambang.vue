<template>
    <div>
        <Retourindex></Retourindex>
        <Imagedetails
        image="<img src='/galerie/battambang_Airport.png' />" 
        :titre="$t('details.battambang.a.title')"
        :formatpapier="$t('details.battambang.a.papersize')"
        :formatimage="$t('details.battambang.a.imagesize')"
        :date="$t('details.battambang.a.date')"
        :commentaire="$t('details.battambang.a.comment')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img src='/galerie/battambang_Marche.png' />" 
        :titre="$t('details.battambang.b.title')"
        :formatpapier="$t('details.battambang.b.papersize')"
        :formatimage="$t('details.battambang.b.imagesize')"
        :date="$t('details.battambang.b.papersize')"
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