<template>
  <section id="key-findings" class="my-16 sm:my-20 md:my-24 px-4">
    <h2 class="text-3xl sm:text-4xl font-bold text-orange-400 mb-8 sm:mb-10 md:mb-12 text-center">
      Hallazgos Clave
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 text-center">
      <div
        class="bg-gray-800/50 p-6 sm:p-8 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800/80"
      >
        <h3 class="text-xl sm:text-2xl font-bold text-red-400 mb-3 sm:mb-4">
          "Miedo a Romper el Código"
        </h3>
        <p class="text-sm sm:text-base text-gray-400 italic text-center">
          "Normalmente estudio el código tal como está, sin modificarlo, para evitar errores en su
          funcionamiento".
        </p>
        <p class="text-sm sm:text-base text-gray-400 italic mt-2 text-center">
          "Si cambio este i... temo que entre en un bucle infinito"
        </p>
      </div>
      <div
        class="bg-gray-800/50 p-6 sm:p-8 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800/80"
      >
        <h3 class="text-xl sm:text-2xl font-bold text-red-400 mb-3 sm:mb-4">
          Confusión con el caso base de recursión
        </h3>
        <p class="text-sm sm:text-base text-gray-400 text-center">
          No entiende que la división ocurre COMPLETAMENTE primero (hasta elementos de tamaño 1), y
          solo DESPUÉS comienza el merge.
        </p>
      </div>
      <div
        class="bg-gray-800/50 p-6 sm:p-8 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800/80"
      >
        <h3 class="text-xl sm:text-2xl font-bold text-red-400 mb-3 sm:mb-4">
          Confusión con el orden de ejecución del call stack
        </h3>
        <p class="text-sm sm:text-base text-gray-400 text-center">
          No comprende que el call stack es LIFO (Last In, First Out). No puede predecir el orden de
          ejecución porque el call stack es invisible en su modelo mental.
        </p>
      </div>
      <div
        class="bg-gray-800/50 p-6 sm:p-8 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800/80"
      >
        <h3 class="text-xl sm:text-2xl font-bold text-red-400 mb-3 sm:mb-4">
          "No entiendo como funciona el merge"
        </h3>
        <p class="text-sm sm:text-base text-gray-400 italic text-center">
          "Merge Sort se me complica por su parte recursiva... lo más difícil es seguir la lógica
          recursiva"
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed
</script>
