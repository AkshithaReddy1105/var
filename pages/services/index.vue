<script setup lang="ts">
useSeoMeta({
  title:       'Our Services | Ahaladar Rao & Associates – Company Secretaries',
  description: 'Complete range of Company Secretary services: Company Incorporation, Secretarial Audit, Annual ROC Compliance, NCLT, FEMA, Mergers & Acquisitions, Trademark, and more.',
  ogTitle:     'Company Secretary Services – Ahaladar Rao & Associates',
  ogDescription:'PCS services covering company formation, compliance, governance, NCLT, FEMA, insolvency, IPR and corporate advisory in Hyderabad.',
})

interface Service {
  title: string
  desc:  string
  tag:   string
}

interface Category {
  label:    string
  icon:     string
  services: Service[]
}

const categories: Category[] = [
  {
    label: 'Formation & Incorporation',
    icon:  'building',
    services: [
      { title: 'Private Limited Company', tag: 'INC-7/SPICe+', desc: 'End-to-end incorporation of a Private Limited Company including name reservation, DIN, DSC, MOA/AOA drafting, and COI.' },
      { title: 'One Person Company (OPC)', tag: 'OPC', desc: 'Incorporation of OPC with complete documentation and post-incorporation compliance guidance.' },
      { title: 'Public Limited Company',  tag: 'PLC', desc: 'Incorporation of Public Limited Companies with compliance frameworks for large enterprises.' },
      { title: 'Section 8 Company',       tag: 'NGO/NPO', desc: 'Registration of non-profit companies under Section 8 of the Companies Act for charitable purposes.' },
      { title: 'LLP Formation',           tag: 'LLP Act 2008', desc: 'Limited Liability Partnership registration with LLP Agreement drafting and Designated Partner appointment.' },
      { title: 'Partnership Firm',        tag: 'Partnership', desc: 'Registration and documentation of traditional partnership firms with comprehensive deed drafting.' },
    ],
  },
  {
    label: 'Annual Compliance',
    icon:  'calendar',
    services: [
      { title: 'Annual ROC Filings',          tag: 'MGT-7 / AOC-4', desc: 'Timely filing of Annual Return (MGT-7), Financial Statements (AOC-4), and other mandatory annual forms.' },
      { title: 'Annual General Meeting',      tag: 'AGM', desc: 'Complete AGM management — notices, agenda, resolutions, minutes, and post-AGM compliance.' },
      { title: 'Board Meeting Secretarial',   tag: 'Board Meetings', desc: 'Preparation of notices, agenda, presentations, minutes, and compliance certificates for Board Meetings.' },
      { title: 'Statutory Registers',         tag: 'MBP Series', desc: 'Maintenance and updating of all statutory registers including Register of Members, Directors, Charges, and Contracts.' },
      { title: 'DPT-3 / MSME Filing',        tag: 'Annual Forms', desc: 'Filing of DPT-3 (deposits), MSME-1, and other periodical forms with the Registrar of Companies.' },
      { title: 'DIR-3 KYC',                   tag: 'Directors', desc: 'Annual KYC compliance for all Directors to maintain active DIN status, preventing deactivation.' },
    ],
  },
  {
    label: 'Secretarial Audit & Certification',
    icon:  'clipboard',
    services: [
      { title: 'Secretarial Audit (MR-3)',    tag: 'Section 204', desc: 'Mandatory Secretarial Audit for listed companies and large unlisted companies — comprehensive review of statutory compliance.' },
      { title: 'Annual Secretarial Compliance', tag: 'SEBI / LODR', desc: 'Annual Secretarial Compliance Report for listed entities under SEBI (LODR) Regulations, 2015.' },
      { title: 'Due Diligence',               tag: 'M&A', desc: 'Comprehensive legal due diligence for acquisitions, mergers, funding rounds, and corporate transactions.' },
      { title: 'Compliance Certificates',     tag: 'MCA / Various', desc: 'Issue of various compliance certificates including PCS certificates for bank filings, loan applications, and audits.' },
    ],
  },
  {
    label: 'Share Capital & Securities',
    icon:  'chart',
    services: [
      { title: 'Share Transfer & Transmission', tag: 'SH-4', desc: 'Processing of share transfers, transmissions, and updating the Register of Members post-transfer.' },
      { title: 'Issue of Shares (Rights/Bonus)', tag: 'PAS-3', desc: 'Private placement, rights issue, bonus issue — complete process including board/general meeting compliance.' },
      { title: 'ESOP Management',              tag: 'Employee Stock', desc: 'Drafting ESOP schemes, trust setup, compliance with Section 62, and periodic ESOP reporting.' },
      { title: 'Demat / Depository',           tag: 'NSDL / CDSL', desc: 'Coordination with NSDL/CDSL for demat of shares, Tripartite Agreement, and depository compliance.' },
      { title: 'Buyback of Shares',            tag: 'Section 68', desc: 'Complete buyback compliance including tender offer, open market buyback, and post-buyback filings.' },
    ],
  },
  {
    label: 'Regulatory Compliance',
    icon:  'globe',
    services: [
      { title: 'FEMA & RBI Compliance',        tag: 'FDI / ECB', desc: 'FDI reporting (FC-GPR, FC-TRS), ECB filings, ODI compliance, and RBI returns.' },
      { title: 'SEBI / Listed Company',         tag: 'LODR / PIT', desc: 'Insider Trading Policy, LODR quarterly filings, shareholding pattern, and stock exchange intimations.' },
      { title: 'IPO & Issue Advisory',          tag: 'SEBI ICDR', desc: 'Pre-IPO secretarial work, offer documents review, DRHP assistance, and post-IPO annual compliance.' },
      { title: 'CSR Compliance',               tag: 'Section 135', desc: 'CSR policy drafting, committee formation, annual CSR reporting (CSR-2), and expenditure advisory.' },
    ],
  },
  {
    label: 'NCLT / Legal Proceedings',
    icon:  'scale',
    services: [
      { title: 'NCLT Petitions & Applications', tag: 'NCLT', desc: 'Drafting and filing of petitions, applications, and replies before NCLT/NCLAT on company law matters.' },
      { title: 'Insolvency & Bankruptcy (IBC)', tag: 'IBC 2016', desc: 'Advisory and compliance support for Corporate Insolvency Resolution Process (CIRP) and Liquidation.' },
      { title: 'Oppression & Mismanagement',   tag: 'Section 241', desc: 'Filing of petitions for oppression and mismanagement of company affairs before NCLT.' },
      { title: 'Reduction of Share Capital',   tag: 'Section 66', desc: 'Complete process for reduction of share capital — NCLT petition, SEBI/creditor NOC, and COI amendment.' },
    ],
  },
  {
    label: 'Mergers, Restructuring & Advisory',
    icon:  'arrows',
    services: [
      { title: 'Mergers & Amalgamations',       tag: 'Section 230-232', desc: 'NCLT scheme of merger/amalgamation — notices, reports, approvals, and ROC filings.' },
      { title: 'Demergers & Slump Sale',        tag: 'Restructuring', desc: 'Structuring demergers, slump sales, and business transfers with legal documentation and NCLT filing.' },
      { title: 'Change in Constitution',        tag: 'MOA / AOA', desc: 'Alteration of Memorandum and Articles of Association including name, objects, registered office, and authorised capital.' },
      { title: 'Winding Up & Strike Off',       tag: 'Section 248/272', desc: 'Voluntary winding up, STK-2 (strike off), and compulsory winding up proceedings before NCLT.' },
    ],
  },
  {
    label: 'Intellectual Property & Drafting',
    icon:  'lightbulb',
    services: [
      { title: 'Trademark Registration',        tag: 'TM-A', desc: 'Trademark search, filing, prosecution, and objection responses for brand protection across all classes.' },
      { title: 'Copyright Registration',        tag: 'Copyright Act', desc: 'Registration of copyright for literary, artistic, and digital works.' },
      { title: 'Legal Documentation & Drafting',tag: 'Agreements', desc: 'Drafting of SHA, SPA, JV Agreements, NDAs, employment contracts, and commercial agreements.' },
      { title: 'Corporate Advisory',            tag: 'Advisory', desc: 'Strategic corporate governance advice, board composition guidance, and succession planning.' },
    ],
  },
]
</script>

