<template>
    <v-row>
        <v-col cols="12" class="d-flex justify-end">
           <v-btn depressed small color="#B3E5FC" class="textgrey2 mx-2">
                <v-icon color="#263238">
                    mdi-menu-left
                </v-icon>
            </v-btn>
            <v-btn depressed small color="#B3E5FC" class="textgrey2 mx-2">
            1
            </v-btn>
            <v-btn depressed small color="#B3E5FC" class="textgrey2 mx-2">
            2
            </v-btn>
            <v-btn depressed small color="#B3E5FC" class="textgrey2 mx-2">
            3
            </v-btn>
            <v-btn depressed small color="#B3E5FC" class="textgrey2 mx-2">
            4
            </v-btn>
           <v-btn depressed small color="#B3E5FC" class="textgrey2 mx-2">
                <v-icon color="#263238">
                    mdi-menu-right
                </v-icon>
            </v-btn>
            </v-col>           
    </v-row>
</template>

<script>
export default{
    name:"Catalogpagination",
    //un bouton avec n+1 et un bouton avec n-1//

}
</script>

<style scoped>

.textgrey2{
    font-family:'Gemunu Libre', sans-serif!important;
    color:#263238!important;
}

</style>

