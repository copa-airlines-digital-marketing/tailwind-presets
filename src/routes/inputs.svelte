<svelte:head>
  <title>Inputs · Copa Airlines Web Design System</title>
</svelte:head>

<script lang="ts">
  import Heading from '../components/heading.svelte';
  
  const lableClasses = [null, 'label-lg']

  const helperTextClasses = ['input-helper', 'input-helper-error' , 'input-helper-warning' , 'input-helper-success']
</script>

<Heading title="Inputs" subtitle="Master Components" bg="bg-dark-orange"></Heading>

<section class="container">
  <h2>Base Components</h2>
  <h3 class="mt-base mb-16">Labels</h3>
  <div class="flex gap-base">
    {#each lableClasses as className}
      <div class="flex flex-col">
        <label for="sample" class="{className}">Sample Label</label>
        <code>{className ? className: 'label'}</code>
      </div>
    {/each}
  </div>

  <h3 class="mt-base">Helper Texts</h3>
  <p>This component is opinionated, it will change the svg inside with a lvl 2 specifity</p>
  <div class="flex gap-base my-16">
    {#each helperTextClasses as className}
      <div class="flex flex-col">
        <div class="{className}">
          <svg viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8966 2.70508H3.10345C2.49414 2.70508 2 3.19922 2 3.80853V21.6016C2 22.2109 2.49414 22.7051 3.10345 22.7051H12.6897V14.9706H10.0862V11.943H12.6897V9.71542C12.6897 7.13266 14.269 5.72577 16.5724 5.72577C17.3486 5.72404 18.1245 5.76335 18.8966 5.84301V8.54301H17.3107C16.0552 8.54301 15.8103 9.13611 15.8103 10.012V11.9396H18.8103L18.4207 14.9671H15.7931V22.7051H20.8966C21.5062 22.7051 22 22.2109 22 21.6016V3.80853C22 3.19922 21.5062 2.70508 20.8966 2.70508Z"/>
          </svg>
          <span>Helper Text</span>
        </div>
        <code>{className}</code>
      </div>
    {/each}
  </div>
  
</section>

<input type="hidden" name="sample">