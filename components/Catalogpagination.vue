<template>
    <div>
        <v-btn fab depressed small color="transparent" class="textgrey2" :to="localePath('catalog1')">
        1
        </v-btn>
        <v-btn fab depressed small color="transparent" class="textgrey2" :to="localePath('catalog2')">
        2
        </v-btn>
        <v-btn fab depressed small color="transparent" class="textgrey2" :to="localePath('catalog3')">
        3
        </v-btn>
        <v-btn fab depressed small color="transparent" class="textgrey2" :to="localePath('catalog4')">
        4
        </v-btn>
    </div>
</template>

<script>
export default{
    name:"Catalogpagination",
}
</script>

<style scoped>

.textgrey2{
    font-family:'Gemunu Libre', sans-serif!important;
    color:#263238!important;
}

</style>

