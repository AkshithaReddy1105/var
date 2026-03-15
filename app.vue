<script setup lang="ts">
// Show a branded splash screen on initial page load, then fade it out
const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 700)
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white font-sans antialiased overflow-x-hidden">

    <!-- ── Top progress bar for client-side navigation ── -->
    <NuxtLoadingIndicator color="#d97706" :height="3" />

    <!-- ── Branded splash / loading screen ── -->
    <Transition name="screen-fade">
      <div
        v-if="isLoading"
        class="fixed inset-0 z-[9999] gradient-brand flex items-center justify-center"
        aria-hidden="true"
      >
        <div class="text-center select-none px-4">
          <!-- Logo mark -->
          <div class="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white font-bold text-3xl font-serif mx-auto mb-5 shadow-lg">
            A
          </div>

          <!-- Firm name -->
          <h1 class="text-white font-bold text-xl mb-1 tracking-tight">
            AHALADA RAO.V &amp; ASSOCIATES
          </h1>
          <p class="text-blue-200 text-sm mb-8 font-medium">
            Company Secretaries · Hyderabad
          </p>

          <!-- Bouncing dots -->
          <div class="flex items-center justify-center gap-2.5">
            <span class="w-2.5 h-2.5 bg-amber-400 rounded-full animate-bounce" style="animation-delay:0ms" />
            <span class="w-2.5 h-2.5 bg-amber-400 rounded-full animate-bounce" style="animation-delay:150ms" />
            <span class="w-2.5 h-2.5 bg-amber-400 rounded-full animate-bounce" style="animation-delay:300ms" />
          </div>
        </div>
      </div>
    </Transition>

    <!-- ── App shell ── -->
    <AppHeader />

    <main class="flex-1">
      <NuxtPage />
    </main>

    <AppFooter />
  </div>
</template>

<style>
/* Loading screen fade-out */
.screen-fade-leave-active {
  transition: opacity 0.45s ease;
}
.screen-fade-leave-to {
  opacity: 0;
}
</style>
