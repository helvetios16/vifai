<template>
  <div class="bg-gray-900 text-white font-sans h-screen overflow-hidden">
    <!-- Image Modal -->
    <ImageModal :src="activeModalImageSrc" @close="closeImageModal" />

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
        <PageHeader @go-to-high-fi="goToSection(8)" />
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

      <!-- Low-Fi Prototype Section Slide -->
      <div class="w-full h-full flex-shrink-0 flex justify-center items-center p-8">
        <div class="max-w-5xl w-full">
          <LowFiPrototypeSection :prototypes="lowFiPrototypes" @image-clicked="openImageModal" />
        </div>
      </div>

      <!-- User Tests Section Slide -->
      <div class="w-full h-full flex-shrink-0 flex justify-center items-center p-8">
        <div class="max-w-5xl w-full">
          <UserTestsSection :tests="userTests" />
        </div>
      </div>

      <!-- High-Fi Interviews Section Slide -->
      <div class="w-full h-full flex-shrink-0 flex justify-center items-center p-8">
        <div class="max-w-5xl w-full">
          <HighFiInterviewsSection :interviews="highFiInterviews" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import {
  participants,
  needs,
  interviews,
  lowFiPrototypes,
  userTests,
  highFiInterviews,
} from '@/data/learningRedesignData'

// Components
import PageHeader from '@/components/learning-design/PageHeader.vue'
import TeamSection from '@/components/learning-design/TeamSection.vue'
import UserResearchSection from '@/components/learning-design/UserResearchSection.vue'
import KeyFindingsSection from '@/components/learning-design/KeyFindingsSection.vue'
import NeedsSection from '@/components/learning-design/NeedsSection.vue'
import InterviewsSection from '@/components/learning-design/InterviewsSection.vue'
import LowFiPrototypeSection from '@/components/learning-design/LowFiPrototypeSection.vue'
import UserTestsSection from '@/components/learning-design/UserTestsSection.vue'
import HighFiInterviewsSection from '@/components/learning-design/HighFiInterviewsSection.vue'
import SlideNav from '@/components/learning-design/SlideNav.vue'
import ImageModal from '@/components/learning-design/ImageModal.vue'

// State
const currentSectionIndex = ref(0)
let isThrottled = false
const activeModalImageSrc = ref<string | null>(null)

// Sections Definition for Nav
const sections = [
  { id: 'home', title: 'Inicio' },
  { id: 'team', title: 'Integrantes' },
  { id: 'user-research', title: 'Investigación' },
  { id: 'key-findings', title: 'Hallazgos' },
  { id: 'needs', title: 'Necesidades' },
  { id: 'interviews', title: 'Entrevistas' },
  { id: 'low-fi-prototype', title: 'Prototipo' },
  { id: 'user-tests', title: 'Pruebas' },
  { id: 'high-fi-interviews', title: 'Alta Fidelidad' },
]

// Modal Functions
function openImageModal(src: string) {
  activeModalImageSrc.value = src
}
function closeImageModal() {
  activeModalImageSrc.value = null
}

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
  if (isThrottled || activeModalImageSrc.value) return // Disable scroll when modal is open
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
  if (event.key === 'Escape' && activeModalImageSrc.value) {
    closeImageModal()
    return
  }
  if (isThrottled || activeModalImageSrc.value) return // Disable keys when modal is open

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
