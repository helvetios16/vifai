<template>
  <div class="bg-gray-900 text-white min-h-screen font-sans">
    <div class="max-w-6xl mx-auto p-8">

      <header class="text-center my-16">
        <img 
          src="https://drive.google.com/uc?export=view&id=1RRpAuIYUGBjlh1YsOJ4HU_q1hIV25h8" 
          alt="Logo de SortLearn - Algoritmos de Ordenamiento" 
          class="mx-auto h-24 w-auto mb-6" 
        />
        <h1
          class="text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">
          SortLearn
        </h1>
        <p class="mt-4 text-2xl text-gray-400">Rediseño del Aprendizaje de Algoritmos de Ordenamiento</p>
      </header>

      <main>

        <section id="team" class="my-24">
          <h2 class="text-4xl font-bold text-orange-400 mb-8 text-center">Integrantes</h2>
          <div class="flex justify-center space-x-8">
            <p class="text-gray-400 text-center">Lizarve Mamani Johan Fabricio</p>
            <p class="text-gray-400 text-center">Machaca Muñiz Jose</p>
            <p class="text-gray-400 text-center">Mendoza Fernandez Sebastian Andres</p>
            <p class="text-gray-400 text-center">Ramos Pacco, Wilson</p>
          </div>
        </section>

        <section id="user-research" class="my-24">
          <h2 class="text-4xl font-bold text-orange-400 mb-12 text-center">Investigación de Usuarios</h2>
          <div class="grid md:grid-cols-2 gap-12">
            <div class="bg-gray-800/50 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-amber-300 mb-4 text-center">Usuarios Objetivo</h3>
              <p class="text-gray-400 text-center">Estudiantes universitarios de carreras de computación, ingeniería de
                software o
                afines, que se encuentren cursando cursos como Estructuras de Datos y Algoritmos.</p>
            </div>
            <div class="bg-gray-800/50 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-amber-300 mb-4 text-center">Experiencia</h3>
              <p class="text-gray-400 text-center">Como aprenden Algoritmos de Ordenamiento</p>
            </div>
          </div>
          <div class="mt-12">
            <h3 class="text-2xl font-bold text-amber-300 mb-4 text-center">Participantes</h3>
            <div class="grid md:grid-cols-4 gap-8 text-center">
              <div v-for="participant in participants" :key="participant.id" class="bg-gray-800/50 p-6 rounded-lg">
                <h4 class="text-xl font-bold text-red-400">{{ participant.id }}</h4>
                <p class="text-gray-400">{{ participant.description }}</p>
                <p class="text-xs text-gray-500 mt-2">Entrevistado por {{ participant.interviewer }}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="key-findings" class="my-24">
          <h2 class="text-4xl font-bold text-orange-400 mb-12 text-center">Hallazgos Clave</h2>
          <div class="grid md:grid-cols-2 gap-12 text-center">
            <div class="bg-gray-800/50 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-red-400 mb-4">"Miedo a Romper el Código"</h3>
              <p class="text-gray-400 italic text-center">"Normalmente estudio el código tal como está, sin modificarlo,
                para evitar
                errores en su funcionamiento".</p>
              <p class="text-gray-400 italic mt-2 text-center">"Si cambio este i... temo que entre en un bucle infinito"
              </p>
            </div>
            <div class="bg-gray-800/50 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-red-400 mb-4">Confusión con el caso base de recursión</h3>
              <p class="text-gray-400 text-center">No entiende que la división ocurre COMPLETAMENTE primero (hasta
                elementos de
                tamaño 1), y solo DESPUÉS comienza el merge.</p>
            </div>
            <div class="bg-gray-800/50 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-red-400 mb-4">Confusión con el orden de ejecución del call stack</h3>
              <p class="text-gray-400 text-center">No comprende que el call stack es LIFO (Last In, First Out). No puede
                predecir el
                orden de ejecución porque el call stack es invisible en su modelo mental.</p>
            </div>
            <div class="bg-gray-800/50 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-red-400 mb-4">"No entiendo como funciona el merge"</h3>
              <p class="text-gray-400 italic text-center">"Merge Sort se me complica por su parte recursiva... lo más
                difícil es
                seguir la lógica recursiva"</p>
            </div>
          </div>
        </section>

        <section id="needs" class="my-24">
          <h2 class="text-4xl font-bold text-orange-400 mb-12 text-center">Las 9 Necesidades Clave</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="need in needs" :key="need.id" class="bg-gray-800/50 p-6 rounded-lg text-center">
              <h3 class="text-xl font-bold text-amber-300 mb-2">{{ need.id }}: {{ need.title }}</h3>
              <p class="text-gray-400">{{ need.description }}</p>
            </div>
          </div>
        </section>

        <section id="insights" class="my-24">
          <h2 class="text-4xl font-bold text-orange-400 mb-12 text-center">Insights</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div v-for="insight in insights" :key="insight" class="bg-gray-800/50 p-6 rounded-lg text-center">
              <p class="text-gray-400">{{ insight }}</p>
            </div>
          </div>
        </section>

        <section id="interviews" class="my-24 text-center">
          <h2 class="text-4xl font-bold text-orange-400 mb-8">Entrevistas</h2>
          <div class="flex justify-center space-x-8">
            <a v-for="interview in interviews" :key="interview.user" :href="interview.link" target="_blank"
              class="text-orange-400 hover:text-orange-300">Usuario {{ interview.user }}</a>
          </div>
        </section>

        <!--
        <footer class="text-center my-16 py-12 bg-gray-800/30 rounded-2xl border border-gray-700/60">
          <p class="text-3xl text-orange-400 font-bold">Conclusión</p>
          <p class="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            La herramienta debe ser un <strong class="text-orange-300">asistente visual</strong> que ilumine los
            procesos abstractos, permitiendo al estudiante experimentar y construir un modelo mental sólido y sin miedo.
          </p>
        </footer> -->

      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const participants = [
  { id: 'A', description: 'Un estudiante de cuarto ciclo de computación que recién está aprendiendo algoritmos de ordenamiento.', interviewer: 'Jose' },
  { id: 'B', description: 'Un estudiante de computación de tercer año de la carrera que ya culminó el curso.', interviewer: 'Johan' },
  { id: 'C', description: 'Un estudiante de computación de cuarto o quinto año que se encuentra preparándose para entrevistas técnicas.', interviewer: 'Sebastian' },
  { id: 'D', description: 'Un estudiante de segundo ciclo que ya vio algunos algoritmos de ordenamiento.', interviewer: 'Wilson' },
];

