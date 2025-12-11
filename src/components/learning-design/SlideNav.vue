<template>
  <nav class="fixed right-8 top-1/2 -translate-y-1/2 z-10">
    <ul class="space-y-4 text-right">
      <li v-for="(section, index) in sections" :key="section.id">
        <button
          @click="$emit('goToSection', index)"
          class="font-bold transition-all duration-300 ease-in-out"
          :class="[
            currentIndex === index
              ? 'text-orange-400 text-lg'
              : 'text-gray-600 hover:text-gray-400 text-base',
          ]"
        >
          {{ section.title }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
export interface Section {
  id: string
  title: string
}

defineProps<{
  sections: Section[]
  currentIndex: number
}>()

defineEmits<{
  (e: 'goToSection', index: number): void
}>()
</script>
