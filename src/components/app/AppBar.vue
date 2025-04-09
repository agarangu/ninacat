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
          v-for="item in menu2"
          :key="item.id"
          class="text-body-1 blue-grey-darken-4"
          :href="`#${item.id}`"
          variant="text"
        >
          {{ item.display }}
        </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup>
  import logo from "/src/assets/logo.png"
  import firma from "/src/assets/firma.png"
  import { useI18n } from "vue-i18n";
  const { t } = useI18n({ useScope: "global" });
  const menu = [
    // 'Home',
    // 'About',
    // 'Testimonials',
    'portfolio',
    'team',
  //   'Features',
  //   'Pricing',
  ];
  const menu2 = [
    {
      id: 'portfolio',
      display: t('header.portfolio')
    },
    {
      id: 'team',
      display: t('header.team')
    },
  ]
</script>
