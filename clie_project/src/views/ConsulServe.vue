<template>
  <div class="bg-surface-variant mb-6">
    <v-card class="mx-auto" max-width="344" v-for="(items, i) in items" :key="i">
      <v-img :src="items.download_url" height="200px" cover>
      </v-img>
      <v-card-title>
        {{ items.id }}

      </v-card-title>

      <v-card-subtitle>
        {{ items.author }}

      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text">
          Explore
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>

      </v-card-actions>
      <v-expand-transition>

        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for
            sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you
            add
            a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    fechData() {
      fetch('https://picsum.photos/v2/list?page=2&limit=100',).then(response => response.json()).then(data => {
        this.items = (data);
      }).catch(error => console.log(error))
    }
  },
  created() {
    this.fechData();
  },
}
</script>