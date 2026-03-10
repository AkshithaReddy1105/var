<script setup lang="ts">
useSeoMeta({
  title:       'Book an Appointment | Ahaladar Rao & Associates',
  description: 'Schedule a consultation with our Company Secretaries. Choose your service, pick a date and time slot.',
  ogTitle:     'Book a Consultation – Ahaladar Rao & Associates',
})

// ── Grouped service options (mirrors services page exactly) ──────────────────
const groupedServices = [
  {
    label: 'Incorporation & Formation',
    services: [
      'Private Limited Company',
      'Public Limited Company',
      'One Person Company (OPC)',
      'Section 8 Company',
      'LLP Formation',
      'Partnership Firm',
    ],
  },
  {
    label: 'Annual Compliance',
    services: [
      'Annual ROC Filings',
      'Annual General Meeting',
      'Board Meeting Secretarial',
      'Statutory Registers',
      'DPT-3 / MSME Filing',
      'DIR-3 KYC',
    ],
  },
  {
    label: 'Secretarial Audit & Certification',
    services: [
      'Secretarial Audit (MR-3)',
      'Annual Secretarial Compliance',
      'Due Diligence',
      'Compliance Certificates',
    ],
  },
  {
    label: 'Capital & Securities',
    services: [
      'Share Transfer & Transmission',
      'Issue of Shares (Rights/Bonus)',
      'ESOP Management',
      'Demat / Depository',
      'Buyback of Shares',
    ],
  },
  {
    label: 'Regulatory Compliance',
    services: [
      'FEMA & RBI Compliance',
      'SEBI / Listed Company',
      'IPO & Issue Advisory',
      'CSR Compliance',
    ],
  },
  {
    label: 'Legal & NCLT',
    services: [
      'NCLT Petitions & Applications',
      'Insolvency & Bankruptcy (IBC)',
      'Oppression & Mismanagement',
      'Reduction of Share Capital',
    ],
  },
  {
    label: 'Restructuring',
    services: [
      'Mergers & Amalgamations',
      'Demergers & Slump Sale',
      'Change in Constitution',
      'Winding Up & Strike Off',
    ],
  },
  {
    label: 'IP & Advisory',
    services: [
      'Trademark Registration',
      'Copyright Registration',
      'Legal Documentation & Drafting',
      'Corporate Advisory',
    ],
  },
  {
    label: 'Other',
    services: ['Other (describe in message)'],
  },
]

const allServices = computed(() => groupedServices.flatMap(g => g.services))

// ── Form state ───────────────────────────────────────────────────────────────
const form = reactive({
  name:    '',
  email:   '',
  phone:   '',
  company: '',
  service: '',
  date:    '',
  time:    '',
  message: '',
})

// ── Custom service dropdown ──────────────────────────────────────────────────
const dropdownOpen = ref(false)
const dropdownEl   = ref<HTMLElement>()
onClickOutside(dropdownEl, () => { dropdownOpen.value = false })
useEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape') dropdownOpen.value = false
})
function selectService(svc: string) {
  form.service   = svc
  dropdownOpen.value = false
}

// ── Auto-fill from URL query param ───────────────────────────────────────────
const route = useRoute()
onMounted(() => {
  const param = (route.query.service as string | undefined)?.trim()
  if (!param) return
  // Exact match
  const exact = allServices.value.find(s => s.toLowerCase() === param.toLowerCase())
  if (exact) { form.service = exact; return }
  // Partial match (e.g. "Secretarial Audit" → "Secretarial Audit (MR-3)")
  const partial = allServices.value.find(s =>
    s.toLowerCase().startsWith(param.toLowerCase()) ||
    param.toLowerCase().startsWith(s.toLowerCase().replace(/\s*\(.*\)$/, '').trim().toLowerCase())
  )
  if (partial) { form.service = partial; return }
  // Fallback
  form.service  = 'Other (describe in message)'
  form.message  = `Enquiry regarding: ${param}\n\n`
})

