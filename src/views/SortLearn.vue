<template>
  <div class="bg-gray-900 text-white min-h-screen font-sans">
    <div class="max-w-6xl mx-auto p-8">
      <PageHeader />

      <main>
        <TeamSection />
        <UserResearchSection :participants="participants" />
        <KeyFindingsSection />
        <NeedsSection :needs="needs" />
        <InsightsSection :insights="insights" />
        <InterviewsSection :interviews="interviews" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { participants, needs, insights, interviews } from '@/data/learningRedesignData'

import PageHeader from '@/components/learning-design/PageHeader.vue'
import TeamSection from '@/components/learning-design/TeamSection.vue'
import UserResearchSection from '@/components/learning-design/UserResearchSection.vue'
import KeyFindingsSection from '@/components/learning-design/KeyFindingsSection.vue'
import NeedsSection from '@/components/learning-design/NeedsSection.vue'
import InsightsSection from '@/components/learning-design/InsightsSection.vue'
import InterviewsSection from '@/components/learning-design/InterviewsSection.vue'
</script>

<style scoped>
/* Using Tailwind utilities, no extra scoped styles needed for this design */
</style>
