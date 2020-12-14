<template>
    <v-row>
        <v-col align="center" justify="center">
            <v-card class="card-float d-inline-block" width="85%" elevation="0">
            <hr>
            <v-card-actions>
                <v-col align="center" justify="center">
                    Criado e desenvolvido por <strong> Cinthia Katiane </strong>
                </v-col>
                <v-col align="center" justify="center">
                    <v-btn v-for="item in file.redes_sociais" icon :key="item.icon" :href="item.url" target="_blank">
                        <v-icon>{{item.icon}}</v-icon>
                    </v-btn>
                </v-col>
            </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>


<script>
export default {
  name: 'Footer',
  data(){
      return {
          file: require("../../data.json")
      }
  }
}
</script>
