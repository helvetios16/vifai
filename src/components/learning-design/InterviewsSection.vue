<template>
  <section id="interviews" class="my-24 text-center">
    <h2 class="text-4xl font-bold text-orange-400 mb-8">Entrevistas</h2>
    <div class="flex justify-center space-x-8">
      <a
        v-for="interview in interviews"
        :key="interview.user"
        :href="interview.link"
        target="_blank"
        class="text-orange-400 hover:text-orange-300"
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
