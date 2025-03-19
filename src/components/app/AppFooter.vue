<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="peach-lavender-1">
    <div class="d-flex ga-3">
      <v-btn
        v-for="item in items"
        :key="item.icon"
        :icon="item.icon"
        :href="item.href"
        density="comfortable"
        variant="text"
        target="_blank"

      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption">
      {{ new Date().getFullYear() }} — Desarrollada por <a class="text-decoration-none" href="https://www.linkedin.com/in/angel-aranguiz-gonzalez/" style="color: darkslateblue"><strong>Angel Aranguiz G.</strong></a>
    </div>
  </v-footer>
</template>
<script setup>
  // const icons = [
  //   'mdi-instagram',
  //   'mdi-gmail'
  // ]
  const items = [
    {
      'icon': 'mdi-instagram',
      'href': 'https://www.instagram.com/im.ninacat'
    },
    {
      'icon': 'mdi-gmail',
      'href': 'mailto:ninacatlife@gmail.com'
    }
  ]
</script>
