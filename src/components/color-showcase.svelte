<script lang="ts">
  export let color: string;
  export let hex: string;
  export let prefix: string | undefined;
</script>
<div>
  <p class="text-d2 uppercase text-grey-800">{color} · {hex}</p>
  <slot></slot>
  <code class="normal-case my-8">{#if prefix}-{prefix}{/if}-{color.replace(/\s/g,'-')}</code>
</div>