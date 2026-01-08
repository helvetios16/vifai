<template>
  <section id="interviews" class="my-16 sm:my-20 md:my-24 text-center px-4">
    <h2 class="text-3xl sm:text-4xl font-bold text-orange-400 mb-6 sm:mb-8">Entrevistas</h2>
    <div class="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
      <a
        v-for="interview in interviews"
        :key="interview.user"
        :href="interview.link"
        target="_blank"
        class="px-5 sm:px-6 py-2 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base font-medium"
        >Usuario {{ interview.user }}</a
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Interview } from '@/data/learningRedesignData'

defineProps<{
  interviews: Interview[]
}>()
</script>
