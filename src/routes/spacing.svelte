<svelte:head>
  <title>Spacing & Grid · Copa Airlines Web Design System</title>
</svelte:head>

<script lang="ts">
  import Heading from '../components/heading.svelte';

  type sizingCategory = {
    name: string
    sizes: sizingClases[]
  }

  type sizingClases = {
    size: number
    width: string
    height: string
  }

  const sizeShowcase: sizingCategory[] = [
    {
      name: 'LG',
      sizes: [
        {
          size: 152,
          width: 'w-152',
          height: 'h-152',
        },{
          size: 112,
          width: 'w-112',
          height: 'h-112',
        },{
          size: 80,
          width: 'w-80',
          height: 'h-80',
        },{
          size: 56,
          width: 'w-56',
          height: 'h-56',
        },{
          size: 40,
          width: 'w-40',
          height: 'h-40',
        },{
          size: 32,
          width: 'w-32',
          height: 'h-32',
        },{
          size: 24,
          width: 'w-24',
          height: 'h-24',
        },{
          size: 16,
          width: 'w-16',
          height: 'h-16',
        },{
          size: 8,
          width: 'w-8',
          height: 'h-8',
        }
      ]
    },{
      name: 'MD',
      sizes: [
        {
          size: 136,
          width: 'w-136',
          height: 'h-136',
        },{
          size: 96,
          width: 'w-96',
          height: 'h-96',
        },{
          size: 72,
          width: 'w-72',
          height: 'h-72',
        },{
          size: 48,
          width: 'w-48',
          height: 'h-48',
        },{
          size: 40,
          width: 'w-40',
          height: 'h-40',
        },{
          size: 32,
          width: 'w-32',
          height: 'h-32',
        },{
          size: 24,
          width: 'w-24',
          height: 'h-24',
        },{
          size: 16,
          width: 'w-16',
          height: 'h-16',
        },{
          size: 8,
          width: 'w-8',
          height: 'h-8',
        }
      ]
    },{
      name: 'SM',
      sizes: [
        {
          size: 112,
          width: 'w-112',
          height: 'h-112',
        },{
          size: 88,
          width: 'w-88',
          height: 'h-88',
        },{
          size: 64,
          width: 'w-64',
          height: 'h-64',
        },{
          size: 48,
          width: 'w-48',
          height: 'h-48',
        },{
          size: 40,
          width: 'w-40',
          height: 'h-40',
        },{
          size: 32,
          width: 'w-32',
          height: 'h-32',
        },{
          size: 24,
          width: 'w-24',
          height: 'h-24',
        },{
          size: 16,
          width: 'w-16',
          height: 'h-16',
        },{
          size: 8,
          width: 'w-8',
          height: 'h-8',
        }
      ]
    },{
      name: 'XS',
      sizes: [
        {
          size: 96,
          width: 'w-96',
          height: 'h-96',
        },{
          size: 72,
          width: 'w-72',
          height: 'h-72',
        },{
          size: 56,
          width: 'w-56',
          height: 'h-56',
        },{
          size: 48,
          width: 'w-48',
          height: 'h-48',
        },{
          size: 40,
          width: 'w-40',
          height: 'h-40',
        },{
          size: 32,
          width: 'w-32',
          height: 'h-32',
        },{
          size: 24,
          width: 'w-24',
          height: 'h-24',
        },{
          size: 16,
          width: 'w-16',
          height: 'h-16',
        },{
          size: 8,
          width: 'w-8',
          height: 'h-8',
        }
      ]
    }
  ]

  const getCategoryName = ({name}: sizingCategory) => name
  const getCategorySizes = ({sizes}: sizingCategory) => sizes
  const getSizeWidthClass = ({width}:sizingClases) => width
  const getSizeHeightClass = ({height}:sizingClases) => height
  const getSizeSize = ({size}:sizingClases) => size
</script>

<Heading title="Spacing & Grid" subtitle="Foundations" bg="bg-fares-economy-full"></Heading>
<section class="container">
  <h2>Spacing System</h2>
  <p>The class sufix is bellow the box</p>
  <div class="flex flex-wrap items-end justify-between my-24 text-right">
    {#each sizeShowcase as category }
      {@const sizes = getCategorySizes(category)}
      <div>
        <h3>{getCategoryName(category)}</h3>
        <div class="flex flex-col gap-16">
          {#each sizes as size}
              <div class="flex flex-col items-end">
                <div class="{getSizeWidthClass(size)} {getSizeHeightClass(size)} bg-grey-500"></div>
                <code class="text-grey-800">{getSizeSize(size)}</code>
              </div>
          {/each}
        </div>
      </div>
    {/each}
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