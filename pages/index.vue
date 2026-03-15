<script setup lang="ts">
useSeoMeta({
  title:           'Ahaladar Rao & Associates | Company Secretaries in Hyderabad',
  description:     'Expert Company Secretarial, Corporate Compliance, Secretarial Audit, NCLT, FEMA, and Legal Advisory services in Hyderabad. ICSI-qualified professionals.',
  ogTitle:         'Ahaladar Rao & Associates | Company Secretaries in Hyderabad',
  ogDescription:   'Trusted company secretarial and corporate compliance services. Annual ROC filings, secretarial audits, NCLT matters, FEMA compliance and more.',
  ogUrl:           'https://ahaladaroassociates.com',
  twitterCard:     'summary_large_image',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': ['ProfessionalService', 'LocalBusiness'],
      name: 'Ahalada Rao.V & Associates',
      description: 'ICSI-qualified Company Secretary firm offering corporate compliance, secretarial audit, NCLT, FEMA and advisory services in Hyderabad.',
      url: 'https://ahaladaroassociates.com',
      telephone: '+914027623101',
      email: 'mail@ahaladaroassociates.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Flat No. 113, Sri Datta Sai Commercial Complex, Opp. Sapthagiri Theatre, RTC Cross Roads, Musheerabad',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500020',
        addressCountry: 'IN',
      },
      openingHours: 'Mo-Sa 10:00-19:30',
      priceRange: '$$',
    }),
  }],
})

const featuredServices = [
  {
    icon: 'building',
    title: 'Company Incorporation',
    appt:  'Private Limited Company',
    desc:  'Seamless incorporation of Private Limited, Public Limited, OPC, Section 8 and LLP with complete regulatory filings.',
  },
  {
    icon: 'clipboard',
    title: 'Secretarial Audit',
    appt:  'Secretarial Audit (MR-3)',
    desc:  'Thorough Secretarial Audit (Form MR-3) ensuring complete corporate governance and statutory compliance.',
  },
  {
    icon: 'document',
    title: 'Annual ROC Compliances',
    appt:  'Annual ROC Filings',
    desc:  'Timely filing of MGT-7, AOC-4, DPT-3 and other annual statutory forms with the Registrar of Companies.',
  },
  {
    icon: 'scale',
    title: 'NCLT Matters',
    appt:  'NCLT Petitions & Applications',
    desc:  'Expert drafting and representation for petitions, appeals and proceedings before the National Company Law Tribunal.',
  },
  {
    icon: 'globe',
    title: 'FEMA / RBI Compliance',
    appt:  'FEMA & RBI Compliance',
    desc:  'Navigate complex foreign exchange regulations including FDI, ECB, ODI and RBI filings with expert guidance.',
  },
  {
    icon: 'shield',
    title: 'Corporate Governance',
    appt:  'Corporate Advisory',
    desc:  'Establish robust governance frameworks, policies, and board structures for sustainable business growth.',
  },
]

const stats = [
  { value: '25+',  label: 'Years of Experience' },
  { value: '500+', label: 'Clients Served' },
  { value: '20+',  label: 'Service Areas' },
  { value: '100%', label: 'Compliance Focus' },
]

const whyUs = [
  {
    title: 'ICSI Certified Professionals',
    desc:  'Our team comprises qualified Company Secretaries registered with the Institute of Company Secretaries of India.',
  },
  {
    title: 'Timely & Accurate Delivery',
    desc:  'We understand the critical nature of compliance deadlines and consistently deliver accurate filings on time.',
  },
  {
    title: 'Comprehensive Service Range',
    desc:  'From incorporation to winding up, we cover the entire lifecycle of corporate legal and compliance needs.',
  },
  {
    title: 'Client-Centric Approach',
    desc:  'Every engagement is personalised. We simplify complex legal requirements so you can focus on your business.',
  },
  {
    title: 'Digital-First Process',
    desc:  'Streamlined, paper-light processes using MCA21, TRACES, and other government portals for faster turnaround.',
  },
  {
    title: 'Pan-India Reach',
    desc:  'Though based in Hyderabad, we serve clients across India, handling multi-state compliances efficiently.',
  },
]

