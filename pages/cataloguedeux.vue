<template>
    <div>
        <v-divider color="#B3E5FC"></v-divider>
        <v-card tile flat color="blue lighten-5">
            <Retourindex
            ></Retourindex>
        </v-card>
        <v-card tile flat color="blue lighten-5" min-height="700" class="pa-4 pa-sm-16">
            <v-container>
                <v-card-title class="textgrey">
                <b>{{$t("tab.titretab")}}</b>
                </v-card-title>
                <br><br>
                <!--AMIENS-->
                <Catalogserie
                :serie="$t('details.amiens.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img width='120' alt='Amiens rue de Cottenchy' src='/galerie/amiens_Cottenchy.png' />" 
                :titre="$t('details.amiens.a.title')"
                :date="$t('details.amiens.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Amiens la tour Perret' src='/galerie/amiens_Bapaume.png' />" 
                :titre="$t('details.amiens.b.title')"
                :date="$t('details.amiens.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Cathedrale d'Amiens' src='/galerie/amiens_Neige.png' />" 
                :titre="$t('details.amiens.c.title')"
                :date="$t('details.amiens.c.date')"
                ></Catalogimage>
                <Catalogimage
                image="" 
                :titre="$t('details.amiens.d.title')"
                :date="$t('details.amiens.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="" 
                :titre="$t('details.amiens.e.title')"
                :date="$t('details.amiens.e.date')"
                ></Catalogimage>
                <Catalogimage
                image="" 
                :titre="$t('details.amiens.f.title')"
                :date="$t('details.amiens.f.date')"
                ></Catalogimage>  
                <Catalogimage
                image="" 
                :titre="$t('details.amiens.g.title')"
                :date="$t('details.amiens.g.date')"
                ></Catalogimage>
                <!--AMSTERDAM-->    
                <Catalogserie
                :serie="$t('details.amsterdam.serie')"
                ></Catalogserie>  
                <Catalogimage
                image="<img height='120' alt='La Gare centrale d'Amsterdam' src='/galerie/amsterdam_Gare.png' />" 
                :titre="$t('details.amsterdam.a.title')"
                :date="$t('details.amsterdam.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Canal et immeubles à Amsterdam' src='/galerie/amsterdam_Peniche.png' />" 
                :titre="$t('details.amsterdam.b.title')"
                :date="$t('details.amsterdam.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Amsterdam de nuit' src='/galerie/amsterdam_Pont.png' />" 
                :titre="$t('details.amsterdam.c.title')"
                :date="$t('details.amsterdam.c.date')"
                ></Catalogimage> 
                <Catalogimage
                image="" 
                :titre="$t('details.amsterdam.d.title')"
                :date="$t('details.amsterdam.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="" 
                :titre="$t('details.amsterdam.e.title')"
                :date="$t('details.amsterdam.e.date')"
                ></Catalogimage>
                <Catalogimage
                image="" 
                :titre="$t('details.amsterdam.f.title')"
                :date="$t('details.amsterdam.f.date')"
                ></Catalogimage> 
                <!--ANGKOR-->  
                <Catalogserie
                :serie="$t('details.angkor.serie')"
                ></Catalogserie>  
                <Catalogimage
                image="<img width='120' alt='Le Bayon à Angkor' src='/galerie/angkor_Bayon.png' />" 
                :titre="$t('details.angkor.a.title')"
                :date="$t('details.angkor.a.date')"
                ></Catalogimage> 
                <Catalogimage
                image="<img width='120' alt='Le Bayon à Angkor' src='/galerie/angkor_Bayonjour.png' />" 
                :titre="$t('details.angkor.b.title')"
                :date="$t('details.angkor.b.date')"
                ></Catalogimage> 
                <!--BATTAMBANG-->
                <Catalogserie
                :serie="$t('details.battambang.serie')"
                ></Catalogserie> 
                <Catalogimage
                image="<img width='120' alt='L'aéroport de Battambang' src='/galerie/battambang_Airport.png' />" 
                :titre="$t('details.battambang.a.title')"
                :date="$t('details.battambang.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Le Marché central de Battambang' src='/galerie/battambang_Marche.png' />" 
                :titre="$t('details.battambang.b.title')"
                :date="$t('details.battambang.b.date')"
                ></Catalogimage>
                <!--HONG KONG-->
                <Catalogserie
                :serie="$t('details.hongkong.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img width='120' alt='Hong Kong, Diamond Hill, Nan Liang Garden' src='/galerie/hongkong_Pont.png' />" 
                :titre="$t('details.hongkong.a.title')"
                :date="$t('details.hongkong.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Hong Kong IFC Two building by night' src='/galerie/hongkong_Fuite.png' />" 
                :titre="$t('details.hongkong.b.title')"
                :date="$t('details.hongkong.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Hong Kong Apple Central' src='/galerie/hongkong_Apple.png' />" 
                :titre="$t('details.hongkong.c.title')"
                :date="$t('details.hongkong.c.date')"
                ></Catalogimage>
                


             </v-container>
        </v-card>  
        <v-divider color="#B3E5FC"></v-divider>
    </div>
</template>

<script>
import Retourindex from '@/components/Retourindex'
import Catalogserie from '@/components/Catalogserie'
import Catalogimage from '@/components/Catalogimage'

export default {
    components: {
        Retourindex,
        Catalogserie,
        Catalogimage,
    },

    data () {        
        return{
        }
    },
}
</script>

<style scoped>

.textgrey{
    font-family:'Libre Baskerville'!important;
    color:#263238!important;
}

</style>