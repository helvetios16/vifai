<template>
  <section id="high-fi-interviews" class="my-16 sm:my-20 md:my-24 text-center px-4">
    <h2 class="text-3xl sm:text-4xl font-bold text-orange-400 mb-3 sm:mb-4">
      Entrevistas - Prototipo de Alta Fidelidad
    </h2>
    <p class="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
      Entrevistas realizadas con usuarios para validar el prototipo de alta fidelidad
    </p>
    <div class="flex flex-wrap justify-center gap-8 sm:gap-10">
      <div v-for="interview in interviews" :key="interview.user" class="flex flex-col items-center">
        <a
          :href="interview.link"
          :target="interview.pending ? '_self' : '_blank'"
          :class="[
            'px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 text-base sm:text-lg shadow-md',
            interview.pending
              ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white hover:scale-105 hover:shadow-xl hover:-translate-y-1',
          ]"
          :aria-disabled="interview.pending"
          @click.prevent="interview.pending ? null : openLink(interview.link)"
        >
          Usuario {{ interview.user }}
          <span v-if="interview.pending" class="ml-2 text-xs font-normal opacity-70"
            >(Pendiente)</span
          >
        </a>
        <span
          v-if="interview.interviewer"
          class="mt-3 text-sm text-gray-400 font-medium tracking-wide"
        >
          Entrevistado por <span class="text-orange-300">{{ interview.interviewer }}</span>
        </span>
      </div>
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
