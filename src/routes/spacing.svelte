<svelte:head>
  <title>Spacing & Grid · Copa Airlines Web Design System</title>
</svelte:head>

<script lang="ts">
  import Heading from '../components/heading.svelte';
  import SpacingBox from '../components/spacing-box.svelte';
</script>

<Heading title="Spacing & Grid" subtitle="Foundations" bg="fares-economy-full"></Heading>
<section class="container">
  <h2>Spacing System</h2>
  <p>The class sufix is bellow the box</p>
  <div class="flex flex-wrap items-end justify-between my-24 text-right">
    <div>
      <h3>LG</h3>
      <div class="flex flex-col gap-16">
        <SpacingBox size="152">
          <div class="w-152 h-152 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="112">
          <div class="w-112 h-112 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="80">
          <div class="w-80 h-80 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="56">
          <div class="w-56 h-56 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="40">
          <div class="w-40 h-40 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="32">
          <div class="w-32 h-32 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="24">
          <div class="w-24 h-24 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="16">
          <div class="w-16 h-16 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="8">
          <div class="w-8 h-8 bg-grey-500"></div>
        </SpacingBox>
      </div>
    </div>
    <div>
      <h3>MD</h3>
      <div class="flex flex-col gap-16">
        <SpacingBox size="136">
          <div class="w-136 h-136 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="96">
          <div class="w-96 h-96 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="72">
          <div class="w-72 h-72 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="48">
          <div class="w-48 h-48 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="40">
          <div class="w-40 h-40 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="32">
          <div class="w-32 h-32 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="24">
          <div class="w-24 h-24 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="16">
          <div class="w-16 h-16 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="8">
          <div class="w-8 h-8 bg-grey-500"></div>
        </SpacingBox>
      </div>
    </div>
    <div>
      <h3>SM</h3>
      <div class="flex flex-col gap-16">
        <SpacingBox size="112">
          <div class="w-112 h-112 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="88">
          <div class="w-88 h-88 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="64">
          <div class="w-64 h-64 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="48">
          <div class="w-48 h-48 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="40">
          <div class="w-40 h-40 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="32">
          <div class="w-32 h-32 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="24">
          <div class="w-24 h-24 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="16">
          <div class="w-16 h-16 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="8">
          <div class="w-8 h-8 bg-grey-500"></div>
        </SpacingBox>
      </div>
    </div>
    <div>
      <h3>XS</h3>
      <div class="flex flex-col gap-16">
        <SpacingBox size="96">
          <div class="w-96 h-96 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="72">
          <div class="w-72 h-72 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="56">
          <div class="w-56 h-56 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="48">
          <div class="w-48 h-48 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="40">
          <div class="w-40 h-40 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="32">
          <div class="w-32 h-32 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="24">
          <div class="w-24 h-24 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="16">
          <div class="w-16 h-16 bg-grey-500"></div>
        </SpacingBox>
        <SpacingBox size="8">
          <div class="w-8 h-8 bg-grey-500"></div>
        </SpacingBox>
      </div>
    </div>
  </div>
  <h3>Additional Sufixes</h3>
  <div class="flex flex-wrap gap-base">
    <code>0</code>
    <code>1</code>
  </div>
</section>
<section class="container mt-32 py-24 bg-bg-light-blue">
  <h2>This is a container</h2>
  <code>container</code>
  <p>containers include vertical separation by default</p>
  <h3 class="mt-24">Additional Clasess</h3>
  <div class="flex flex-wrap gap-base">
    <code>gap-base</code>
    <code>my-base</code>
    <code>mt-base</code>
    <code>mb-base</code>
    <code>mx-base</code>
    <code>ml-base</code>
    <code>mr-base</code>
  </div>
  <p>These classes handle the spacing between elements as the grid system idicates</p>
</section>