<script setup lang="ts">
useSeoMeta({
  title:       'About Us | Ahaladar Rao & Associates – Company Secretaries',
  description: 'Learn about Ahaladar Rao & Associates, a trusted ICSI-qualified Company Secretary firm in Hyderabad. Our story, mission, values and expertise.',
  ogTitle:     'About Ahaladar Rao & Associates',
  ogDescription:'ICSI-qualified Company Secretary firm in Hyderabad with expertise in corporate compliance, secretarial audit, NCLT and legal advisory services.',
})

const values = [
  {
    title: 'Integrity',
    desc:  'We uphold the highest professional and ethical standards in every engagement, ensuring transparent and honest advisory.',
  },
  {
    title: 'Expertise',
    desc:  'Our team continuously updates knowledge with the latest amendments, MCA circulars, and ICSI guidelines.',
  },
  {
    title: 'Client Focus',
    desc:  'We believe in building long-term partnerships. Client success and satisfaction is at the heart of everything we do.',
  },
  {
    title: 'Accountability',
    desc:  'We take full ownership of every filing, audit, and advisory we deliver — timely and without error.',
  },
]


const expertise = [
  'Companies Act, 2013 & Rules',
  'SEBI Regulations & Listing Obligations',
  'Insolvency & Bankruptcy Code, 2016',
  'FEMA & RBI Guidelines',
  'NCLT Proceedings',
  'Intellectual Property (Trademarks)',
  'LLP Act, 2008',
  'Competition Law',
]
</script>

