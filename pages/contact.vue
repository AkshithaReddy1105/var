<script setup lang="ts">
useSeoMeta({
  title:       'Contact Us | Ahaladar Rao & Associates – Company Secretaries',
  description: 'Get in touch with Ahaladar Rao & Associates in Hyderabad. Call 040-27623101, WhatsApp 7075927041, or email mail@ahaladaroassociates.com.',
  ogTitle:     'Contact Ahaladar Rao & Associates',
  ogDescription:'Office at RTC Cross Roads, Musheerabad, Hyderabad. Phone: 040-27623101 | WhatsApp: 7075927041.',
})

const form = reactive({
  name:    '',
  email:   '',
  phone:   '',
  subject: '',
  message: '',
})
const loading = ref(false)
const status  = ref<'idle' | 'success' | 'error'>('idle')
const errorMsg = ref('')

async function submit() {
  loading.value = true
  status.value  = 'idle'
  try {
    const res = await $fetch('/api/contact', {
      method: 'POST',
      body:   { ...form },
    })
    status.value = 'success'
    Object.assign(form, { name:'', email:'', phone:'', subject:'', message:'' })
  } catch (e: any) {
    status.value = 'error'
    errorMsg.value = e?.data?.message ?? 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}

const contactInfo = [
  {
    icon: 'location',
    label: 'Office Address',
    lines: [
      'Flat No. 113, Sri Datta Sai Commercial Complex,',
      'Opp. Sapthagiri Theatre, Pillar No. 1096/1097,',
      'Beside Metro Station Steps (Axis Bank ATM side),',
      'RTC Cross Roads, Musheerabad,',
      'Hyderabad – 500020, Telangana',
    ],
  },
  {
    icon: 'phone',
    label: 'Phone & WhatsApp',
    lines: ['040-27623101', 'WhatsApp: 70759 27041'],
  },
  {
    icon: 'email',
    label: 'Email',
    lines: ['mail@ahaladaroassociates.com', 'ahaladarao.associates@gmail.com'],
  },
  {
    icon: 'clock',
    label: 'Office Hours',
    lines: ['Monday – Saturday: 10:00 AM – 7:30 PM IST', 'Sunday: Closed'],
  },
]
</script>

<template>
  <PageBanner
    title="Contact Us"
    description="Reach out to us for enquiries, consultations, or any compliance-related assistance."
    breadcrumb="Contact"
  />

  <!-- ── Contact blocks ── -->
  <section class="py-16 bg-white border-b border-gray-100">
    <div class="container-lg">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="info in contactInfo"
          :key="info.label"
          class="card p-6 border border-gray-100"
        >
          <!-- Icon -->
          <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
            <svg v-if="info.icon === 'location'" class="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <svg v-else-if="info.icon === 'phone'" class="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <svg v-else-if="info.icon === 'email'" class="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <svg v-else class="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="font-bold text-brand-navy text-sm mb-2">{{ info.label }}</h3>
          <div class="space-y-0.5">
            <p
              v-for="line in info.lines"
              :key="line"
              class="text-gray-500 text-xs leading-relaxed"
            >
              <template v-if="info.icon === 'phone' && line.startsWith('040')">
                <a :href="`tel:${line.replace(/\D/g,'')}`" class="hover:text-blue-700 transition-colors">{{ line }}</a>
              </template>
              <template v-else-if="info.icon === 'phone' && line.startsWith('WhatsApp')">
                <a href="https://wa.me/917075927041" target="_blank" rel="noopener" class="hover:text-blue-700 transition-colors">{{ line }}</a>
              </template>
              <template v-else-if="info.icon === 'email'">
                <a :href="`mailto:${line}`" class="hover:text-blue-700 transition-colors break-all">{{ line }}</a>
              </template>
              <template v-else>{{ line }}</template>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Form + Map ── -->
  <section class="section-pad bg-gray-50">
    <div class="container-lg">
      <div class="grid lg:grid-cols-2 gap-12">

        <!-- Contact Form -->
        <div>
          <span class="text-sm font-bold uppercase tracking-widest text-blue-600">Send a Message</span>
          <h2 class="section-heading mt-2">Get in Touch</h2>
          <span class="section-divider" />

          <!-- Success message -->
          <div v-if="status === 'success'" class="mb-6 bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 flex items-center gap-3">
            <svg class="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-medium">Your message has been sent! We'll get back to you within one business day.</span>
          </div>

          <!-- Error message -->
          <div v-if="status === 'error'" class="mb-6 bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 text-sm">
            {{ errorMsg }}
          </div>

          <form class="space-y-5" @submit.prevent="submit">
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="form-label" for="c-name">Full Name <span class="text-red-500">*</span></label>
                <input
                  id="c-name"
                  v-model="form.name"
                  type="text"
                  required
                  class="form-input"
                  placeholder="Your full name"
                >
              </div>
              <div>
                <label class="form-label" for="c-phone">Phone Number</label>
                <input
                  id="c-phone"
                  v-model="form.phone"
                  type="tel"
                  class="form-input"
                  placeholder="Your mobile number"
                >
              </div>
            </div>
            <div>
              <label class="form-label" for="c-email">Email Address <span class="text-red-500">*</span></label>
              <input
                id="c-email"
                v-model="form.email"
                type="email"
                required
                class="form-input"
                placeholder="your@email.com"
              >
            </div>
            <div>
              <label class="form-label" for="c-subject">Subject <span class="text-red-500">*</span></label>
              <input
                id="c-subject"
                v-model="form.subject"
                type="text"
                required
                class="form-input"
                placeholder="e.g., Company Incorporation Enquiry"
              >
            </div>
            <div>
              <label class="form-label" for="c-message">Message <span class="text-red-500">*</span></label>
              <textarea
                id="c-message"
                v-model="form.message"
                rows="5"
                required
                class="form-textarea"
                placeholder="Please describe your requirement in detail..."
              />
            </div>
            <button
              type="submit"
              :disabled="loading"
              class="btn-primary w-full justify-center"
            >
              <svg v-if="loading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              {{ loading ? 'Sending…' : 'Send Message' }}
            </button>
          </form>
        </div>

        <!-- Map + WhatsApp -->
        <div class="space-y-6">
          <div>
            <span class="text-sm font-bold uppercase tracking-widest text-blue-600">Find Us</span>
            <h2 class="section-heading mt-2">Our Location</h2>
            <span class="section-divider" />
          </div>

          <!-- Map embed -->
          <div class="rounded-2xl overflow-hidden shadow-brand border border-gray-200" style="height:320px">
            <iframe
              width="100%"
              height="100%"
              style="border:0"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=RTC+Cross+Roads+Musheerabad+Hyderabad+500020&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Ahaladar Rao & Associates Office Location"
            />
          </div>

          <!-- WhatsApp CTA -->
          <a
            href="https://wa.me/917075927041?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noopener"
            class="flex items-center gap-4 bg-green-50 border border-green-200 rounded-2xl p-5 hover:bg-green-100 transition-colors group"
          >
            <div class="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.141 1.535 5.879L.057 23.196a.75.75 0 00.92.92l5.317-1.478A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.707 9.707 0 01-5.026-1.399l-.36-.214-3.733 1.038 1.037-3.733-.214-.36A9.707 9.707 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
            </div>
            <div>
              <div class="font-bold text-gray-800 group-hover:text-green-700 transition-colors">Chat on WhatsApp</div>
              <div class="text-gray-500 text-sm">+91 70759 27041 — instant response</div>
            </div>
            <svg class="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>

          <!-- Book appointment -->
          <NuxtLink
            to="/appointments"
            class="flex items-center gap-4 bg-blue-50 border border-blue-200 rounded-2xl p-5 hover:bg-blue-100 transition-colors group"
          >
            <div class="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <div class="font-bold text-gray-800 group-hover:text-blue-700 transition-colors">Book an Appointment</div>
              <div class="text-gray-500 text-sm">Schedule a consultation at your convenience</div>
            </div>
            <svg class="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
