<script setup lang="ts">
useSeoMeta({
  title:       'Our Team | Ahaladar Rao & Associates – Company Secretaries',
  description: 'Meet the qualified Company Secretaries and professionals at Ahaladar Rao & Associates, Hyderabad.',
  ogTitle:     'Our Team | Ahaladar Rao & Associates',
})

// Team data — update names, designations and bio once provided
const team = [
  {
    name:        'CS Dr Ahalada Rao Vummenthala',
    designation: 'Practising Company Secretary',
    title:       'Founder Partner',
    qual:        'B.Sc, LLM, MFM, FCS, Ph.D',
    expertise:   ['Corporate Governance', 'NCLT & IBC', 'FEMA / RBI', 'M&A & Restructuring'],
    bio:         `With over 25 years of practising experience, the Founder leads the firm's corporate advisory and NCLT practice. Specialises in complex restructuring, insolvency proceedings, and regulatory compliance.`,
  },
  // Additional team members will be added here
]

const departments = [
  { label: 'Corporate Compliance', icon: 'document' },
  { label: 'Legal & NCLT',         icon: 'scale' },
  { label: 'Capital Markets',      icon: 'chart' },
  { label: 'FEMA & Regulatory',    icon: 'globe' },
]
</script>

<template>
  <PageBanner
    title="Our Team"
    description="Qualified professionals dedicated to delivering excellence in corporate compliance and legal advisory."
    breadcrumb="Team"
  />

  <!-- ── Leadership ── -->
  <section class="section-pad bg-white">
    <div class="container-lg">
      <div class="text-center mb-16">
        <span class="text-sm font-bold uppercase tracking-widest text-blue-600">Meet the Experts</span>
        <h2 class="section-heading mt-2">Our Leadership</h2>
        <span class="section-divider mx-auto" />
        <p class="section-subheading mx-auto">
          Our team of ICSI-qualified Company Secretaries and legal professionals brings deep expertise across all areas of corporate law and compliance.
        </p>
      </div>

      <!-- Founder card -->
      <div class="max-w-3xl mx-auto">
        <div class="card border border-gray-100 overflow-hidden">
          <div class="grid md:grid-cols-5">
            <!-- Photo placeholder
                 PLACEHOLDER: Replace with actual headshot.
                 Add photo to public/images/team/founder.jpg and replace with:
                   <img src="/images/team/founder.jpg" alt="CS Dr Ahalada Rao Vummenthala" class="w-full h-full object-cover" />
            -->
            <div class="md:col-span-2 gradient-brand min-h-64 flex items-center justify-center relative">
              <div class="text-center">
                <div class="w-28 h-28 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center mx-auto mb-4">
                  <svg class="w-14 h-14 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <p class="text-blue-200 text-xs font-medium">Professional Photo</p>
                <p class="text-blue-300/70 text-xs mt-1">Replace with actual headshot</p>
              </div>
              <!-- ✏️ Placeholder badge -->
              <span class="absolute top-4 left-4 text-xs font-semibold bg-amber-500/90 text-white px-2.5 py-1 rounded-full">
                Photo Placeholder
              </span>
            </div>

            <!-- Details -->
            <div class="md:col-span-3 p-8">
              <div class="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                ICSI Member · FCS
              </div>

              <h2 class="font-serif text-2xl font-bold text-brand-navy mb-1">{{ team[0].name }}</h2>
              <p class="text-gray-400 text-xs mb-2">{{ team[0].qual }}</p>
              <p class="text-blue-700 font-semibold text-sm mb-0.5">{{ team[0].designation }}</p>
              <p class="text-blue-700 font-semibold text-sm mb-4">{{ team[0].title }}</p>

              <p class="text-gray-600 text-sm leading-relaxed mb-5">{{ team[0].bio }}</p>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="e in team[0].expertise"
                  :key="e"
                  class="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                >
                  {{ e }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Full team coming soon ── -->
  <section class="py-20 bg-gray-50">
    <div class="container-lg">
      <div class="text-center mb-16">
        <span class="text-sm font-bold uppercase tracking-widest text-blue-600">Our Team</span>
        <h2 class="section-heading mt-2">Growing Team of Professionals</h2>
        <span class="section-divider mx-auto" />
        <p class="text-gray-500 max-w-xl mx-auto">
          Full team profiles are coming soon. Our firm comprises qualified Company Secretaries, legal associates, and compliance executives across the following practice areas.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="dept in departments"
          :key="dept.label"
          class="card p-8 border border-gray-100 text-center"
        >
          <div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-5">
            <svg v-if="dept.icon === 'document'" class="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <svg v-else-if="dept.icon === 'scale'" class="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
            </svg>
            <svg v-else-if="dept.icon === 'chart'" class="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <svg v-else class="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064"/>
            </svg>
          </div>
          <h3 class="font-bold text-brand-navy mb-2">{{ dept.label }}</h3>
          <p class="text-gray-400 text-sm">Team profiles coming soon</p>
        </div>
      </div>

      <!-- Join CTA -->
      <div class="mt-16 gradient-brand rounded-3xl p-10 text-center text-white">
        <h3 class="font-serif text-2xl font-bold mb-3">Join Our Team</h3>
        <p class="text-blue-100 mb-6 max-w-md mx-auto text-sm leading-relaxed">
          We are always looking for qualified and motivated Company Secretaries, CS trainees, and legal associates to join our growing practice.
        </p>
        <a
          href="mailto:mail@ahaladaroassociates.com?subject=Career%20Enquiry"
          class="btn-gold"
        >
          Send Your CV
        </a>
      </div>
    </div>
  </section>
</template>
