<script setup lang="ts">
const footerServices = [
  { label: 'Company Incorporation',  appt: 'Private Limited Company' },
  { label: 'Secretarial Audit',      appt: 'Secretarial Audit (MR-3)' },
  { label: 'Annual ROC Compliances', appt: 'Annual ROC Filings' },
  { label: 'NCLT Matters',           appt: 'NCLT Petitions & Applications' },
  { label: 'FEMA / RBI Compliance',  appt: 'FEMA & RBI Compliance' },
  { label: 'Mergers & Acquisitions', appt: 'Mergers & Amalgamations' },
  { label: 'Trademark Registration', appt: 'Trademark Registration' },
  { label: 'Corporate Governance',   appt: 'Corporate Advisory' },
]

const quickLinks = [
  { name: 'Home',         to: '/' },
  { name: 'About Us',     to: '/about' },
  { name: 'Our Services', to: '/services' },
  { name: 'Our Team',     to: '/team' },
  { name: 'Contact Us',   to: '/contact' },
  { name: 'Book Appointment', to: '/appointments' },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="gradient-brand text-white">

    <!-- ── Main footer grid ── -->
    <div class="container-lg py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- Brand column -->
        <div class="lg:col-span-1">
          <!-- PLACEHOLDER: Replace "A" block with <img src="/logo.png" class="h-10 w-auto" /> once logo is ready -->
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold text-xl font-serif" title="Logo placeholder">A</div>
            <div>
              <div class="font-bold text-sm leading-tight">AHALADA RAO.V &amp; ASSOCIATES</div>
              <div class="text-xs text-blue-200 font-medium">Company Secretaries</div>
            </div>
          </div>
          <p class="text-blue-100 text-sm leading-relaxed mb-6">
            Professional Company Secretarial, Corporate Compliance, and Legal Advisory Services. ICSI-qualified experts serving businesses across India from Hyderabad.
          </p>
          <!-- Membership badge -->
          <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2">
            <svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-xs font-semibold text-white">ICSI Member Firm</span>
          </div>
        </div>

        <!-- Quick links -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-widest text-amber-400 mb-5">Quick Links</h3>
          <ul class="space-y-2.5">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <span class="w-1 h-1 rounded-full bg-amber-400 group-hover:w-2 transition-all duration-200" />
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-widest text-amber-400 mb-5">Our Services</h3>
          <ul class="space-y-2.5">
            <li v-for="svc in footerServices" :key="svc.label">
              <NuxtLink
                :to="`/appointments?service=${encodeURIComponent(svc.appt)}`"
                class="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <span class="w-1 h-1 rounded-full bg-amber-400 group-hover:w-2 transition-all duration-200" />
                {{ svc.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-widest text-amber-400 mb-5">Contact Us</h3>
          <ul class="space-y-4">
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="text-sm text-blue-100 leading-relaxed">
                Flat No. 113, Sri Datta Sai Commercial Complex,<br>
                Opp. Sapthagiri Theatre, RTC Cross Roads,<br>
                Musheerabad, Hyderabad – 500020, Telangana
              </span>
            </li>
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <div class="text-sm">
                <a href="tel:04027623101" class="text-blue-100 hover:text-white transition-colors block">040-27623101</a>
                <a href="https://wa.me/917075927041" class="text-blue-100 hover:text-white transition-colors" target="_blank" rel="noopener">WhatsApp: 70759 27041</a>
              </div>
            </li>
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:mail@ahaladaroassociates.com" class="text-sm text-blue-100 hover:text-white transition-colors">
                mail@ahaladaroassociates.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ── Bottom bar ── -->
    <div class="border-t border-white/10">
      <div class="container-lg py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-blue-200">
        <p>© {{ year }} Ahalada Rao.V &amp; Associates. All rights reserved.</p>
        <p class="text-xs">
          Designed &amp; developed for professional excellence &nbsp;|&nbsp;
          <a href="mailto:mail@ahaladaroassociates.com" class="hover:text-white transition-colors">Contact</a>
        </p>
      </div>
    </div>
  </footer>
</template>
