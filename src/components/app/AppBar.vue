<template>
  <v-app-bar>
    <template #title>
      <div class="d-inline-flex align-center text-h4 font-weight-bold my-5 text-primary">
        <!-- <v-icon icon="$vuetify" start />

        Landing Page -->
        <v-img width="80" :src="logo"></v-img> <v-img width="80" :src="firma"></v-img>
      </div>
    </template>

    <template v-if="$vuetify.display.mdAndUp" #append>
      <div class="hidden-sm-and-down">
        <v-btn
          v-for="item in menu"
          :key="item"
          class="text-body-1 blue-grey-darken-4"
          :href="`#${item.toLowerCase()}`"
          variant="text"
        >
          {{ item }}
        </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup>
  import logo from "/src/assets/logo.png"
  import firma from "/src/assets/firma.png"
  const menu = [
    // 'Home',
    // 'About',
    // 'Testimonials',
    'Trabajo',
    'Equipo',
  //   'Features',
  //   'Pricing',
  ]
</script>
