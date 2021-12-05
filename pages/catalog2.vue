<template>
    <div>
        <v-divider color="#B3E5FC"></v-divider>
        <v-card tile flat color="blue lighten-5" class="py-sm-12">
        </v-card>
        <v-card tile flat color="blue lighten-5" min-height="700" class="pa-4 pa-sm-16">
            <v-container>
            <!--HAKONE-->
                <Catalogserie
                :serie="$t('details.hakone.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img alt='Le Funiculaire Hakone Tozan' src='catalog/hakone_Funiculaire.jpg' />" 
                :titre="$t('details.hakone.title')"
                :date="$t('details.hakone.date')"
                ></Catalogimage>
            <!--HONG KONG-->
                <Catalogserie
                :serie="$t('details.hongkong.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img width='120' alt='Hong Kong, Diamond Hill, Nan Liang Garden' src='galerie/hongkong_Pont.png' />" 
                :titre="$t('details.hongkong.a.title')"
                :date="$t('details.hongkong.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Hong Kong IFC Two building by night' src='galerie/hongkong_Fuite.png' />" 
                :titre="$t('details.hongkong.b.title')"
                :date="$t('details.hongkong.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Hong Kong Apple Central' src='galerie/hongkong_Apple.png' />" 
                :titre="$t('details.hongkong.c.title')"
                :date="$t('details.hongkong.c.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Temple Man Mo à Hong Kong' src='catalog/hongkong_Tuiles.jpg' />" 
                :titre="$t('details.hongkong.d.title')"
                :date="$t('details.hongkong.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Immeuble bleu à Hong Kong' src='catalog/hongkong_Bluehouse.jpg' />" 
                :titre="$t('details.hongkong.e.title')"
                :date="$t('details.hongkong.e.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Echaffaudage en Bambou à Hong Kong' src='catalog/hongkong_Bambou.jpg' />" 
                :titre="$t('details.hongkong.f.title')"
                :date="$t('details.hongkong.f.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Peak Tower à Hong Kong' src='catalog/hongkong_Escalator.jpg' />" 
                :titre="$t('details.hongkong.g.title')"
                :date="$t('details.hongkong.g.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Sur un trottoir à Hong Kong' src='galerie/hongkong_Autoportrait.png' />" 
                :titre="$t('details.autoportrait.c.title')"
                :date="$t('details.autoportrait.c.date')"
                ></Catalogimage>
            <!--HUE-->
                <Catalogserie
                :serie="$t('details.hue.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img height='120' alt='Vue de Hué' src='galerie/hue_Arbres.png' />" 
                :titre="$t('details.hue.a.title')"
                :date="$t('details.hue.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img height='120' alt='Vue de Hué' src='galerie/hue_Cloturebrisee.png' />" 
                :titre="$t('details.hue.b.title')"
                :date="$t('details.hue.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Terrain vague à Hué' src='galerie/hue_Autoportrait.png' />" 
                :titre="$t('details.autoportrait.a.title')"
                :date="$t('details.autoportrait.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Stade olympique à Hué' src='catalog/hue_Stade.jpg' />" 
                :titre="$t('details.hue.d.title')"
                :date="$t('details.hue.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Tombeau imperial de Tu Duc à Hué' src='catalog/hue_Colonne.jpg' />" 
                :titre="$t('details.hue.e.title')"
                :date="$t('details.hue.e.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Palais Anh Dinh à Hué' src='catalog/hue_Rond.jpg' />" 
                :titre="$t('details.hue.f.title')"
                :date="$t('details.hue.f.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Palais de la reine-mère (Dien Tho) à Hué' src='catalog/hue_Etoile.jpg' />" 
                :titre="$t('details.hue.g.title')"
                :date="$t('details.hue.g.date')"
                ></Catalogimage>
            <!--KAMPOT-->
                <Catalogserie
                :serie="$t('details.kampot.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img width='120' alt='Maison coloniale à Kampot' src='galerie/kampot_Linge.png' />" 
                :titre="$t('details.kampot.a.title')"
                :date="$t('details.kampot.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Pont à Kampot' src='catalog/kampot_Pont.jpg' />" 
                :titre="$t('details.kampot.b.title')"
                :date="$t('details.kampot.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Maison coloniale française à Kampot' src='catalog/kampot_Billard.jpg' />" 
                :titre="$t('details.kampot.c.title')"
                :date="$t('details.kampot.c.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Cinéma Art Déco à Kampot' src='catalog/kampot_Cinema.jpg' />" 
                :titre="$t('details.kampot.d.title')"
                :date="$t('details.kampot.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Carrelage à Kampot' src='catalog/kampot_Autoportrait.jpg' />" 
                :titre="$t('details.kampot.e.title')"
                :date="$t('details.kampot.e.date')"
                ></Catalogimage> 
            <!--LE HAVRE-->
                <Catalogserie
                :serie="$t('details.lehavre.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img width='120' alt='Hôtel de Ville du Havre' src='galerie/lehavre_Mairie.png' />" 
                :titre="$t('details.lehavre.a.title')"
                :date="$t('details.lehavre.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Maison de la culture du Havre' src='catalog/lehavre_Bassin.jpg' />" 
                :titre="$t('details.lehavre.b.title')"
                :date="$t('details.lehavre.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Eglise Saint-Joseph du Havre (Auguste Perret)' src='catalog/lehavre_Plage.jpg' />" 
                :titre="$t('details.lehavre.c.title')"
                :date="$t('details.lehavre.c.date')"
                ></Catalogimage>
            <!--LONDRES-->
                <Catalogserie
                :serie="$t('details.londres.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img alt='The Shard' src='catalog/londres_Shard.jpg' />" 
                :titre="$t('details.londres.b.title')"
                :date="$t('details.londres.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Lexham Mews' src='galerie/londres_Lexham.png' />" 
                :titre="$t('details.londres.a.title')"
                :date="$t('details.londres.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Le parlement de Westminter' src='catalog/londres_Bigben.jpg' />" 
                :titre="$t('details.londres.c.title')"
                :date="$t('details.londres.c.date')"
                ></Catalogimage>
             <!--PAGINATION--> 
                <v-row>
                    <v-col cols="12" class="d-flex justify-end">
                        <v-btn fab depressed small color="transparent" class="textgrey2 mx" :to="localePath('catalog1')">
                            <v-icon color="#263238">mdi-menu-left</v-icon> 
                         </v-btn>
                        <Catalogpagination
                        ></Catalogpagination>
                        <v-btn fab depressed small color="transparent" class="textgrey2 mx" :to="localePath('catalog3')">
                            <v-icon color="#263238">mdi-menu-right</v-icon> 
                        </v-btn>
                    </v-col>          
                </v-row>  
             </v-container>
        </v-card>  
        <v-divider color="#B3E5FC"></v-divider>
    </div>
</template>

<script>
import Retourindex from '@/components/Retourindex'
import Catalogserie from '@/components/Catalogserie'
import Catalogimage from '@/components/Catalogimage'
import Catalogpagination from '@/components/CatalogPagination'

export default {
    components: {
        Retourindex,
        Catalogserie,
        Catalogimage,
        Catalogpagination,
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

.textgrey2{
    font-family:'Gemunu Libre', sans-serif!important;
    color:#263238!important;
}

</style>