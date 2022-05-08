<script lang="ts">
  import { afterNavigate } from '$app/navigation';

  import { navVisible } from '../store';

  const toggleNav = () => navVisible.update(n => !n)

  const handleNavigationFinish = () => {
    toggleNav()
  }

  afterNavigate(handleNavigationFinish)

  export let title: string;

  export let subtitle: string;

  export let bg: string;

</script>

<div class="bg-{bg} text-grey-50 py-24 mb-24">
  <div class="container flex items-center">
    <button class="w-48 h-48 p-12 bg-bg-light-blue rounded-full" on:click={toggleNav}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25"><path class="fill-primary-main" fill-rule="evenodd" d="M21 10H3a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2Zm0 8H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2Z" clip-rule="evenodd"/></svg>
    </button>
    <div class="ml-16">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </div>
</div>