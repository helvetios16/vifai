<template>
  <section id="insights" class="my-24">
    <h2 class="text-4xl font-bold text-orange-400 mb-12 text-center">Insights</h2>
    <div class="grid md:grid-cols-2 gap-8">
      <div
        v-for="insight in insights"
        :key="insight"
        class="bg-gray-800/50 p-6 rounded-lg text-center"
      >
        <p class="text-gray-400">{{ insight }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  insights: string[]
}>()
</script>
