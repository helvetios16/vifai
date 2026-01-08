<template>
  <section id="high-fi-interviews" class="my-16 sm:my-20 md:my-24 text-center px-4">
    <h2 class="text-3xl sm:text-4xl font-bold text-orange-400 mb-3 sm:mb-4">
      Entrevistas - Prototipo de Alta Fidelidad
    </h2>
    <p class="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
      Entrevistas realizadas con usuarios para validar el prototipo de alta fidelidad
    </p>
    <div class="flex flex-wrap justify-center gap-4 sm:gap-6">
      <a
        v-for="interview in interviews"
        :key="interview.user"
        :href="interview.link"
        :target="interview.pending ? '_self' : '_blank'"
        :class="[
          'px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base',
          interview.pending
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed opacity-60'
            : 'bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 hover:shadow-lg',
        ]"
        :aria-disabled="interview.pending"
        @click.prevent="interview.pending ? null : openLink(interview.link)"
      >
        Usuario {{ interview.user }}
        <span v-if="interview.pending" class="ml-2 text-xs">(Pendiente)</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HighFiInterview } from '@/data/learningRedesignData'

defineProps<{
  interviews: HighFiInterview[]
}>()

function openLink(link: string) {
  window.open(link, '_blank')
}
</script>
