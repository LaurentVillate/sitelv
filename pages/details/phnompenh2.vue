<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        :intro="$t('details.phnompenh2.a.intro')"
        image="<img alt='Le marché central de Phnom Penh' src='/galerie/phnompenh_Marche.png' />" 
        :titre="$t('details.phnompenh2.a.title')"
        :formatpapier="$t('details.phnompenh2.a.papersize')"
        :formatimage="$t('details.phnompenh2.a.imagesize')"
        :date="$t('details.phnompenh2.a.date')"
        commentaire=""
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Auditorium de l'URPP ( architecte: Leroy et Mondet)' src='/galerie/phnompenh_Hallurpp.png' />" 
        :titre="$t('details.phnompenh2.b.title')"
        :formatpapier="$t('details.phnompenh2.b.papersize')"
        :formatimage="$t('details.phnompenh2.b.imagesize')"
        :date="$t('details.phnompenh2.b.date')"
        :commentaire="$t('details.phnompenh2.b.comment')"
        :collection="$t('details.phnompenh2.b.collection')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Le White Building à Phnom Penh' src='/galerie/phnompenh_Whitebuilding.png' />" 
        :titre="$t('details.phnompenh2.c.title')"
        :formatpapier="$t('details.phnompenh2.c.papersize')"
        :formatimage="$t('details.phnompenh2.c.imagesize')"
        :date="$t('details.phnompenh2.c.date')"
        :commentaire="$t('details.phnompenh2.c.comment')"
        :collection="$t('details.phnompenh2.c.collection')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Le Musée national de Phnom Penh' src='/galerie/phnompenh_Musee.png' />"
         :titre="$t('details.phnompenh2.d.title')"
        :formatpapier="$t('details.phnompenh2.d.papersize')"
        :formatimage="$t('details.phnompenh2.d.imagesize')"
        :date="$t('details.phnompenh2.d.date')"
        commentaire=""
        :collection="$t('details.phnompenh2.d.collection')"
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='La tour Vattanac à Phnom Penh' src='/galerie/phnompenh_Vattanac.png' />"
         :titre="$t('details.phnompenh2.e.title')"
        :formatpapier="$t('details.phnompenh2.e.papersize')"
        :formatimage="$t('details.phnompenh2.e.imagesize')"
        :date="$t('details.phnompenh2.e.date')"
        commentaire=""
        :collection="$t('details.phnompenh2.e.collection')"
        >
        </Imagedetails>
    <!-- PAGE AVANT ET PAGE APRÈS-->
        <v-card tile flat color="blue-grey darken-4" class=" px-4 px-sm-16 py-sm-12">
            <v-row>
                <v-col cols="12" class="d-flex justify-end">
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/amiens')">
                        <v-icon color="#E3F2FD">mdi-arrow-left-thin-circle-outline</v-icon> 
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/angkor')">
                        <v-icon color="#E3F2FD">mdi-arrow-right-thin-circle-outline</v-icon> 
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
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