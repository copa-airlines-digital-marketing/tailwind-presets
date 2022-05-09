<script lang="ts">
  export let size: string;
</script>

<div class="flex flex-col items-end">
  <slot></slot>
  <code class="text-grey-800">{size}</code>
</div>
