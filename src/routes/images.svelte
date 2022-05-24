<svelte:head>
  <title>Images · Copa Airlines Web Design System</title>
</svelte:head>

<script lang="ts">
  import Heading from '../components/heading.svelte';
</script>

<Heading title="Images" subtitle="Foundations" bg="bg-fares-economy-full"></Heading>

<section class="container">
  <h2>Responsive</h2>
  <div class="flex gap-base items-center">
    <div class="w-152">
      <img src="https://picsum.photos/600/400" alt="" >
      <code>img</code>
    </div>
    <div class="h-152">
      <img src="https://picsum.photos/400/600" alt="" class="img-vertical" >
      <code>img-vertical</code>
    </div>
  </div>
</section>
<section class="container">
  <h2 class="my-base">Other image components</h2>
  <h3>Destination bagde</h3>
  <p>This component is opinionated and requieres another tag wraping the image</p>
  <div class="flex gap-base items-center mt-16">
    <div class="destination-badge">
      <img src="https://picsum.photos/400" alt="">
    </div>
    <div class="p-24 bg-primary-ultradark rounded-lg">
      <div class="destination-badge-invert">
        <img src="https://picsum.photos/400" alt="">
      </div>
    </div>
  </div>
</section>