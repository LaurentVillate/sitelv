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
                image="<img alt='Tour Perret' src='/catalog/amiens_Tour.jpg' />" 
                :titre="$t('details.amiens.d.title')"
                :date="$t('details.amiens.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Gare d'Amiens' src='/catalog/amiens_Gare.jpg' />" 
                :titre="$t('details.amiens.e.title')"
                :date="$t('details.amiens.e.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Amiens' src='/catalog/amiens_Alsacelorraine.jpg' />" 
                :titre="$t('details.amiens.f.title')"
                :date="$t('details.amiens.f.date')"
                ></Catalogimage>  
                <Catalogimage
                image="<img alt='Cathédrale Notre-Dame d'Amiens' src='/catalog/amiens_Cathedrale.jpg' />" 
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
                image="<img alt='Amsterdam' src='/catalog/amsterdam_Parapluie.jpg' />" 
                :titre="$t('details.amsterdam.d.title')"
                :date="$t('details.amsterdam.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Amsterdam Lijnbaansgracht' src='/catalog/amsterdam_vent.jpg' />" 
                :titre="$t('details.amsterdam.e.title')"
                :date="$t('details.amsterdam.e.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Amsterdam Keizersgracht' src='/catalog/amsterdam_Keizer.jpg' />" 
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
                <Catalogimage
                image="<img alt='Angkor Vat' src='/catalog/angkor_Pluie.jpg' />" 
                :titre="$t('details.angkor.c.title')"
                :date="$t('details.angkor.c.date')"
                ></Catalogimage> 
                <Catalogimage
                image="<img alt='Angkor Vat' src='/catalog/angkor_Plongeon.jpg' />" 
                :titre="$t('details.angkor.d.title')"
                :date="$t('details.angkor.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Angkor Vat la nuit' src='/catalog/angkor_Visite.jpg' />" 
                :titre="$t('details.angkor.e.title')"
                :date="$t('details.angkor.e.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Angkor Vat statue' src='/catalog/angkor_Statue.jpg' />" 
                :titre="$t('details.angkor.f.title')"
                :date="$t('details.angkor.f.date')"
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
                <Catalogimage
                image="<img alt='Marché de Battambang' src='/catalog/battambang_Marchenuit.jpg' />" 
                :titre="$t('details.battambang.c.title')"
                :date="$t('details.battambang.c.date')"
                ></Catalogimage>
            <!--DALAT-->
                <Catalogserie
                :serie="$t('details.dalat.serie')"
                ></Catalogserie> 
                <Catalogimage
                image="<img width='120' alt='Le lycée Yersin à Dalat' src='/galerie/dalat_Lycee.png' />" 
                :titre="$t('details.dalat.a.title')"
                :date="$t('details.dalat.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Théâtre Hoa Binh de Dalat' src='/catalog/dalat_Theatre.jpg' />" 
                :titre="$t('details.dalat.b.title')"
                :date="$t('details.dalat.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Palais Dinh 3 de Bao Daï' src='/catalog/dalat_Palais.jpg' />"  
                :titre="$t('details.dalat.c.title')"
                :date="$t('details.dalat.c.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Institut Pasteur de Dalat' src='/catalog/dalat_Pasteur.jpg' />" 
                :titre="$t('details.dalat.d.title')"
                :date="$t('details.dalat.d.date')"
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
                <Catalogimage
                image="<img alt='Temple Man Mo à Hong Kong' src='/catalog/hongkong_Tuiles.jpg' />" 
                :titre="$t('details.hongkong.d.title')"
                :date="$t('details.hongkong.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Immeuble bleu à Hong Kong' src='/catalog/hongkong_Bluehouse.jpg' />" 
                :titre="$t('details.hongkong.e.title')"
                :date="$t('details.hongkong.e.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Echaffaudage en Bambou à Hong Kong' src='/catalog/hongkong_Bambou.jpg' />" 
                :titre="$t('details.hongkong.f.title')"
                :date="$t('details.hongkong.f.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Peak Tower à Hong Kong' src='/catalog/hongkong_Escalator.jpg' />" 
                :titre="$t('details.hongkong.g.title')"
                :date="$t('details.hongkong.g.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Sur un trottoir à Hong Kong' src='/galerie/hongkong_Autoportrait.png' />" 
                :titre="$t('details.autoportrait.c.title')"
                :date="$t('details.autoportrait.c.date')"
                ></Catalogimage>
            <!--HUE-->
                <Catalogserie
                :serie="$t('details.hue.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img height='120' alt='Vue de Hué' src='/galerie/hue_Arbres.png' />" 
                :titre="$t('details.hue.a.title')"
                :date="$t('details.hue.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img height='120' alt='Vue de Hué' src='/galerie/hue_Cloture.png' />" 
                :titre="$t('details.hue.b.title')"
                :date="$t('details.hue.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Terrain vague à Hué' src='/galerie/hue_Autoportrait.png' />" 
                 :titre="$t('details.autoportrait.a.title')"
                :date="$t('details.autoportrait.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Stade olympique à Hué' src='/catalog/hue_stade.jpg' />" 
                :titre="$t('details.hue.d.title')"
                :date="$t('details.hue.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Tombeau imperial de Tu Duc à Hué' src='/catalog/hue_Colonne.jpg' />" 
                :titre="$t('details.hue.e.title')"
                :date="$t('details.hue.e.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Palais Anh Dinh à Hué' src='/catalog/hue_Rond.jpg' />" 
                :titre="$t('details.hue.f.title')"
                :date="$t('details.hue.f.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Palais de la reine-mère (Dien Tho) à Hué' src='/catalog/hue_etoiles.jpg' />" 
                :titre="$t('details.hue.g.title')"
                :date="$t('details.hue.g.date')"
                ></Catalogimage>
            <!--KAMPOT-->
                <Catalogserie
                :serie="$t('details.kampot.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img width='120' alt='Maison coloniale à Kampot' src='/galerie/kampot_linge.png' />" 
                :titre="$t('details.kampot.a.title')"
                :date="$t('details.kampot.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Pont à Kampot' src='/catalog/kampot_Pont.jpg' />" 
                :titre="$t('details.kampot.b.title')"
                :date="$t('details.kampot.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Maison coloniale française à Kampot' src='/catalog/kampot_Billard.jpg' />" 
                :titre="$t('details.kampot.c.title')"
                :date="$t('details.kampot.c.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Cinéma Art Déco à Kampot' src='/catalog/kampot_Cinema.jpg' />" 
                :titre="$t('details.kampot.d.title')"
                :date="$t('details.kampot.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Carrelage à Kampot' src='/catalog/kampot_Autoportrait.jpg' />" 
                :titre="$t('details.kampot.e.title')"
                :date="$t('details.kampot.e.date')"
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