<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  breadcrumb?: string
}>()
</script>

<template>
  <section class="gradient-brand pt-32 pb-16 relative overflow-hidden">
    <!-- Decorative shapes -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

    <div class="container-lg relative">
      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 text-sm text-blue-300 mb-4" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
        <span class="text-white font-medium">{{ breadcrumb || title }}</span>
      </nav>

      <h1 class="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        {{ title }}
      </h1>
      <p v-if="description" class="text-blue-200 text-lg max-w-2xl leading-relaxed">
        {{ description }}
      </p>

      <!-- Amber accent line -->
      <div class="w-16 h-1 bg-amber-500 rounded mt-6" />
    </div>
  </section>
</template>
