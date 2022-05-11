<svelte:head>
  <title>Shadows · Copa Airlines Web Design System</title>
</svelte:head>

<script lang="ts">
  import Heading from '../components/heading.svelte';
  import SpacingBox from '../components/spacing-box.svelte';
</script>

<Heading title="Shadows" subtitle="Foundations" bg="fares-economy-full"></Heading>
<section class="container bg-bg-paper">
  <h2>Variants</h2>
  <div class="flex flex-wrap gap-base">
    <div class="flex flex-col items-center">
      <div class="shadow-tn w-152 h-112">
      </div>
      <code>tn</code>
    </div>
    <div class="flex flex-col items-center">
      <div class="shadow-md w-152 h-112">
      </div>
      <code>md</code>
    </div>
    <div class="flex flex-col items-center">
      <div class="shadow-lg w-152 h-112">
      </div>
      <code>lg</code>
    </div>
    <div class="flex flex-col items-center">
      <div class="shadow-modal w-152 h-112">
      </div>
      <code>modal</code>
    </div>
  </div>
</section>