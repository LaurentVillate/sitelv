<template>
    <div>
        <v-card flat tile color="#B3E5FC" class="textgrey text-caption text-sm-body-1">
            <v-row>
                <v-col cols="12" class="d-flex justify-center">
                <b>{{serie}}</b>
                </v-col>
            </v-row>
        </v-card>
        <br>
        <br>
    </div>
</template>

<script>
    export default{
        name: "Catalogserie",
        props: ["serie"],
    }
</script>

<style scoped>

.textgrey{
    font-family:'Libre Baskerville'!important;
    color:#263238!important;
}

</style>