</script>

<template>
  <!-- ════════════════════════════════════════════════════════
       HERO
  ════════════════════════════════════════════════════════ -->
  <section class="relative min-h-screen flex items-center gradient-brand overflow-hidden">
    <!-- Decorative circles -->
    <div class="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-white/5 -translate-y-1/4 translate-x-1/3 pointer-events-none" />
    <div class="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3 pointer-events-none" />
    <div class="absolute top-16 left-1/4 w-3 h-3 rounded-full bg-amber-400/50" />
    <div class="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-blue-300/50" />

    <div class="container-lg relative z-10 pt-28 pb-16 md:pb-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <!-- Left: text -->
      <div class="animate-fade-up" style="animation-delay:0.1s">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span class="text-sm font-semibold text-white">ICSI Registered Company Secretary Firm</span>
        </div>

        <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Expert Company
          <span class="block text-amber-400">Secretary Services</span>
          in Hyderabad
        </h1>

        <p class="text-blue-100 text-lg leading-relaxed mb-10 max-w-xl">
          Comprehensive corporate compliance, secretarial audit, and legal advisory solutions.
          Your trusted partner for every regulatory requirement — handled with precision and integrity.
        </p>

        <div class="flex flex-col sm:flex-row flex-wrap gap-4">
          <NuxtLink to="/appointments" class="btn-gold justify-center sm:justify-start">
            Book a Free Consultation
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
          <NuxtLink to="/services" class="btn-secondary justify-center sm:justify-start">
            Explore Services
          </NuxtLink>
        </div>

        <!-- Trust indicators -->
        <div class="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-5">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="font-bold text-2xl text-white">{{ stat.value }}</div>
            <div class="text-xs text-blue-300 font-medium mt-0.5 leading-snug">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Right: card panel -->
      <div class="hidden lg:block animate-fade-in" style="animation-delay:0.3s">
        <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
          <div class="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-6">Our Expertise</div>
          <div class="space-y-4">
            <div
              v-for="item in ['Company Incorporation & LLP', 'Secretarial Audit (Form MR-3)', 'Annual ROC Compliances', 'NCLT & Insolvency Matters', 'FEMA / RBI / SEBI Compliance', 'Mergers & Acquisitions', 'Trademark Registration', 'Corporate Governance Advisory']"
              :key="item"
              class="flex items-center gap-3"
            >
              <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm text-white/90">{{ item }}</span>
            </div>
          </div>
          <div class="mt-8 pt-6 border-t border-white/20 flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div>
              <div class="text-xs text-blue-300">Call us directly</div>
              <a href="tel:04027623101" class="text-white font-bold hover:text-amber-400 transition-colors">040-27623101</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
      <svg class="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
  </section>

  <!-- ════════════════════════════════════════════════════════
       FEATURED SERVICES
  ════════════════════════════════════════════════════════ -->
  <section class="section-pad bg-gray-50">
    <div class="container-lg">
      <div class="text-center mb-16">
        <span class="text-sm font-bold uppercase tracking-widest text-blue-600">What We Do</span>
        <h2 class="section-heading mt-2">Comprehensive Secretarial &amp; Legal Services</h2>
        <span class="section-divider mx-auto" />
        <p class="section-subheading mx-auto">
          From company formation to complex regulatory matters, our ICSI-qualified team covers every aspect of corporate compliance.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(svc, i) in featuredServices"
          :key="svc.title"
          class="card p-8 group border border-gray-100 flex flex-col"
          :style="`animation-delay:${i * 0.1}s`"
        >
          <!-- Coloured top bar -->
          <div class="w-full h-1 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mb-6" />

          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-700 flex items-center justify-center mb-5 transition-colors duration-300">
            <!-- Building icon -->
            <svg v-if="svc.icon === 'building'" class="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <!-- Clipboard icon -->
            <svg v-else-if="svc.icon === 'clipboard'" class="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>
            <!-- Document icon -->
            <svg v-else-if="svc.icon === 'document'" class="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <!-- Scale icon -->
            <svg v-else-if="svc.icon === 'scale'" class="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
            </svg>
            <!-- Globe icon -->
            <svg v-else-if="svc.icon === 'globe'" class="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <!-- Shield icon -->
            <svg v-else class="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>

          <h3 class="font-bold text-brand-navy text-lg mb-3">{{ svc.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-5">{{ svc.desc }}</p>
          <NuxtLink
            :to="`/appointments?service=${encodeURIComponent(svc.appt)}`"
            class="text-sm font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1 transition-colors mt-auto"
          >
            Enquire
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>
      </div>

      <div class="text-center mt-12">
        <NuxtLink to="/services" class="btn-outline">
          View All Services
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- ════════════════════════════════════════════════════════
       WHY CHOOSE US
  ════════════════════════════════════════════════════════ -->
  <section class="section-pad bg-white">
    <div class="container-lg">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <!-- Left: illustration panel -->
        <div class="relative">
          <div class="gradient-brand rounded-3xl p-10 text-white">
            <div class="text-sm font-bold uppercase tracking-widest text-amber-400 mb-6">Our Promise</div>
            <h2 class="font-serif text-3xl font-bold mb-6 leading-tight">
              Protecting Your Business Through Expert Compliance
            </h2>
            <p class="text-blue-100 leading-relaxed mb-8">
              Non-compliance carries severe penalties. Our proactive approach ensures your company never misses a deadline or regulatory requirement — giving you confidence to grow.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="stat in stats" :key="stat.label" class="bg-white/10 rounded-xl p-4 text-center">
                <div class="font-bold text-2xl text-amber-400">{{ stat.value }}</div>
                <div class="text-xs text-blue-200 mt-1">{{ stat.label }}</div>
              </div>
            </div>
          </div>
          <!-- Decorative dot (desktop only — would bleed off-screen on mobile) -->
          <div class="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400 rounded-2xl -z-10 opacity-30" />
        </div>

        <!-- Right: reasons list -->
        <div>
          <span class="text-sm font-bold uppercase tracking-widest text-blue-600">Why Choose Us</span>
          <h2 class="section-heading mt-2">Your Compliance, Our Commitment</h2>
          <span class="section-divider" />

          <div class="space-y-6">
            <div
              v-for="(item, i) in whyUs"
              :key="item.title"
              class="flex gap-4"
            >
              <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-blue-700 font-bold text-sm">{{ String(i + 1).padStart(2, '0') }}</span>
              </div>
              <div>
                <h3 class="font-bold text-brand-navy mb-1">{{ item.title }}</h3>
                <p class="text-gray-500 text-sm leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ════════════════════════════════════════════════════════
       CTA BANNER
  ════════════════════════════════════════════════════════ -->
  <section class="py-20 bg-blue-700 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
      <div class="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white -translate-x-1/3 translate-y-1/3" />
    </div>
    <div class="container-lg relative text-center">
      <h2 class="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to Ensure Your Business Stays Compliant?
      </h2>
      <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
        Our expert team is ready to guide you through every regulatory requirement with accuracy, speed, and professionalism.
      </p>
      <div class="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
        <NuxtLink to="/appointments" class="btn-gold w-full sm:w-auto justify-center">
          Schedule a Free Consultation
        </NuxtLink>
        <a href="https://wa.me/917075927041" target="_blank" rel="noopener" class="btn-secondary w-full sm:w-auto justify-center">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.141 1.535 5.879L.057 23.196a.75.75 0 00.92.92l5.317-1.478A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.707 9.707 0 01-5.026-1.399l-.36-.214-3.733 1.038 1.037-3.733-.214-.36A9.707 9.707 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
          </svg>
          WhatsApp Us
        </a>
      </div>
    </div>
  </section>

</template>
