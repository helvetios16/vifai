<template>
  <section id="needs" class="my-24">
    <h2 class="text-4xl font-bold text-orange-400 mb-12 text-center">Las 9 Necesidades Clave</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="need in needs" :key="need.id" class="bg-gray-800/50 p-6 rounded-lg text-center">
        <h3 class="text-xl font-bold text-amber-300 mb-2">{{ need.id }}: {{ need.title }}</h3>
        <p class="text-gray-400">{{ need.description }}</p>
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
