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
                image="<img width='120' alt='Moto à Saigon' src='/galerie/saigon_moto.png' />" 
                :titre="$t('details.saigon.a.title')"
                :date="$t('details.saigon.a.date')"
                ></Catalogimage>
                <Catalogimage
                image="<img width='120' alt='Le marché Ben Thanh' src='/galerie/saigon_marche.png' />" 
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