// ── Time slots ───────────────────────────────────────────────────────────────
const morningSlots   = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM']
const afternoonSlots = ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM']

// ── Submission ───────────────────────────────────────────────────────────────
const loading   = ref(false)
const status    = ref<'idle' | 'success' | 'error'>('idle')
const errorMsg  = ref('')

const minDate = computed(() => {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
})

async function submit() {
  if (!form.service) { errorMsg.value = 'Please select a service.'; status.value = 'error'; return }
  if (!form.time)    { errorMsg.value = 'Please select a preferred time slot.'; status.value = 'error'; return }
  loading.value = true
  status.value  = 'idle'
  try {
    await $fetch('/api/appointment', { method: 'POST', body: { ...form } })
    status.value = 'success'
    Object.assign(form, { name:'', email:'', phone:'', company:'', service:'', date:'', time:'', message:'' })
  } catch (e: any) {
    status.value  = 'error'
    errorMsg.value = e?.data?.message ?? 'Something went wrong. Please call us directly on 040-27623101.'
  } finally {
    loading.value = false
  }
}

const steps = [
  { title: 'Fill the Form',  desc: 'Choose your service and share your contact details and preferred schedule.' },
  { title: 'Confirmation',   desc: 'We review and confirm your slot within 2 business hours by call or email.' },
  { title: 'Consultation',   desc: 'Meet our CS expert in-person at our Hyderabad office or via video call.' },
]
</script>

