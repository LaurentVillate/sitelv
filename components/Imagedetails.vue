<template>
    <v-card flat tile color="blue lighten-5" min-height="700" class=" px-4 px-sm-16">
        <v-row>
            <v-col cols="12" sm="6">
            </v-col>
            <v-col cols="12" sm="6">
                <v-card-text class="detailtexte text-caption text-sm-body-2 mr-md-16 pr-md-16">
                    <i>{{intro}}</i>
                </v-card-text>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6">
                <v-card tile flat color="transparent" class="d-flex justify-center">                    
                    <div v-html="image"></div> 
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card tile flat color="transparent" class="mr-md-16 pr-md-16">
                <v-card-title class="detailtitre text-body-2 text-sm-h5">
                    <p>{{titre}}</p>
                </v-card-title>
                <v-divider color="#BBDEFB"></v-divider>
                <v-card-text class="detailtexte text-caption text-sm-body-2">
                    <br><br>                   
                    <p>Gouache et encre sur papier</p>
                    <p>Format papier : {{formatpapier}}</p>
                    <p>Format image : {{formatimage}}</p>
                    <p>{{date}}</p>
                    <br>
                    <p>{{commentaire}}</p>
                    <br>
                    <p><i>{{collection}}</i></p> 
                </v-card-text>  
                </v-card>                     
            </v-col>
        </v-row>
    </v-card>
</template>

<script>

    export default{
        name: "Imagedetails",
        props: ["intro", "image", "titre", "formatpapier", "formatimage", "date", "commentaire", "collection"],
    }
</script>


<style scoped>

.detailtitre{
    font-family: 'Gemunu Libre', sans-serif!important;
    font-variant:small-caps!important;
    font-weight:bold;
    color:#37474F!important;
}

.detailtexte{
    font-family:'Libre Baskerville'!important;
    color:#37474F!important;
    line-height:24px!important;
    
}

</style>