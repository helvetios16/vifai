<template>
  <header class="text-center my-8 sm:my-12 md:my-16 px-4">
    <h1
      class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500"
    >
      SortLearn
    </h1>
    <p class="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl text-gray-400 px-4">
      Rediseño del Aprendizaje de Algoritmos de Ordenamiento
    </p>
    <div
      class="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center px-4"
    >
      <a
        href="https://sortlearn-dev.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        class="w-full sm:w-auto group inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
      >
        <svg
          class="w-4 h-4 sm:w-5 sm:h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
        <span class="text-white font-semibold text-sm sm:text-base">Ver Interfaz en Vivo</span>
      </a>
      <button
        @click="scrollToHighFi"
        class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3 bg-gray-800 border border-orange-500/30 rounded-lg hover:bg-gray-700 hover:border-orange-500 transition-all duration-300"
      >
        <svg
          class="w-4 h-4 sm:w-5 sm:h-5 text-orange-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span class="text-gray-200 font-medium text-sm sm:text-base">Ir a Alta Fidelidad</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  goToHighFi: []
}>()

const scrollToHighFi = () => {
  emit('goToHighFi')
}
</script>
