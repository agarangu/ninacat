<template>
  <v-sheet id="trabajo" class="text-center py-16">
    <div class="text-h4 font-weight-bold">
      Nuestro trabajo
    </div>

    <div class="text-body-1 text-medium-emphasis mt-5">
      Realizado por Nina Cat, supervisado por el CEO.
    </div>
    <v-container
      class="d-flex justify-center align-center"
      max-width="800">
      <v-responsive
        :aspect-ratio="16 / 9"
        class="align-center">
        <v-carousel 
        cycle
        hide-delimiters
        show-arrows="hover">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>

      </v-responsive>
    </v-container>
    
    <v-btn variant="plain">
      Portafolio completo
      <v-tooltip
        activator="parent"
        location="bottom"
      >En construcción</v-tooltip>
    </v-btn>
    
  </v-sheet>
</template>
<script setup>
  const items = [
    {
      src: './assets/art/8M_web.jpg',
    },
    {
      src: './assets/art/familia.jpg',
    },
    {
      src: './assets/art/romi_hogwarts.jpg',
    },
    {
      src: './assets/art/amigas.jpg',
    },
    {
      src: './assets/art/angus.jpg',
    },
    {
      src: './assets/art/George_Weasley.jpg',
    },
    {
      src: './assets/art/romi_bebe.jpg',
    },
    {
      src: './assets/art/romi_jin.jpg',
    },
    {
      src: './assets/art/amiga.jpg',
    },
    {
      src: './assets/art/romi_trabajo.jpg',
    },
    
  ]
</script>
