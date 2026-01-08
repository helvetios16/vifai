<template>
  <section id="user-research" class="my-16 sm:my-20 md:my-24 px-4">
    <h2 class="text-3xl sm:text-4xl font-bold text-orange-400 mb-8 sm:mb-10 md:mb-12 text-center">
      Investigación de Usuarios
    </h2>
    <div class="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
      <div
        class="bg-gray-800/50 p-6 sm:p-8 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800/80"
      >
        <h3 class="text-xl sm:text-2xl font-bold text-amber-300 mb-3 sm:mb-4 text-center">
          Usuarios Objetivo
        </h3>
        <p class="text-sm sm:text-base text-gray-400 text-center">
          Estudiantes universitarios de carreras de computación, ingeniería de software o afines,
          que se encuentren cursando cursos como Estructuras de Datos y Algoritmos.
        </p>
      </div>
      <div
        class="bg-gray-800/50 p-6 sm:p-8 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800/80"
      >
        <h3 class="text-xl sm:text-2xl font-bold text-amber-300 mb-3 sm:mb-4 text-center">
          Experiencia
        </h3>
        <p class="text-sm sm:text-base text-gray-400 text-center">
          Como aprenden Algoritmos de Ordenamiento
        </p>
      </div>
    </div>
    <div class="mt-8 sm:mt-10 md:mt-12">
      <h3 class="text-xl sm:text-2xl font-bold text-amber-300 mb-6 sm:mb-8 text-center">
        Participantes
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
        <div
          v-for="participant in participants"
          :key="participant.id"
          class="bg-gray-800/50 p-5 sm:p-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800/80"
        >
          <h4 class="text-lg sm:text-xl font-bold text-red-400">{{ participant.id }}</h4>
          <p class="text-sm sm:text-base text-gray-400 mt-2">{{ participant.description }}</p>
          <p class="text-xs text-gray-500 mt-2">Entrevistado por {{ participant.interviewer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Participant } from '@/data/learningRedesignData'

defineProps<{
  participants: Participant[]
}>()
</script>
