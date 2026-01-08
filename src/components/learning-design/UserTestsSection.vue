<template>
  <section id="user-tests" class="my-16 sm:my-20 md:my-24 px-4">
    <h2 class="text-3xl sm:text-4xl font-bold text-orange-400 mb-8 sm:mb-10 md:mb-12 text-center">
      Pruebas de Usuario
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
      <a
        v-for="test in tests"
        :key="test.id"
        :href="test.interviewLink"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-gray-800/50 p-5 sm:p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:bg-gray-800"
      >
        <img
          :src="test.userImgSrc"
          :alt="'Foto del ' + test.userName"
          class="w-40 sm:w-48 h-28 sm:h-32 rounded-md mb-4 object-cover border-4 border-gray-700"
        />
        <h3 class="text-lg sm:text-xl font-bold text-red-400 mb-2">{{ test.userName }}</h3>
        <p class="text-sm sm:text-base text-gray-400 italic">"{{ test.description }}"</p>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { UserTest } from '@/data/learningRedesignData'

defineProps<{
  tests: UserTest[]
}>()
</script>
