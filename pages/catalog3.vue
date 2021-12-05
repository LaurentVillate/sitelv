<template>
    <div>
        <v-divider color="#B3E5FC"></v-divider>
        <v-card tile flat color="blue lighten-5" class="py-sm-12">
        </v-card>
        <v-card tile flat color="blue lighten-5" min-height="700" class="pa-4 pa-sm-16">
            <v-container>
            <!--PARIS (5 SAISONS)-->
                <Catalogserie
                :serie="$t('details.paris1.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img alt='Vue de Paris sous la neige' src='catalog/paris_Hiver.jpg' />" 
                :titre="$t('details.paris1.a.title')"
                :date="$t('details.paris1.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Vue de Paris au printemps' src='catalog/paris_Printemps.jpg' />" 
                :titre="$t('details.paris1.b.title')"
                :date="$t('details.paris1.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='La tour Eiffel éclairée de nuit' src='catalog/paris_Ete.jpg' />" 
                :titre="$t('details.paris1.c.title')"
                :date="$t('details.paris1.c.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Fenêtre ouverte sur Paris' src='catalog/paris_Eteindien.jpg' />" 
                :titre="$t('details.paris1.d.title')"
                :date="$t('details.paris1.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Les feuilles mortes à Paris en automne' src='catalog/paris_Automne.jpg' />" 
                :titre="$t('details.paris1.e.title')"
                :date="$t('details.paris1.e.date')"
                ></Catalogimage>
            <!--PARIS-->
                <Catalogserie
                :serie="$t('details.paris2.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img width='120' alt='Le pont Marie à Paris' src='galerie/paris_Pontmarie.png' />" 
                :titre="$t('details.paris2.a.title')"
                :date="$t('details.paris2.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Le pont Marie à Paris' src='catalog/paris_Pontmarie2.jpg' />" 
                :titre="$t('details.paris2.b.title')"
                :date="$t('details.paris2.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Le passage Gustave Lepeu à Paris' src='catalog/paris_Lepeu.jpg' />" 
                :titre="$t('details.paris2.c.title')"
                :date="$t('details.paris2.c.date')"
                ></Catalogimage>
            <!--PHNOM PENH (36 VUES)-->
                <Catalogserie
                :serie="$t('details.phnompenh1.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img width='120' alt='Monument de l'indépendance à Phnom Penh' src='galerie/phnompenh_Monument.png' />" 
                :titre="$t('details.phnompenh1.b.title')"
                :date="$t('details.phnompenh1.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Stade olympique de Phnom Penh' src='galerie/phnompenh_Stade.png' />" 
                :titre="$t('details.phnompenh1.a.title')"
                :date="$t('details.phnompenh1.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='La tour Vattanac à Phnom Penh' src='galerie/phnompenh_Vattanac.png' />" 
                :titre="$t('details.phnompenh2.e.title')"
                :date="$t('details.phnompenh2.e.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Le White Buildind à Phnom Penh' src='galerie/phnompenh_Whitebuilding.png' />" 
                :titre="$t('details.phnompenh2.c.title')"
                :date="$t('details.phnompenh2.c.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='L'université royale de Phnom Penh (RUPP)' src='galerie/phnompenh_Urppbatd.png' />" 
                :titre="$t('details.phnompenh1.c.title')"
                :date="$t('details.phnompenh1.c.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Auditorium de l'URPP ( architecte: Leroy et Mondet)' src='galerie/phnompenh_Hallurpp.png' />" 
                :titre="$t('details.phnompenh2.b.title')"
                :date="$t('details.phnompenh2.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Le marché central de Phnom Penh' src='galerie/phnompenh_Marche.png' />" 
                :titre="$t('details.phnompenh2.a.title')"
                :date="$t('details.phnompenh2.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Le Musée national de Phnom Penh' src='galerie/phnompenh_Musee.png' />" 
                :titre="$t('details.phnompenh2.d.title')"
                :date="$t('details.phnompenh2.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Le théâtre Chaktomuk à Phnom Penh' src='catalog/phnompenh_Chaktomuk.jpg' />" 
                :titre="$t('details.phnompenh1.d.title')"
                :date="$t('details.phnompenh1.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Le Wat Lanka à Phnom Penh' src='catalog/phnompenh_Watlangka.jpg' />" 
                :titre="$t('details.phnompenh2.d.title')"
                :date="$t('details.phnompenh2.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Le palais royal à Phnom Penh' src='catalog/phnompenh_Palais.jpg' />" 
                :titre="$t('details.phnompenh2.i.title')"
                :date="$t('details.phnompenh2.i.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Le quai Sisowath à Phnom Penh' src='catalog/phnompenh_Drapeau.jpg' />" 
                :titre="$t('details.phnompenh2.j.title')"
                :date="$t('details.phnompenh2.j.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Boulevard Sothearos à Phnom Penh' src='catalog/phnompenh_Terrainvague.jpg' />" 
                :titre="$t('details.phnompenh2.h.title')"
                :date="$t('details.phnompenh2.h.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Le Wat Phnom à Phnom Penh' src='catalog/phnompenh_Watphnom.jpg' />" 
                :titre="$t('details.phnompenh2.k.title')"
                :date="$t('details.phnompenh2.k.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='L'ambassade de France à Phnom Penh' src='catalog/phnompenh_Ambassade.jpg' />" 
                :titre="$t('details.phnompenh2.o.title')"
                :date="$t('details.phnompenh2.o.date')"
                ></Catalogimage>
                 <Catalogimage
                image="<img alt='La piscine de l'URPP (RUPP)' src='catalog/phnompenh_Piscine.jpg' />" 
                :titre="$t('details.phnompenh2.n.title')"
                :date="$t('details.phnompenh2.n.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='L'aéroport de Phnom Penh Pochentong (Phnom Penh Airport)' src='galerie/phnompenh_Aeroport.png' />" 
                :titre="$t('details.phnompenh2.d.title')"
                :date="$t('details.phnompenh2.d.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Rue Pasteur à Phnom Penh' src='catalog/phnompenh_Autoportrait.jpg' />" 
                :titre="$t('details.phnompenh2.q.title')"
                :date="$t('details.phnompenh2.q.date')"
                ></Catalogimage>
             <!--PAGINATION--> 
                <v-row>
                    <v-col cols="12" class="d-flex justify-end">
                        <v-btn fab depressed small color="transparent" class="textgrey2" :to="localePath('catalog2')">
                            <v-icon color="#263238">mdi-menu-left</v-icon> 
                         </v-btn>
                        <Catalogpagination
                        ></Catalogpagination>
                        <v-btn fab depressed small color="transparent" class="textgrey2" :to="localePath('catalog4')">
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