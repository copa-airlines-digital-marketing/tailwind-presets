<script lang="ts">
  export let color: string;
  export let hex: string;
  export let bg: string;
</script>
<div>
  <p class="text-d2 uppercase text-grey-800">{color} · {hex}</p>
  <div class="h-72 w-136 rounded-lg mt-8 {bg}" >
  </div>
  <code class="normal-case my-8">{bg.replace('bg-','')}</code>
</div>