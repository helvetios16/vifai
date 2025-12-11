<template>
  <div class="bg-gray-900 text-white font-sans h-screen overflow-hidden">
    <!-- Dot Navigation -->
    <SlideNav
      :sections="sections"
      :current-index="currentSectionIndex"
      @go-to-section="goToSection"
    />

    <!-- Slides Container -->
    <div
      class="h-full w-full transition-transform duration-700 ease-in-out"
      :style="slidesContainerStyle"
    >
      <!-- Welcome/Header Slide -->
      <div class="w-full h-full flex-shrink-0 flex justify-center items-center p-8">
        <PageHeader />
      </div>

      <!-- Team Section Slide -->
      <div class="w-full h-full flex-shrink-0 flex justify-center items-center p-8">
        <div class="max-w-5xl w-full">
          <TeamSection />
        </div>
      </div>

      <!-- User Research Section Slide -->
      <div class="w-full h-full flex-shrink-0 flex justify-center items-center p-8">
        <div class="max-w-5xl w-full">
          <UserResearchSection :participants="participants" />
        </div>
      </div>

      <!-- Key Findings Section Slide -->
      <div class="w-full h-full flex-shrink-0 flex justify-center items-center p-8">
        <div class="max-w-5xl w-full">
          <KeyFindingsSection />
        </div>
      </div>

      <!-- Needs Section Slide -->
      <div class="w-full h-full flex-shrink-0 flex justify-center items-center p-8">
        <div class="max-w-5xl w-full">
          <NeedsSection :needs="needs" />
        </div>
      </div>

      <!-- Interviews Section Slide -->
      <div class="w-full h-full flex-shrink-0 flex justify-center items-center p-8">
        <div class="max-w-5xl w-full">
          <InterviewsSection :interviews="interviews" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { participants, needs, interviews } from '@/data/learningRedesignData'

// Components
import PageHeader from '@/components/learning-design/PageHeader.vue'
import TeamSection from '@/components/learning-design/TeamSection.vue'
import UserResearchSection from '@/components/learning-design/UserResearchSection.vue'
import KeyFindingsSection from '@/components/learning-design/KeyFindingsSection.vue'
import NeedsSection from '@/components/learning-design/NeedsSection.vue'
import InterviewsSection from '@/components/learning-design/InterviewsSection.vue'
import SlideNav from '@/components/learning-design/SlideNav.vue'

// State
const currentSectionIndex = ref(0)
let isThrottled = false

// Sections Definition for Nav
const sections = [
  { id: 'home', title: 'Inicio' },
  { id: 'team', title: 'Integrantes' },
  { id: 'user-research', title: 'Investigación' },
  { id: 'key-findings', title: 'Hallazgos' },
  { id: 'needs', title: 'Necesidades' },
  { id: 'interviews', title: 'Entrevistas' },
]

// Computed style for sliding effect
const slidesContainerStyle = computed(() => ({
  transform: `translateY(-${currentSectionIndex.value * 100}vh)`,
}))

// Navigation Functions
function goToSection(index: number) {
  if (index >= 0 && index < sections.length) {
    currentSectionIndex.value = index
  }
}

function handleWheel(event: WheelEvent) {
  if (isThrottled) return
  isThrottled = true
  setTimeout(() => {
    isThrottled = false
  }, 1000) // Throttle scroll detection

  if (event.deltaY > 0) {
    // Scrolling down
    goToSection(currentSectionIndex.value + 1)
  } else {
    // Scrolling up
    goToSection(currentSectionIndex.value - 1)
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (isThrottled) return
  isThrottled = true
  setTimeout(() => {
    isThrottled = false
  }, 1000)

  if (event.key === 'ArrowDown') {
    goToSection(currentSectionIndex.value + 1)
  } else if (event.key === 'ArrowUp') {
    goToSection(currentSectionIndex.value - 1)
  }
}

// Lifecycle Hooks
onMounted(() => {
  window.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel)
  window.removeEventListener('keydown', handleKeydown)
})
</script>
