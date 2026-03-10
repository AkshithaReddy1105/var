<template>
  <div class="min-h-screen flex flex-col bg-white font-sans antialiased">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
