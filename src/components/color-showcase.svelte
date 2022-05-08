<script lang="ts">
  export let color: string;
  export let hex: string;
  export let prefix: string | undefined;
</script>
<div class="text-12-16 font-medium uppercase text-grey-800">
  <p>{color} · {hex}</p>
  <p>class sufix · <span class="normal-case">{#if prefix}-{prefix}{/if}-{color.replace(/\s/g,'-')}</span></p>
  <slot></slot>
</div>