<template>
  <v-sheet
    id="team"
    class="text-center py-16"
    color="secondary"
    min-height="800"
  >
    <div class="text-h4 font-weight-bold">
      {{ $t('team.title') }}
    </div>

    <!-- <div class="text-body-1 text-medium-emphasis mt-5">
      Descubre más acerc.
    </div> -->

    <v-container>
      <v-row>
        <v-col
          v-for="person in team"
          :key="person.name"
          class="pa-16"
          cols="12"
          md="4"
        >
          <v-card
            class="bg-white rounded-t-xl pb-5"
            flat
          >
            <v-img
              class="w-100 rounded-t-xl"
              :src="person.image"
            />

            <div class="mt-3 text-body-1">
              {{ person.name }}
            </div>

            <div class="mt-3 text-grey-lighten-1 font-italic text-body-1">
              {{ person.title }}
            </div>

            <div class="mt-5 text-medium-emphasis mx-5">
              {{ person.description }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });
  const team = [
    {
      image: './assets/team/romi.jpg',
      name: 'Nina Cat',
      title: t('team.nina.position'),
      description: t('team.nina.description'),
    },
    {
      image: './assets/team/angus_ceo.jpg',
      name: 'Angus Bacon',
      title: t('team.angus.position'),
      description: t('team.angus.description'),
    },
    {
      image: './assets/team/mora_dev.jpg',
      name: 'Mora Margarita',
      title: t('team.mora.position'),
      description: t('team.mora.description'),
    },

  ]
</script>
