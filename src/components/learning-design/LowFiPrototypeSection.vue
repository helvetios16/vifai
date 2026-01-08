<template>
  <section id="low-fi-prototype" class="my-16 sm:my-20 md:my-24 px-4">
    <h2 class="text-3xl sm:text-4xl font-bold text-orange-400 mb-8 sm:mb-10 md:mb-12 text-center">
      Prototipo de Baja Fidelidad
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      <div
        v-for="proto in prototypes"
        :key="proto.id"
        class="bg-gray-800/50 p-3 sm:p-4 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        @click="$emit('imageClicked', proto.src)"
      >
        <img :src="proto.src" :alt="proto.alt" class="rounded-md w-full h-auto object-cover" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { LowFiPrototype } from '@/data/learningRedesignData'

defineProps<{
  prototypes: LowFiPrototype[]
}>()

defineEmits<{
  (e: 'imageClicked', src: string): void
}>()
</script>
