<template>
  <section id="needs" class="my-16 sm:my-20 md:my-24 px-4">
    <h2 class="text-3xl sm:text-4xl font-bold text-orange-400 mb-8 sm:mb-10 md:mb-12 text-center">
      Las 9 Necesidades Clave
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <div
        v-for="need in needs"
        :key="need.id"
        class="bg-gray-800/50 p-5 sm:p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105 hover:bg-gray-800/80"
      >
        <h3 class="text-lg sm:text-xl font-bold text-amber-300 mb-2">
          {{ need.id }}: {{ need.title }}
        </h3>
        <p class="text-sm sm:text-base text-gray-400">{{ need.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Need } from '@/data/learningRedesignData'

defineProps<{
  needs: Need[]
}>()
</script>
