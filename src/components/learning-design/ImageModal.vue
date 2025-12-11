<template>
  <div 
    v-if="src" 
    class="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4"
    @click.self="$emit('close')"
  >
    <div class="relative">
      <img :src="src" alt="Vista ampliada del prototipo" class="max-w-[95vw] max-h-[95vh] rounded-lg">
      <button 
        @click="$emit('close')"
        class="absolute -top-6 -right-6 bg-transparent text-white w-10 h-10 text-4xl font-bold flex justify-center items-center hover:text-orange-400 transition-colors"
        aria-label="Cerrar modal"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string | null;
}>();

defineEmits<{
  (e: 'close'): void;
}>();
</script>