const needs = [
  { id: 1, title: 'Contexto y Relevancia', description: 'Los estudiantes necesitan entender por qué se ordenan datos, en qué contextos reales se aplica y cómo impacta en la eficiencia de sistemas.' },
  { id: 2, title: 'Explicación Abstracta', description: 'Necesitan poder explicar con sus propias palabras cómo funciona un algoritmo, sin depender del código fuente.' },
  { id: 3, title: 'Agrupación por Estrategia', description: 'Requieren detectar similitudes como “divide y vencerás”, “intercambios sucesivos”, “uso de pivotes”, etc., para agrupar algoritmos por estrategia.' },
  { id: 4, title: 'Toma de Decisiones', description: 'Deben aprender a elegir el algoritmo adecuado según el contexto (memoria, tiempo, tipo de datos), lo que requiere abstraer sus ventajas y limitaciones.' },
  { id: 5, title: 'Conexión Cotidiana', description: 'Necesitan analogías como “ordenar cartas”, “organizar libros”, “filtrar por tamaño” para conectar el algoritmo con experiencias cotidianas.' },
  { id: 6, title: 'Experimentación Activa', description: 'Ellos necesitan analizar cómo podrían mejorar la implementación, o si se les ocurre resolver el problema de ordenamiento de otra manera diferente.' },
  { id: 7, title: 'Consolidación del Aprendizaje', description: 'Los estudiantes necesitan consolidar los conocimientos adquiridos mediante pruebas prácticas que les permitan aplicar, evaluar y reflexionar sobre lo aprendido.' },
  { id: 8, title: 'Ver explícitamente cuándo se alcanza el caso base', description: 'Necesitan una señal visual CLARA de cuándo un subarray alcanza tamaño 1 (caso base), porque sin esto no entienden cuándo termina la división y comienza el merge.' },
  { id: 9, title: 'Ver el call stack con numeración de pasos', description: 'Necesitan ver el call stack como una pila vertical que muestra el ORDEN temporal de ejecución (qué llamada ocurre primero, qué llamada retorna primero), porque sin esto no pueden predecir el flujo del algoritmo recursivo.' },
];

const insights = [
  '“Visualización” como primer recurso de aprendizaje → De B y C: prefieren representaciones gráficas y videos antes que texto o código.',
  '“Recursión” como punto de confusión crítica → De A y C: la recursión les resulta confusa sin ver el call stack o el flujo de llamadas.',
  'Necesidad de “interacción paso a paso” → De A y C: necesitan avanzar y retroceder entre pasos del algoritmo para entender los cambios.',
  '“Código editable” para experimentar y aprender del error → De C: modifica el código para entender cómo cambian los resultados; quiere feedback inmediato.',
  'Nivel de Experiencia Determina Estrategia de Aprendizaje ->',
  '“Conexión entre código y visualización” simultánea → De B y C: requieren ver el código y la representación visual al mismo tiempo para comprender el flujo.',
  '“Comprensión de complejidad” como reto posterior al aprendizaje básico → De B: considera la eficiencia y complejidad esenciales para entender el valor del algoritmo.',
  '“Apoyo textual o asistido por IA” para aclarar dudas → De D: considera útiles los LLMs (como ChatGPT) para resolver preguntas específicas o reforzar conceptos.',
  '“Aprendizaje activo” mediante práctica y experimentación → De D: usar ejemplos o materiales físicos refuerza la comprensión; de C: escribir y probar código propio.',
];

const interviews = [
  { user: 'A', link: 'https://drive.google.com/file/d/1PbS-Kfx3yotUwupkS18m1GR8L-rpPipN/view?usp=sharing' },
  { user: 'B', link: 'https://drive.google.com/file/d/18VA8mWIXK9e8A2vkROYiqmsAjD9y0g_L/view?usp=sharing' },
  { user: 'C', link: 'https://drive.google.com/drive/folders/1HeUkFPXMJ8dusMQJm6LxpGRT_mkMXC-T?usp=sharing' }, // No link provided for user C
  { user: 'D', link: 'https://drive.google.com/file/d/1QhrU-9IXUn_qtmIYLODpYRBS1f1paZIC/view?usp=drive_link' },
];

</script>

<style scoped>
/* Using Tailwind utilities, no extra scoped styles needed for this design */
</style>
