<template>
  <section id="user-tests">
    <h2 class="text-4xl font-bold text-orange-400 mb-12 text-center">Pruebas de Usuario</h2>
    <div class="grid md:grid-cols-2 gap-12">
      <a
        v-for="test in tests"
        :key="test.id"
        :href="test.interviewLink"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-gray-800/50 p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:bg-gray-800"
      >
        <img
          :src="test.userImgSrc"
          :alt="'Foto del ' + test.userName"
          class="w-48 h-32 rounded-md mb-4 object-cover border-4 border-gray-700"
        />
        <h3 class="text-xl font-bold text-red-400 mb-2">{{ test.userName }}</h3>
        <p class="text-gray-400 italic">"{{ test.description }}"</p>
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