<template>
  <PageBanner
    title="About Us"
    description="Trusted corporate compliance partners committed to excellence, integrity and client success."
    breadcrumb="About Us"
  />

  <!-- ── Firm Overview ── -->
  <section class="section-pad bg-white">
    <div class="container-lg">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span class="text-sm font-bold uppercase tracking-widest text-blue-600">Who We Are</span>
          <h2 class="section-heading mt-2">Ahalada Rao.V &amp; Associates</h2>
          <span class="section-divider" />
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>
              <strong class="text-brand-navy">Ahalada Rao.V &amp; Associates</strong> is a practising Company Secretary firm based in Hyderabad, Telangana, established with the mission to provide reliable, high-quality corporate compliance and legal advisory services to businesses of all sizes.
            </p>
            <p>
              Founded by qualified Company Secretaries registered with the <strong class="text-brand-navy">Institute of Company Secretaries of India (ICSI)</strong>, our firm has built a reputation for accuracy, timeliness, and integrity across all our engagements.
            </p>
            <p>
              From start-ups seeking incorporation guidance to large corporations requiring complex regulatory filings, we offer personalised solutions that are both legally sound and commercially practical.
            </p>
            <p>
              Our office is strategically located at RTC Cross Roads, Musheerabad, Hyderabad — easily accessible and well-connected, serving clients across Telangana, Andhra Pradesh, and pan-India through digital platforms.
            </p>
          </div>

          <div class="mt-8 flex flex-wrap gap-4">
            <NuxtLink to="/services" class="btn-primary">Our Services</NuxtLink>
            <NuxtLink to="/contact"  class="btn-outline">Get in Touch</NuxtLink>
          </div>
        </div>

        <!-- Right: ICSI badge + stats -->
        <div class="space-y-6">
          <div class="gradient-brand rounded-2xl p-8 text-white">
            <div class="flex items-start gap-4 mb-6">
              <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <div class="font-bold text-lg">ICSI Registered</div>
                <div class="text-blue-200 text-sm mt-1">Members of the Institute of Company Secretaries of India</div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="stat in [['25+','Years Experience'],['500+','Clients Served'],['20+','Service Areas'],['100%','Compliance Rate']]" :key="stat[0]" class="bg-white/10 rounded-xl p-4 text-center">
                <div class="text-2xl font-bold text-amber-400">{{ stat[0] }}</div>
                <div class="text-xs text-blue-200 mt-1">{{ stat[1] }}</div>
              </div>
            </div>
          </div>

          <!-- Areas of expertise -->
          <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 class="font-bold text-brand-navy mb-4">Areas of Expertise</h3>
            <div class="grid grid-cols-2 gap-2">
              <div
                v-for="item in expertise"
                :key="item"
                class="flex items-center gap-2 text-sm text-gray-600"
              >
                <svg class="w-4 h-4 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Office Photo placeholder ──────────────────────────────────────────────
       PLACEHOLDER: Replace this section with actual office photographs.
       Add image files to public/images/ and replace the div below with:
         <img src="/images/office.jpg" alt="Our Office" class="w-full h-full object-cover" />
  ────────────────────────────────────────────────────────────────────────── -->
  <section class="py-14 bg-gray-50 border-b border-gray-100">
    <div class="container-lg">
      <div class="flex items-center justify-between mb-8">
        <div>
          <span class="text-sm font-bold uppercase tracking-widest text-blue-600">Our Workspace</span>
          <h2 class="font-serif text-2xl font-bold text-brand-navy mt-1">Office &amp; Gallery</h2>
          <div class="w-12 h-0.5 bg-amber-500 rounded mt-3" />
        </div>
        <!-- ✏️ Remove this badge once real photos are added -->
        <span class="text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200 px-3 py-1.5 rounded-full">
          Photos coming soon
        </span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Main office photo -->
        <div class="sm:col-span-2 lg:col-span-2 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center" style="min-height:280px">
          <div class="text-center p-8">
            <svg class="w-16 h-16 text-blue-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <p class="text-blue-600 font-semibold text-sm">Office Exterior / Interior Photo</p>
            <p class="text-blue-400 text-xs mt-1">Replace with: <code class="bg-blue-100 px-1 rounded">public/images/office-main.jpg</code></p>
          </div>
        </div>

        <!-- Side photos -->
        <div class="flex flex-col gap-4">
          <div class="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center flex-1" style="min-height:130px">
            <div class="text-center p-4">
              <svg class="w-10 h-10 text-slate-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <p class="text-slate-500 text-xs font-medium">Reception / Meeting Room</p>
            </div>
          </div>
          <div class="rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center flex-1" style="min-height:130px">
            <div class="text-center p-4">
              <svg class="w-10 h-10 text-indigo-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"/>
              </svg>
              <p class="text-indigo-500 text-xs font-medium">Team Photo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Mission & Vision ── -->
  <section class="section-pad bg-gray-50">
    <div class="container-lg">
      <div class="text-center mb-16">
        <span class="text-sm font-bold uppercase tracking-widest text-blue-600">Our Direction</span>
        <h2 class="section-heading mt-2">Mission &amp; Vision</h2>
        <span class="section-divider mx-auto" />
      </div>
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div class="card p-8 border border-gray-100">
          <div class="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-5">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="font-serif text-xl font-bold text-brand-navy mb-3">Our Mission</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            To deliver expert, reliable, and cost-effective Company Secretarial and legal compliance services that empower businesses to operate with confidence, meet every regulatory obligation on time, and achieve their strategic objectives.
          </p>
        </div>
        <div class="card p-8 border border-gray-100">
          <div class="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-5">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </div>
          <h3 class="font-serif text-xl font-bold text-brand-navy mb-3">Our Vision</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            To be the most trusted and preferred Company Secretary firm in South India — recognised for uncompromising quality, ethical practice, and deep expertise in corporate law and governance, contributing to a well-compliant business ecosystem.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Core Values ── -->
  <section class="section-pad bg-white">
    <div class="container-lg">
      <div class="text-center mb-16">
        <span class="text-sm font-bold uppercase tracking-widest text-blue-600">What Drives Us</span>
        <h2 class="section-heading mt-2">Our Core Values</h2>
        <span class="section-divider mx-auto" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(v, i) in values"
          :key="v.title"
          class="card p-8 border border-gray-100 text-center"
        >
          <div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-5">
            <span class="text-blue-700 font-bold text-xl font-serif">{{ String(i + 1).padStart(2, '0') }}</span>
          </div>
          <h3 class="font-bold text-brand-navy text-lg mb-3">{{ v.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed">{{ v.desc }}</p>
        </div>
      </div>
    </div>
  </section>


  <!-- ── CTA ── -->
  <section class="py-20 bg-blue-700">
    <div class="container-lg text-center">
      <h2 class="font-serif text-3xl font-bold text-white mb-4">Work With a Team You Can Trust</h2>
      <p class="text-blue-100 mb-8 max-w-xl mx-auto">
        Let us handle your compliance while you focus on building your business.
      </p>
      <NuxtLink to="/contact" class="btn-secondary">
        Contact Us Today
      </NuxtLink>
    </div>
  </section>
</template>
