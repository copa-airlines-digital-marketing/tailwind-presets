<script lang="ts">
  export let size: string;
</script>

<div class="flex items-baseline justify-end">
  <span class="text-grey-800 mr-8">{size}</span>
  <slot></slot>
</div>
