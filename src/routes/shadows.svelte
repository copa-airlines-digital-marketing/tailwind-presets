<svelte:head>
  <title>Shadows · Copa Airlines Web Design System</title>
</svelte:head>

<script lang="ts">
  import Heading from '../components/heading.svelte';

  const shadows: string[] = ['shadow-tn','shadow-md', 'shadow-lg', 'shadow-modal']
</script>

<Heading title="Shadows" subtitle="Foundations" bg="bg-fares-economy-full"></Heading>
<section class="container bg-bg-paper">
  <h2>Variants</h2>
  <div class="flex flex-wrap gap-base">
    {#each shadows as shadow}
      <div class="flex flex-col items-center">
        <div class="{shadow} w-152 h-112">
        </div>
        <code>{shadow.replace('shadow-','')}</code>
      </div>
    {/each}
  </div>
</section>