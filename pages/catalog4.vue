 <template>
    <div>
        <v-divider color="#B3E5FC"></v-divider>
        <v-card tile flat color="blue lighten-5">
            <Retourindex
            ></Retourindex>
        </v-card>
        <v-card tile flat color="blue lighten-5" min-height="700" class="pa-4 pa-sm-16">
            <v-container>
            <!--SAIGON-->
                <Catalogserie
                :serie="$t('details.saigon.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img width='120' alt='Moto à Saigon' src='/galerie/saigon_Moto.png' />" 
                :titre="$t('details.saigon.a.title')"
                :date="$t('details.saigon.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Le marché Ben Thanh' src='/galerie/saigon_Marche.png' />" 
                :titre="$t('details.saigon.b.title')"
                :date="$t('details.saigon.b.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='La Bibliothèque des Sciences de Saigon' src='/catalog/saigon_Bibliotheque.jpg' />" 
                :titre="$t('details.saigon.c.title')"
                :date="$t('details.saigon.c.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Le palais de l'Indépendance à Saigon' src='/catalog/saigon_Palais.jpg' />" 
                :titre="$t('details.saigon.d.title')"
                :date="$t('details.saigon.d.date')"
                ></Catalogimage> 
            <!--SIEM REAP-->
                <Catalogserie
                :serie="$t('details.siemreap.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img width='120' alt='Palais royal de Siem Reap' src='/galerie/siemreap_Palais.png' />" 
                :titre="$t('details.siemreap.a.title')"
                :date="$t('details.siemreap.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Hotel Rafles à Siem Reap' src='/catalog/siemreap_Hotel.png' />" 
                :titre="$t('details.siemreap.b.title')"
                :date="$t('details.siemreap.b.date')"
                ></Catalogimage> 
                <Catalogimage
                image="<img alt='Wat Damnak à Siem Reap' src='/catalog/siemreap_Damnak.png' />" 
                :titre="$t('details.siemreap.c.title')"
                :date="$t('details.siemreap.c.date')"
                ></Catalogimage> 
                <Catalogimage
                image="<img alt='Wat Damnak à Siem Reap' src='/catalog/siemreap_Damnak2.jpg' />" 
                :titre="$t('details.siemreap.d.title')"
                :date="$t('details.siemreap.d.date')"
                ></Catalogimage> 
            <!--TOKYO-->
                <Catalogserie
                :serie="$t('details.tokyo.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img width='120' alt='Le temple de Meiji à Tokyo' src='/galerie/tokyo_Meiji.png' />" 
                :titre="$t('details.tokyo.a.title')"
                :date="$t('details.tokyo.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img alt='Tokyo, Yanaka' src='/catalog/tokyo_Yanaka.jpg' />" 
                :titre="$t('details.tokyo.b.title')"
                :date="$t('details.tokyo.b.date')"
                ></Catalogimage>
                
            <!--UJIIE-->
                <Catalogserie
                :serie="$t('details.ujiie.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img width='120' alt='Parking Uniclo à Ujiie (Sakura, préfecture de Tochigi)' src='/galerie/ujiie_Parking.png' />" 
                :titre="$t('details.ujiie.title')"
                :date="$t('details.ujiie.date')"
                ></Catalogimage> 
            <!--VERSAILLES-->
                <Catalogserie
                :serie="$t('details.versailles.serie')"
                ></Catalogserie>
                <Catalogimage
                image="<img width='120' alt='La chateau de Versailles la nuit' src='/galerie/versailles_Chateau.png' />" 
                :titre="$t('details.versailles.a.title')"
                :date="$t('details.versailles.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Le Chateau de Versailles aile nord' src='/galerie/versailles_Chateaujour.png' />" 
                :titre="$t('details.versailles.b.title')"
                :date="$t('details.versailles.b.date')"
                ></Catalogimage> 
                <Catalogimage
                image="<img width='120' alt='La cour de Marbre du chateau de Versailles' src='/catalog/versailles_Cour.jpg' />" 
                :titre="$t('details.versailles.c.title')"
                :date="$t('details.versailles.c.date')"
                ></Catalogimage> 
                <Catalogimage
                image="<img width='120' alt='La gare de Versailles-Chantiers, station du RER C' src='/catalog/versailles_Gare.png' />" 
                :titre="$t('details.versailles.d.title')"
                :date="$t('details.versailles.d.date')"
                ></Catalogimage>
             <!--PAGINATION--> 
                <v-row>
                    <v-col cols="12" class="d-flex justify-end">
                        <v-btn fab depressed small color="transparent" class="textgrey2" :to="localePath('catalog3')">
                            <v-icon color="#263238">mdi-menu-left</v-icon> 
                         </v-btn>
                        <Catalogpagination
                        ></Catalogpagination>
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