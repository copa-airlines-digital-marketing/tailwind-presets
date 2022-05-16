<script lang="ts">
  export let name: string = '';
  export let className: string = '';
  export let content: string = 'Label';
</script>

<div class="flex flex-col items-start justify-center">
  <p class="uppercase text-d3 text-current">{name}</p>
  <button class="{className}">
    {#if content === ''}
      <slot></slot>
    {:else}
      {content}
    {/if}
  </button>
  <code class="text-current">{className}</code>
</div>