<template>
  <section id="experience" class="experience-section">
    <h2>
      <span class="section-index">02.</span>
      Where I’ve Worked
      <span class="section-line"></span>
    </h2>

    <div class="experience-container">
      <div class="company-list">
        <ul>
          <li
            v-for="(job, index) in jobs"
            :key="job.company"
            :class="{ active: index === activeIndex }"
            @click="activeIndex = index"
          >
            {{ job.company }}
          </li>
        </ul>
      </div>

      <div class="job-details">
        <h3>
          {{ jobs[activeIndex].title }}
          <span class="at">@ {{ jobs[activeIndex].company }}</span>
        </h3>
        <p class="date">{{ jobs[activeIndex].date }}</p>
        <ul class="description">
          <li v-for="(point, idx) in jobs[activeIndex].points" :key="idx">
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Job {
  company: string
  title: string
  date: string
  points: string[]
}

const jobs = ref<Job[]>([
  {
    company: 'Upstatement',
    title: 'Lead Engineer',
    date: 'May 2018 – Present',
    points: [
      'Deliver high-quality, robust production code for a diverse array of projects.',
      'Work alongside creative directors to lead the research and development of technical solutions.',
      'Collaborate with designers and project managers to transform creative concepts.',
      'Provide leadership within engineering department through mentorship.'
    ]
  },
  {
    company: 'Apple',
    title: 'Senior Developer',
    date: 'Jan 2016 – Apr 2018',
    points: [
      'Developed iOS applications used by millions of users worldwide.',
      'Worked closely with design and QA teams to ensure high standards.',
      'Contributed to performance optimizations and accessibility improvements.'
    ]
  },
  {
    company: 'Scout Studio',
    title: 'Software Engineer',
    date: 'Jun 2014 – Dec 2015',
    points: [
      'Built web applications and prototypes for clients.',
      'Integrated REST APIs and designed reusable components.',
      'Led internal tooling development initiatives.'
    ]
  },
  {
    company: 'Starry',
    title: 'Frontend Developer',
    date: 'Jan 2013 – May 2014',
    points: [
      'Implemented responsive user interfaces with Vue.js and React.',
      'Worked in agile teams to deliver features on tight deadlines.'
    ]
  }
])

const activeIndex = ref(0)
</script>

<style scoped>
.experience-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1rem;
  color: #cbd5e1;
}

h2 {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.section-index {
  color: #baff75;
  font-weight: 700;
  margin-right: 0.5rem;
}

.section-line {
  flex-grow: 1;
  height: 1px;
  background: #334155;
  margin-left: 1rem;
}

.experience-container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.company-list {
  min-width: 150px;
  border-left: 2px solid #334155;
}

.company-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.company-list li {
  padding: 0.75rem 1rem;
  cursor: pointer;
  color: #94a3b8;
  transition: background 0.3s, color 0.3s;
  border-left: 2px solid transparent;
}

.company-list li:hover {
  background: rgba(255, 255, 255, 0.05);
}

.company-list li.active {
  color: #baff75;
  background: rgba(58, 255, 208, 0.05);
  border-left-color: #baff75;
}

.job-details {
  flex: 1;
}

.job-details h3 {
  font-size: 1.4rem;
  margin: 0;
  font-weight: 600;
}

.job-details .at {
  color: #baff75;
}

.job-details .date {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0.5rem 0 1rem;
}

.description {
  list-style: none;
  padding: 0;
  margin: 0;
}

.description li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
}

.description li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #baff75;
  font-size: 1rem;
}
</style>
