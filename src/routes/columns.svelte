<svelte:head>
  <title>Columns · Copa Airlines Web Design System</title>
</svelte:head>

<script lang="ts">
  import Heading from '../components/heading.svelte';
</script>

<Heading title="Columns" subtitle="Foundations" bg="bg-fares-economy-full"></Heading>

<section class="container">
  <h2>Columns with Grid</h2>
  <p>Use <code>col-span</code> classes</p>
  <p>Flex is not recomended, use grid for a more consistent result</p>

  <h3 class="mb-16 mt-56">1 COL</h3>
  <div class="grid">
    <div class="h-[240px] bg-bg-light-blue grid place-content-center col-span-full">
      <div class="heading-1 text-grey-700">col 1 - 12</div>
    </div>
  </div>
  <div class="flex gap-base">
    <code>col-span-full</code>
  </div>

  <h3 class="mb-16 mt-56">2 COLS</h3>
  <div class="grid grid-cols-12 gap-base">
    <div class="h-[240px] bg-bg-light-blue grid place-content-center col-span-full md:col-span-6">
      <div class="heading-1 text-grey-700">col 1 - 6</div>
    </div>
    <div class="h-[240px] bg-error-faded grid place-content-center col-span-full md:col-span-6">
      <div class="heading-1 text-grey-700">col 2 - 6</div>
    </div>
  </div>
  <div class="flex gap-base">
    <code>col-span-6</code>
  </div>

  <h3 class="mb-16 mt-56">2 COLS / 4-8</h3>
  <div class="grid grid-cols-12 gap-base">
    <div class="h-[240px] bg-bg-light-blue grid place-content-center col-span-full md:col-span-4">
      <div class="heading-1 text-grey-700">col 1 - 4</div>
    </div>
    <div class="h-[240px] bg-error-faded grid place-content-center col-span-full md:col-span-8">
      <div class="heading-1 text-grey-700 basis">col 2 - 8</div>
    </div>
  </div>
  <div class="flex gap-base">
    <code>col-span-4</code>
    |
    <code>col-span-8</code>
  </div>

  <h3 class="mb-16 mt-56">3 COLS</h3>
  <div class="grid grid-cols-12 gap-base">
    <div class="h-[240px] bg-bg-light-blue grid place-content-center col-span-full md:col-span-4">
      <div class="heading-1 text-grey-700">col 1 - 4</div>
    </div>
    <div class="h-[240px] bg-error-faded grid place-content-center col-span-full md:col-span-4">
      <div class="heading-1 text-grey-700 basis">col 2 - 4</div>
    </div>
    <div class="h-[240px] bg-warning-faded grid place-content-center col-span-full md:col-span-4">
      <div class="heading-1 text-grey-700 basis">col 3 - 4</div>
    </div>
  </div>
  <div class="flex gap-base">
    <code>col-span-4</code>
  </div>
</section>