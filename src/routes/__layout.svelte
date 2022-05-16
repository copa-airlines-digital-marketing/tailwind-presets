<script lang="ts">
  import '../styles/tailwind.css';
  import { navVisible } from '../store';
  import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  

  let showNav: boolean = false;

  navVisible.subscribe(value => {
		showNav = value;
	});

  const toggleNav = () => navVisible.update(n => !n)
</script>

<div>
  {#if showNav}
    <div class="w-full bg-transparent h-screen absolute top-0 left-0" on:click={toggleNav}></div>
    <nav class="flex flex-col p-16 bg-bg-light-blue h-screen absolute top-0 left-0 w-3/4 sm:w-2/3 md:w-2/12 md:p-24 gap-16" transition:fly="{{x: -75, duration: 500, easing: quintOut}}">
      <a href="/">Home</a>
      <div class="flex flex-col">
        <h4>Global styles</h4>
        <a href="/colors">Colors</a>
        <a href="/spacing">Spacing</a>
        <a href="/columns">Columns</a>
        <a href="/typography">Typography</a>
        <a href="/shadows">Shadows</a>
      </div>
      <div class="flex flex-col">
        <h4>Components</h4>
        <a href="/buttons">Buttons</a>
      </div>
      <a href="/aditional-utilities">Additional Utilities</a>
    </nav>
  {/if}
  <div class="max-h-screen overflow-y-scroll scroll-smooth">
    <slot/>
  </div>
  
</div>
