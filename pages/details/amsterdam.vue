<template>
    <div>
        <v-card tile flat color="blue-grey darken-4">
        <Retourindex></Retourindex>
        </v-card>
        <Imagedetails
        image="<img alt='La Gare centrale d'Amsterdam' src='/galerie/amsterdam_Gare.png' />" 
        :titre="$t('details.amsterdam.a.title')"
        :formatpapier="$t('details.amsterdam.a.papersize')"
        :formatimage="$t('details.amsterdam.a.imagesize')"
        :date="$t('details.amsterdam.a.date')"
        commentaire=""
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Canal et immeubles à Amsterdam' src='/galerie/amsterdam_Peniche.png' />" 
        :titre="$t('details.amsterdam.b.title')"
        :formatpapier="$t('details.amsterdam.b.papersize')"
        :formatimage="$t('details.amsterdam.b.imagesize')"
        :date="$t('details.amsterdam.b.date')"
        commentaire="Amsterdam."
        >
        </Imagedetails>
        <Imagedetails
        image="<img alt='Amsterdam de nuit' src='/galerie/amsterdam_Pont.png' />" 
        :titre="$t('details.amsterdam.c.title')"
        :formatpapier="$t('details.amsterdam.c.papersize')"
        :formatimage="$t('details.amsterdam.c.imagesize')"
        :date="$t('details.amsterdam.c.date')"
        commentaire="Amsterdam."
        >
        </Imagedetails>
    <!-- PAGE AVANT ET PAGE APRÈS-->
        <v-card tile flat color="blue-grey darken-4" class=" px-4 px-sm-16 py-sm-12">
            <v-row>
                <v-col cols="12" class="d-flex justify-end">
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/siemreap')">
                        <v-icon color="#E3F2FD">mdi-arrow-left-thin-circle-outline</v-icon> 
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn fab plain depressed small color="transparent" :to="localePath('/details/ujiie')">
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