<script setup lang="ts">
const route  = useRoute()
const isOpen = ref(false)
const { y }  = useWindowScroll()

const isScrolled  = computed(() => y.value > 80)
const solidHeader = computed(() => route.path !== '/' || isScrolled.value)

const navLinks = [
  { name: 'Home',        to: '/' },
  { name: 'About Us',    to: '/about' },
  { name: 'Services',    to: '/services' },
  { name: 'Team',        to: '/team' },
  { name: 'Contact',     to: '/contact' },
]

watch(() => route.path, () => { isOpen.value = false })
</script>

<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      solidHeader
        ? 'bg-white shadow-lg py-3'
        : 'bg-transparent py-5',
    ]"
  >
    <div class="container-lg">
      <div class="flex items-center justify-between">

        <!-- ── Logo ──
             PLACEHOLDER: Replace the "A" block below with a real logo.
             1. Add your logo file to public/logo.png  (or .svg)
             2. Replace the <div>A</div> block with:
                <img src="/logo.png" alt="Ahaladar Rao & Associates" class="h-10 w-auto" />
        -->
        <NuxtLink to="/" class="flex items-center gap-3 group" aria-label="Home">
          <div
            :class="[
              'w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl font-serif flex-shrink-0 transition-colors',
              solidHeader ? 'bg-blue-800' : 'bg-white/20 backdrop-blur-sm',
            ]"
            title="Logo placeholder — replace with actual logo"
          >A</div>
          <div>
            <div
              :class="[
                'font-bold text-base leading-tight transition-colors',
                solidHeader ? 'text-brand-navy' : 'text-white',
              ]"
            >AHALADA RAO.V &amp; ASSOCIATES</div>
            <div
              :class="[
                'text-xs font-medium transition-colors',
                solidHeader ? 'text-blue-600' : 'text-blue-200',
              ]"
            >Company Secretaries</div>
          </div>
        </NuxtLink>

        <!-- ── Desktop nav ── -->
        <nav class="hidden lg:flex items-center gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative',
              solidHeader
                ? 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                : 'text-white/85 hover:text-white hover:bg-white/10',
              route.path === link.to
                ? solidHeader ? 'text-blue-700 bg-blue-50' : 'text-white'
                : '',
            ]"
          >
            {{ link.name }}
            <span
              v-if="route.path === link.to"
              :class="[
                'absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full',
                solidHeader ? 'bg-blue-700' : 'bg-white',
              ]"
            />
          </NuxtLink>

          <NuxtLink to="/appointments" class="ml-3 btn-primary text-sm">
            Book Appointment
          </NuxtLink>
        </nav>

        <!-- ── Mobile hamburger ── -->
        <button
          class="lg:hidden p-2 rounded-lg"
          :class="solidHeader ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'"
          aria-label="Toggle navigation"
          @click="isOpen = !isOpen"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isOpen"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- ── Mobile menu ── -->
      <Transition name="mobile">
        <div
          v-if="isOpen"
          class="lg:hidden mt-3 bg-white rounded-2xl shadow-brand-lg p-3 border border-gray-100"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="flex items-center gap-2 py-2.5 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl font-medium transition-colors text-sm"
            :class="route.path === link.to ? 'bg-blue-50 text-blue-700' : ''"
          >
            {{ link.name }}
          </NuxtLink>
          <div class="mt-2 pt-2 border-t border-gray-100">
            <NuxtLink to="/appointments" class="btn-primary w-full text-sm">
              Book Appointment
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.mobile-enter-active, .mobile-leave-active { transition: all 0.25s ease; }
.mobile-enter-from, .mobile-leave-to       { opacity: 0; transform: translateY(-8px); }
</style>
