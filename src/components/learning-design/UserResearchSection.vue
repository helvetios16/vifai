<template>
  <section id="user-research" class="my-24">
    <h2 class="text-4xl font-bold text-orange-400 mb-12 text-center">Investigación de Usuarios</h2>
    <div class="grid md:grid-cols-2 gap-12">
      <div class="bg-gray-800/50 p-8 rounded-lg">
        <h3 class="text-2xl font-bold text-amber-300 mb-4 text-center">Usuarios Objetivo</h3>
        <p class="text-gray-400 text-center">
          Estudiantes universitarios de carreras de computación, ingeniería de software o afines,
          que se encuentren cursando cursos como Estructuras de Datos y Algoritmos.
        </p>
      </div>
      <div class="bg-gray-800/50 p-8 rounded-lg">
        <h3 class="text-2xl font-bold text-amber-300 mb-4 text-center">Experiencia</h3>
        <p class="text-gray-400 text-center">Como aprenden Algoritmos de Ordenamiento</p>
      </div>
    </div>
    <div class="mt-12">
      <h3 class="text-2xl font-bold text-amber-300 mb-4 text-center">Participantes</h3>
      <div class="grid md:grid-cols-4 gap-8 text-center">
        <div
          v-for="participant in participants"
          :key="participant.id"
          class="bg-gray-800/50 p-6 rounded-lg"
        >
          <h4 class="text-xl font-bold text-red-400">{{ participant.id }}</h4>
          <p class="text-gray-400">{{ participant.description }}</p>
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