<template>
  <PageBanner
    title="Our Services"
    description="Comprehensive Company Secretarial, Legal Compliance and Corporate Advisory services for businesses at every stage."
    breadcrumb="Services"
  />

  <!-- ── Introduction ── -->
  <section class="py-16 bg-white border-b border-gray-100">
    <div class="container-lg">
      <div class="max-w-3xl mx-auto text-center">
        <p class="text-gray-600 leading-relaxed text-lg">
          As a Practising Company Secretary (PCS) firm, we offer a full spectrum of services under the Companies Act, SEBI regulations, FEMA, IBC, and allied laws. Our expertise ensures your business remains compliant at every stage of its lifecycle.
        </p>
      </div>
    </div>
  </section>

  <!-- ── Categories ── -->
  <section class="py-16 bg-gray-50">
    <div class="container-lg">

      <!-- Quick nav pills -->
      <div class="flex flex-wrap gap-3 justify-center mb-16">
        <a
          v-for="cat in categories"
          :key="cat.label"
          :href="`#${cat.label.toLowerCase().replace(/[^a-z]+/g,'-')}`"
          class="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-200 shadow-sm"
        >
          {{ cat.label }}
        </a>
      </div>

      <div
        v-for="cat in categories"
        :id="cat.label.toLowerCase().replace(/[^a-z]+/g,'-')"
        :key="cat.label"
        class="mb-20 scroll-mt-24"
      >
        <!-- Category heading -->
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
            <!-- Dynamic icons -->
            <svg v-if="cat.icon === 'building'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <svg v-else-if="cat.icon === 'calendar'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <svg v-else-if="cat.icon === 'clipboard'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>
            <svg v-else-if="cat.icon === 'chart'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <svg v-else-if="cat.icon === 'globe'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
            </svg>
            <svg v-else-if="cat.icon === 'scale'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
            </svg>
            <svg v-else-if="cat.icon === 'arrows'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
            </svg>
            <svg v-else class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <div>
            <h2 class="font-serif text-2xl font-bold text-brand-navy">{{ cat.label }}</h2>
            <div class="w-12 h-0.5 bg-amber-500 mt-2 rounded" />
          </div>
        </div>

        <!-- Services grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="svc in cat.services"
            :key="svc.title"
            class="card bg-white p-6 border border-gray-100 flex flex-col gap-3"
          >
            <div class="flex items-start justify-between gap-3">
              <h3 class="font-bold text-brand-navy text-base leading-snug">{{ svc.title }}</h3>
              <span class="flex-shrink-0 text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">{{ svc.tag }}</span>
            </div>
            <p class="text-gray-500 text-sm leading-relaxed flex-1">{{ svc.desc }}</p>
            <NuxtLink
              :to="`/appointments?service=${encodeURIComponent(svc.title)}`"
              class="text-sm font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1 transition-colors mt-1"
            >
              Book Appointment
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Process ── -->
  <section class="section-pad bg-white">
    <div class="container-lg">
      <div class="text-center mb-16">
        <span class="text-sm font-bold uppercase tracking-widest text-blue-600">How We Work</span>
        <h2 class="section-heading mt-2">Our Engagement Process</h2>
        <span class="section-divider mx-auto" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(step, i) in [
            { title: 'Initial Consultation', desc: 'We discuss your requirements, understand your business, and identify the compliance obligations applicable to you.' },
            { title: 'Proposal & Engagement', desc: 'A detailed proposal is shared covering scope of work, timelines, and fees. On acceptance, engagement formally begins.' },
            { title: 'Execution & Filing', desc: 'Our team prepares documents, coordinates approvals, and files with MCA / NCLT / SEBI / FEMA portals within deadlines.' },
            { title: 'Review & Reporting', desc: 'Compliance reports, acknowledgements, and status updates are shared with you in a clear, structured format.' },
          ]"
          :key="step.title"
          class="relative"
        >
          <!-- Arrow connector (not last) -->
          <div
            v-if="i < 3"
            class="hidden lg:block absolute top-8 left-full w-6 z-10 text-blue-200"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>

          <div class="card p-7 border border-gray-100 h-full">
            <div class="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center font-bold text-lg mb-5">
              {{ i + 1 }}
            </div>
            <h3 class="font-bold text-brand-navy mb-2">{{ step.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── CTA ── -->
  <section class="py-20 gradient-brand">
    <div class="container-lg text-center">
      <h2 class="font-serif text-3xl font-bold text-white mb-4">
        Need a Specific Service? Let's Talk.
      </h2>
      <p class="text-blue-100 mb-8 max-w-xl mx-auto">
        Can't find what you're looking for? Contact us and we'll customise a solution for your requirements.
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <NuxtLink to="/appointments" class="btn-gold">Book a Consultation</NuxtLink>
        <NuxtLink to="/contact"      class="btn-secondary">Send an Enquiry</NuxtLink>
      </div>
    </div>
  </section>
</template>
