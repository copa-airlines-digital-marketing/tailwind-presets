<svelte:head>
  <title>Surfaces · Copa Airlines Web Design System</title>
</svelte:head>

<script lang="ts">
  import Heading from '../components/heading.svelte';
</script>

<Heading title="Surfaces" subtitle="Foundations" bg="bg-fares-economy-full"></Heading>

<section class="container">
  <h2>Small</h2>
  <p>For small surfaces and little sized components, roundness value is always 4px, color and shadows might vary, depending on the purpose.</p>
  <div class="flex gap-base items-center my-16 flex-wrap">
    <div>
      <div class="h-64 w-[226px] bg-grey-50 shadow-tn rounded"></div>
      <code>rounded</code>
    </div>
    <div>
      <div class="h-64 w-[226px] bg-grey-50 shadow-md rounded"></div>
      <code>rounded</code>
    </div>
    <div>
      <div class="h-64 w-[226px] bg-bg-light-blue rounded"></div>
      <code>rounded</code>
    </div>
  </div>
  <h2 class="mt-56">Wider surfaces, photographies and components</h2>
  <p>For bigger, more compositive surfaces and blocks of content, roundness value is always 16px.  color might vary, depending on the purpose and contrast with the text over, keeping in mind accesibilty. Shadows are not applicable in solid colored surfaces.</p>
  <div class="flex gap-base items-center my-16 flex-wrap">
    <div>
      <div class="h-[190px] w-full md:w-[623px] bg-grey-50 shadow-lg rounded-2xl"></div>
      <code>rounded-2xl</code>
    </div>
    <div>
      <div class="h-[190px] w-full md:w-[623px] bg-bg-light-blue rounded-2xl"></div>
      <code>rounded-2xl</code>
    </div>
    <div>
      <div class="h-[190px] w-full md:w-[623px] bg-light-orange shadow-tn rounded-2xl"></div>
      <code>rounded-2xl</code>
    </div>
    <div>
      <div class="h-[190px] w-full sm:w-[300px] shadow-tn rounded-2xl overflow-hidden">
        <img src="https://picsum.photos/600" alt="">
      </div>
      <code>rounded-2xl overflow-hidden</code>
    </div>
    <div>
      <div class="h-[190px] w-full sm:w-[300px] bg-primary-dark shadow-tn rounded-2xl"></div>
      <code>rounded-2xl</code>
    </div>
  </div>
</section>