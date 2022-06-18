<svelte:head>
  <title>Breadcrums · Copa Airlines Web Design System</title>
</svelte:head>

<script lang="ts">
  import Heading from '../components/heading.svelte';
</script>

<Heading title="Breadcrums" subtitle="Master Components" bg="bg-dark-orange"></Heading>

<section class="container">
  <p>Breadcrumbs are used for enhancing users’ wayfinding capabilities on a page. They represent the page hierarchy of the current page.</p>

  <p>It is composed of at least 2 levels and at most 5. The first element is always the root (e.g. the homepage) and the last element is always the current page.</p>

  <p>All elements (except the last) are links and take users to other pages in the hierarchy. Links use the Primary Link styles.</p>

  <p>On XSmall, only the last 2 levels must be shown.</p>

  <p>
    Breadcrumbs also support an invert theme, for use with dark backgrounds.
  </p>
  <p>
    Breadcrumbs should be built using a component or by default using HTML
  </p>
  <h2 class="my-base">Components</h2>
  <nav aria-label="breadcrums">
    <ol class="breadcrums">
      <li>
        <a href="/">Home</a>
        <span aria-hidden="true">
          <svg viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.09961 16.6L13.6996 12L9.09961 7.4L10.4996 6L16.4996 12L10.4996 18L9.09961 16.6Z"/>
          </svg>            
        </span>
      </li>
      <li>
        <span aria-current="location">Breadcrums</span>
      </li>
    </ol>
  </nav>
</section>