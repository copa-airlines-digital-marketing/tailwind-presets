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

<div class="{bg} text-grey-50 py-1 mb-base">
  <div class="container">
    <div class="flex items-center">
      <button class="btn-outline-invert btn-lg btn-circle" on:click={toggleNav}>
        <svg class="square-24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25"><path class="fill-current" fill-rule="evenodd" d="M21 10H3a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2Zm0 8H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2Z" clip-rule="evenodd"/></svg>
      </button>
      <h1 class="text-grey-50 ml-24">{title}</h1>
    </div>
    <p class="ml-80">{subtitle}</p>
  </div>
  
</div>