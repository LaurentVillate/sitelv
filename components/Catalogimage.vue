<template>
    <div> 
            <v-row class="textgrey">
                <v-col cols="12" sm="3" class="d-flex justify-center">                   
                    <div v-html="image"></div>              
                </v-col>
                <v-col cols="12" sm="6" class="d-flex justify-center">
                <br>
                {{titre}}
                </v-col>
                <v-col cols="12" sm="3" class="d-flex justify-center">
                <br>
                {{date}}
                </v-col>
            </v-row>
        <!--<v-row class="textgrey">           
            <v-col cols="12" sm="2" class="d-flex justify-center">                     
                <div v-html="image"></div>                       
            </v-col>
            <v-col cols="12" sm="2" class="d-flex justify-center">
            <br>
            <i>{{titre}}</i>
            </v-col>
            <v-col cols="12" sm="2" class="d-flex justify-center">
            <br>
            {{date}}
            </v-col>
        </v-row>-->
        <br>
        <v-divider color="#B3E5FC"></v-divider>
        <br>
    </div>
</template>

<script>
    export default{
        name: "Catalogimage",
        props: ["image", "titre", "date"],
    }
</script>

<style scoped>

.textgrey{
    font-family:'Libre Baskerville'!important;
    color:#263238!important;
}

</style>
