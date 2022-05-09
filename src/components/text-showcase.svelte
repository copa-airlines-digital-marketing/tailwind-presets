<script lang="ts">
  export let size: string | undefined;
  export let prefix: string;
</script>

<div>
  <slot></slot>
  <code>{prefix}{#if size}-{size}{/if}</code>
</div>