<template>
  <div class="bg-gray-900 text-white min-h-screen font-sans">
    <div class="max-w-6xl mx-auto p-8">
      <PageHeader v-scroll-animation />

      <main>
        <TeamSection v-scroll-animation />
        <UserResearchSection :participants="participants" v-scroll-animation />
        <KeyFindingsSection v-scroll-animation />
        <NeedsSection :needs="needs" v-scroll-animation />
        <InterviewsSection :interviews="interviews" v-scroll-animation />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { participants, needs, interviews } from '@/data/learningRedesignData'

import PageHeader from '@/components/learning-design/PageHeader.vue'
import TeamSection from '@/components/learning-design/TeamSection.vue'
import UserResearchSection from '@/components/learning-design/UserResearchSection.vue'
import KeyFindingsSection from '@/components/learning-design/KeyFindingsSection.vue'
import NeedsSection from '@/components/learning-design/NeedsSection.vue'
import InterviewsSection from '@/components/learning-design/InterviewsSection.vue'
</script>

<style scoped>
/* Using Tailwind utilities, no extra scoped styles needed for this design */
</style>