<template>
  <PageBanner
    title="Book an Appointment"
    description="Schedule a consultation at your convenience. In-person and online options available."
    breadcrumb="Appointments"
  />

  <!-- ── How it works ── -->
  <section class="py-14 bg-white border-b border-gray-100">
    <div class="container-lg">
      <div class="text-center mb-10">
        <span class="text-sm font-bold uppercase tracking-widest text-blue-600">Simple Process</span>
        <h2 class="section-heading mt-2">How It Works</h2>
        <span class="section-divider mx-auto" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div v-for="(step, i) in steps" :key="step.title" class="relative">
          <!-- Connector line -->
          <div v-if="i < 2" class="hidden sm:block absolute top-7 left-1/2 w-full h-0.5 bg-blue-100 z-0" />
          <div class="text-center relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-blue-700 text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-md">
              {{ i + 1 }}
            </div>
            <h3 class="font-bold text-brand-navy mb-1.5">{{ step.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Booking form ── -->
  <section class="section-pad bg-gray-50">
    <div class="container-lg">
      <div class="max-w-3xl mx-auto">

        <div class="card border border-gray-100 overflow-hidden">

          <!-- Card header bar -->
          <div class="gradient-brand px-8 py-6">
            <h2 class="font-serif text-xl font-bold text-white">Schedule Your Appointment</h2>
            <p class="text-blue-200 text-sm mt-1">Fields marked <span class="text-amber-400 font-bold">*</span> are required.</p>
          </div>

          <div class="p-6 md:p-10">

            <!-- Success state -->
            <div v-if="status === 'success'" class="text-center py-8">
              <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="font-bold text-brand-navy text-xl mb-2">Request Received!</h3>
              <p class="text-gray-500 text-sm max-w-sm mx-auto mb-6">
                We will confirm your appointment within 2 business hours via phone or email.
                For urgent matters, call <a href="tel:04027623101" class="text-blue-700 font-semibold">040-27623101</a>.
              </p>
              <button
                class="btn-outline text-sm"
                @click="status = 'idle'"
              >
                Book Another Appointment
              </button>
            </div>

            <form v-else class="space-y-8" @submit.prevent="submit">

              <!-- Error banner -->
              <div v-if="status === 'error'" class="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm flex items-center gap-3">
                <svg class="w-5 h-5 flex-shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                {{ errorMsg }}
              </div>

              <!-- ── Section 1: Personal Details ── -->
              <div>
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <h3 class="font-bold text-brand-navy">Personal Details</h3>
                </div>

                <div class="grid sm:grid-cols-2 gap-4">
                  <!-- Name -->
                  <div>
                    <label class="form-label" for="a-name">Full Name <span class="text-red-500">*</span></label>
                    <div class="relative">
                      <span class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                      </span>
                      <input id="a-name" v-model="form.name" type="text" required class="form-input pl-11" placeholder="Your full name">
                    </div>
                  </div>
                  <!-- Phone -->
                  <div>
                    <label class="form-label" for="a-phone">Mobile Number <span class="text-red-500">*</span></label>
                    <div class="relative">
                      <span class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </span>
                      <input id="a-phone" v-model="form.phone" type="tel" required class="form-input pl-11" placeholder="+91 XXXXX XXXXX">
                    </div>
                  </div>
                  <!-- Email -->
                  <div>
                    <label class="form-label" for="a-email">Email Address <span class="text-red-500">*</span></label>
                    <div class="relative">
                      <span class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </span>
                      <input id="a-email" v-model="form.email" type="email" required class="form-input pl-11" placeholder="your@email.com">
                    </div>
                  </div>
                  <!-- Company -->
                  <div>
                    <label class="form-label" for="a-company">Company / Firm Name</label>
                    <div class="relative">
                      <span class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                      </span>
                      <input id="a-company" v-model="form.company" type="text" class="form-input pl-11" placeholder="Your company (optional)">
                    </div>
                  </div>
                </div>
              </div>

              <!-- ── Section 2: Service ── -->
              <div>
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <h3 class="font-bold text-brand-navy">Service Required <span class="text-red-500">*</span></h3>
                </div>

                <!-- Custom dropdown -->
                <div ref="dropdownEl" class="relative">
                  <button
                    type="button"
                    class="form-input flex items-center justify-between w-full text-left cursor-pointer select-none"
                    :class="dropdownOpen ? 'ring-2 ring-blue-500 border-transparent' : ''"
                    @click="dropdownOpen = !dropdownOpen"
                  >
                    <span :class="form.service ? 'text-gray-800' : 'text-gray-400'">
                      {{ form.service || 'Select a service…' }}
                    </span>
                    <svg
                      class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ml-2"
                      :class="{ 'rotate-180': dropdownOpen }"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>

                  <Transition name="dd">
                    <div
                      v-if="dropdownOpen"
                      class="absolute z-50 top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
                      style="max-height:300px;overflow-y:auto"
                    >
                      <div v-for="group in groupedServices" :key="group.label">
                        <!-- Group header -->
                        <div class="sticky top-0 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border-b border-blue-100">
                          {{ group.label }}
                        </div>
                        <!-- Options -->
                        <button
                          v-for="svc in group.services"
                          :key="svc"
                          type="button"
                          class="w-full text-left px-5 py-2.5 text-sm flex items-center gap-3 transition-colors"
                          :class="form.service === svc
                            ? 'bg-blue-50 text-blue-700 font-semibold'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-700'"
                          @click="selectService(svc)"
                        >
                          <svg
                            v-if="form.service === svc"
                            class="w-4 h-4 text-blue-600 flex-shrink-0"
                            fill="currentColor" viewBox="0 0 20 20"
                          >
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                          </svg>
                          <span v-else class="w-4 flex-shrink-0" />
                          {{ svc }}
                        </button>
                      </div>
                    </div>
                  </Transition>
                </div>

                <!-- Selected service pill (visible confirmation) -->
                <div v-if="form.service" class="mt-2 flex items-center gap-2">
                  <span class="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200">
                    <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    {{ form.service }}
                    <button type="button" @click="form.service = ''" class="ml-1 text-blue-400 hover:text-blue-700">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </span>
                </div>
              </div>

              <!-- ── Section 3: Schedule ── -->
              <div>
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <h3 class="font-bold text-brand-navy">Preferred Schedule <span class="text-red-500">*</span></h3>
                </div>

                <!-- Date picker -->
                <div class="mb-5">
                  <label class="form-label" for="a-date">Preferred Date <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <span class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                    </span>
                    <input id="a-date" v-model="form.date" type="date" required :min="minDate" class="form-input pl-11">
                  </div>
                </div>

                <!-- Time slot grid -->
                <div>
                  <label class="form-label">Preferred Time <span class="text-red-500">*</span></label>

                  <div class="mb-3">
                    <p class="text-xs text-gray-400 font-medium uppercase tracking-widest mb-2">Morning</p>
                    <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      <button
                        v-for="t in morningSlots"
                        :key="t"
                        type="button"
                        class="py-2 text-xs sm:text-sm font-semibold rounded-lg border-2 transition-all duration-150"
                        :class="form.time === t
                          ? 'border-blue-700 bg-blue-700 text-white shadow-md'
                          : 'border-gray-200 text-gray-600 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700'"
                        @click="form.time = t"
                      >
                        {{ t }}
                      </button>
                    </div>
                  </div>

                  <div>
                    <p class="text-xs text-gray-400 font-medium uppercase tracking-widest mb-2">Afternoon</p>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      <button
                        v-for="t in afternoonSlots"
                        :key="t"
                        type="button"
                        class="py-2 text-xs sm:text-sm font-semibold rounded-lg border-2 transition-all duration-150"
                        :class="form.time === t
                          ? 'border-blue-700 bg-blue-700 text-white shadow-md'
                          : 'border-gray-200 text-gray-600 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700'"
                        @click="form.time = t"
                      >
                        {{ t }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ── Section 4: Notes ── -->
              <div>
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-8 h-8 rounded-lg bg-gray-200 text-gray-500 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                  <h3 class="font-bold text-brand-navy">Additional Notes <span class="text-gray-400 font-normal text-sm">(optional)</span></h3>
                </div>
                <textarea
                  v-model="form.message"
                  rows="4"
                  class="form-textarea"
                  placeholder="Briefly describe your matter or any specific questions you have…"
                />
              </div>

              <!-- Disclaimer + Submit -->
              <div class="space-y-4 pt-2 border-t border-gray-100">
                <p class="text-xs text-gray-400 leading-relaxed">
                  By submitting this form you consent to Ahaladar Rao &amp; Associates contacting you regarding your appointment. Your information will not be shared with third parties.
                </p>
                <button
                  type="submit"
                  :disabled="loading"
                  class="btn-primary w-full justify-center py-4 text-base"
                >
                  <svg v-if="loading" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  {{ loading ? 'Submitting…' : 'Request Appointment' }}
                </button>
              </div>

            </form>
          </div>
        </div>

        <!-- Quick contact strip -->
        <div class="mt-6 grid sm:grid-cols-2 gap-4">
          <a href="tel:04027623101" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors group">
            <div class="w-10 h-10 bg-blue-50 group-hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
              <svg class="w-5 h-5 text-blue-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div>
              <div class="text-xs text-gray-400">Call directly</div>
              <div class="font-bold text-brand-navy text-sm">040-27623101</div>
            </div>
          </a>
          <a href="https://wa.me/917075927041?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener" class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 hover:bg-green-50 transition-colors group">
            <div class="w-10 h-10 bg-green-50 group-hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
              <svg class="w-5 h-5 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.141 1.535 5.879L.057 23.196a.75.75 0 00.92.92l5.317-1.478A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.707 9.707 0 01-5.026-1.399l-.36-.214-3.733 1.038 1.037-3.733-.214-.36A9.707 9.707 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
            </div>
            <div>
              <div class="text-xs text-gray-400">WhatsApp</div>
              <div class="font-bold text-brand-navy text-sm">+91 70759 27041</div>
            </div>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Dropdown slide-in */
.dd-enter-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.dd-leave-active { transition: opacity 0.1s  ease, transform 0.1s  ease; }
.dd-enter-from,
.dd-leave-to     { opacity: 0; transform: translateY(-6px) scaleY(0.97); }
</style>
