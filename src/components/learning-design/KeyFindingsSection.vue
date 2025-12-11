<template>
  <section id="key-findings" class="my-24">
    <h2 class="text-4xl font-bold text-orange-400 mb-12 text-center">Hallazgos Clave</h2>
    <div class="grid md:grid-cols-2 gap-12 text-center">
      <div class="bg-gray-800/50 p-8 rounded-lg">
        <h3 class="text-2xl font-bold text-red-400 mb-4">"Miedo a Romper el Código"</h3>
        <p class="text-gray-400 italic text-center">
          "Normalmente estudio el código tal como está, sin modificarlo, para evitar errores en su
          funcionamiento".
        </p>
        <p class="text-gray-400 italic mt-2 text-center">
          "Si cambio este i... temo que entre en un bucle infinito"
        </p>
      </div>
      <div class="bg-gray-800/50 p-8 rounded-lg">
        <h3 class="text-2xl font-bold text-red-400 mb-4">
          Confusión con el caso base de recursión
        </h3>
        <p class="text-gray-400 text-center">
          No entiende que la división ocurre COMPLETAMENTE primero (hasta elementos de tamaño 1), y
          solo DESPUÉS comienza el merge.
        </p>
      </div>
      <div class="bg-gray-800/50 p-8 rounded-lg">
        <h3 class="text-2xl font-bold text-red-400 mb-4">
          Confusión con el orden de ejecución del call stack
        </h3>
        <p class="text-gray-400 text-center">
          No comprende que el call stack es LIFO (Last In, First Out). No puede predecir el orden de
          ejecución porque el call stack es invisible en su modelo mental.
        </p>
      </div>
      <div class="bg-gray-800/50 p-8 rounded-lg">
        <h3 class="text-2xl font-bold text-red-400 mb-4">"No entiendo como funciona el merge"</h3>
        <p class="text-gray-400 italic text-center">
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
