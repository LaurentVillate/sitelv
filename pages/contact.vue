<template>
    <v-card tile flat color="blue lighten-5" min-height="700" class="pt-16 px-sm-16"> 
        <v-form v-model="valid">
            <v-container>
                <v-row class="py-sm-16">
                    <v-col cols="12" md="4">
                        <v-text-field class="form"
                        color="#EF6C00"
                        v-model="firstname"
                        :rules="nameRules"
                        :counter="20"
                        :label="$t('form.prenom')"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field class="form"
                        color="#EF6C00"
                        v-model="lastname"
                        :rules="nameRules"
                        :counter="20"
                        :label="$t('form.nom')"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field class="form"
                        color="#EF6C00"
                        v-model="email"
                        :rules="emailRules"
                        :label="$t('form.mail')"
                        required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row class="py-sm-16">
                    <v-col cols='12'>
                        <v-textarea class="form"
                        color="#EF6C00"
                        outlined
                        :counter="250"
                        v-model="message"
                        :rules="messagerules"
                        name="input-7-4"
                        :label="$t('form.message')"
                        value=""
                        ></v-textarea>
                    </v-col>         
                </v-row>
                <v-row>
                    <v-btn elevation="0" color="blue-grey darken-4" class="footer mx-6" @click="send">
                    {{$t('form.envoi')}}
                    </v-btn>
                    <v-btn elevation="0" color="blue-grey darken-4" class="footer" @click="cancel">
                    {{$t('form.annulation')}}
                    </v-btn>
                </v-row>
            </v-container>
        </v-form>
    </v-card>   
</template>

<script>
import Retourindex from '@/components/Retourindex'

export default{
    components: {
        Retourindex,
    },
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Champ obligatoire / Required field',
        v => v.length <= 20 || '20 charactères max / max 20 characters max',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Champ obligatoire / Required field',
        v => /.+@.+/.test(v) || 'E-mail non valide / Invalid e-mail',
      ],
      message:'',
      messagerules: [v => v.length <= 250 || '250 caractères max / Max 250 characters'],
    }),
    methods: {
      send() {
      this.$mail.send({
        from: this.email,
        subject: 'Message reçu de laurentvillate.com',
        text: this.message,
      })
    },
      cancel() {
        this.$router.go(-1);
      },
      
      /*annuler () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },*/
    },

    }

</script>

<style scoped>

.form{
    font-family:'Libre Baskerville'!important;
}

.footer{
  font-family: 'Gemunu Libre', sans-serif!important;
  color:#EF6C00!important;
  text-decoration:none!important;
}

</style>

