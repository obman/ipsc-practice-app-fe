<template>
  <main class="container p-8 sm:p-12 md:p-24 mx-auto">
    <header class="mb-6">
      <h2 class="text-xl font-bold">Aimbot Drill - Target Acquisition Speed</h2>
      <p>
        A simple yet effective shooting drill to practice fast target
        identification/acquisition.
      </p>
    </header>
    <div class="main-text-content mb-8">
      <p>
        <strong>* Notice :</strong> at this time only
        <strong>Chrome</strong> browser is supported.
      </p>
      <p>
        Application is intended to give support for T.REX ARMS Aimbot Drill. If
        you don't have buddy to yell the numbers, you can use this application.
      </p>
      <p>
        LINK :
        <a
          href="https://www.youtube.com/watch?v=Q4wKWsCFAfU"
          class="text-[#eb9130]"
          target="_blank"
          ><strong>Aimbot Drill to Increase Target Acquisition Speed</strong></a
        >
      </p>
    </div>

    <IPSCPracticeSetupForm @submit="onSubmit" />

    <IPSCPracticeData v-if="practices.length" :practices="practices" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import IPSCPracticeSetupForm from '~/components/elements/ipsc-practice-setup-form.vue'
import IPSCPracticeData from '~/components/elements/ipsc-practice-data.vue'
import IPSC from '~/utils/IPSC'

export default Vue.extend({
  name: 'IndexPage',
  components: { IPSCPracticeData, IPSCPracticeSetupForm },
  layout: 'DefaultLayout',
  data() {
    return {
      practice: {} as { cycles: number, delay: number, delayBetweenShots: number, targetsNumber: number },
      practices: [] as Array<any>,
      IPSC: null as IPSC | null
    }
  },
  methods: {
    async onSubmit(data: any) {
      this.practice = data
      this.IPSC = new IPSC(this.practice)


      try {
        await this.IPSC.speakTargets()
        this.practices.push(this.IPSC.process)
      } catch (error) {
        console.log(error)
      }
    },
  },
})
</script>

<style src="@/assets/_base.css"></style>
