<template>
  <v-sheet id="portfolio" class="text-center py-16">
    <div class="text-h4 font-weight-bold">
      {{ $t('portfolio.title') }}
    </div>

    <div class="text-body-1 text-medium-emphasis mt-5">
      {{ $t('portfolio.subtitle') }}
    </div>
    <v-carousel 
        cycle
        hide-delimiters
        :height="carouselHeight"
        show-arrows="hover">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    
    <v-btn variant="plain">
      {{ $t('portfolio.button') }}
      <v-tooltip
        activator="parent"
        location="bottom"
        :open-on-click=true
      >{{ $t('portfolio.tooltip') }}</v-tooltip>
    </v-btn>
    
  </v-sheet>
</template>
<script setup>
  import { ref, watch } from 'vue'
  let carouselHeight = ref("700")
  let orientationChanged = ref(-1)
  screen.orientation.addEventListener("change", () => {orientationChanged.value*=-1})
  watch(orientationChanged, () => {
    if(screen.width > screen.height) carouselHeight.value = "70vw"
    else carouselHeight.value = "100vw"
  })
  
  
  const items = [
    {
      src: './assets/art/castillo.jpg',
    },
    {
      src: './assets/art/21_Marzo.jpg',
    },
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
