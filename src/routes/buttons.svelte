<svelte:head>
  <title>Buttons · Copa Airlines Web Design System</title>
</svelte:head>

<script lang="ts">
  import Heading from '../components/heading.svelte';
  import ButtonShowcase from '../components/button-showcase.svelte';

  type btnShowCase = {
    className: string
  }

</script>

<Heading title="Buttons" subtitle="Master Components" bg="bg-dark-orange"></Heading>

<section class="container">
  <h2>Shapes</h2>
  <div class="flex gap-base py-24">
    <ButtonShowcase className="btn" name="Regular"></ButtonShowcase>
    <ButtonShowcase className="btn-rounded" name="Rounded"></ButtonShowcase>
    <ButtonShowcase className="btn-circle" name="Circle" content="">
      <svg class="square-24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9083 5.10746C18.6108 5.36401 18.8351 5.89113 18.6314 6.66059L21.9225 9.88144C22.1459 10.1001 22.1459 10.3545 21.9535 10.5812L21.1539 11.5236C20.4515 12.3691 19.5874 11.9734 19.105 11.5236L18.3902 12.4163L14.7236 8.97745L16.7063 6.75559C16.7063 6.75559 17.2642 5.76018 17.5145 5.24746C17.6226 5.02602 17.8235 5.0765 17.9083 5.10746ZM14.0374 9.70493H8.6965H5.41489L3.6226 7.91264C3.43731 7.72735 3.1404 7.71654 2.94213 7.88787L2.77219 8.03472C2.57709 8.20331 2.54219 8.49261 2.69159 8.70277L4.00053 10.5439V15.2049C4.00053 15.241 4.00436 15.2762 4.01162 15.3102L2.1711 18.4829C2.03234 18.7221 2.1141 19.0286 2.3536 19.1668L3.21962 19.6668C3.45842 19.8047 3.76376 19.7232 3.90212 19.4847L5.65388 16.465L6.43606 19.3366C6.49534 19.5542 6.69295 19.7052 6.91849 19.7052H7.98978C8.32061 19.7052 8.56024 19.3897 8.47142 19.071L7.53333 15.7049H16.1461L17.1353 19.3366C17.1946 19.5542 17.3922 19.7052 17.6177 19.7052H18.689C19.0198 19.7052 19.2595 19.3897 19.1706 19.071L17.7645 14.0255C17.7609 14.0124 17.7567 13.9996 17.7521 13.9871C17.7044 13.7248 17.6983 13.4675 17.7874 13.2219L14.0374 9.70493Z" class="fill-current"/>
      </svg>        
    </ButtonShowcase>
  </div>

  <h2>Sizes</h2>
  <div class="flex gap-base py-24 items-end">
    <ButtonShowcase className="btn-sm" name="Slim"></ButtonShowcase>
    <ButtonShowcase className="btn" name="Default"></ButtonShowcase>
    <ButtonShowcase className="btn-lg" name="Large"></ButtonShowcase>
    <ButtonShowcase className="btn-xl" name="Giant"></ButtonShowcase>
  </div>
  <div class="flex gap-base py-24 items-end">
    <ButtonShowcase className="btn-sm btn-rounded" name="Slim"></ButtonShowcase>
    <ButtonShowcase className="btn-lg btn-rounded" name="Large"></ButtonShowcase>
    <ButtonShowcase className="btn-xl btn-rounded" name="Giant"></ButtonShowcase>
  </div>
  <div class="flex gap-base py-24 items-end">
    <ButtonShowcase className="btn-sm btn-circle" name="Slim" content="">
      <svg class="square-24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9083 5.10746C18.6108 5.36401 18.8351 5.89113 18.6314 6.66059L21.9225 9.88144C22.1459 10.1001 22.1459 10.3545 21.9535 10.5812L21.1539 11.5236C20.4515 12.3691 19.5874 11.9734 19.105 11.5236L18.3902 12.4163L14.7236 8.97745L16.7063 6.75559C16.7063 6.75559 17.2642 5.76018 17.5145 5.24746C17.6226 5.02602 17.8235 5.0765 17.9083 5.10746ZM14.0374 9.70493H8.6965H5.41489L3.6226 7.91264C3.43731 7.72735 3.1404 7.71654 2.94213 7.88787L2.77219 8.03472C2.57709 8.20331 2.54219 8.49261 2.69159 8.70277L4.00053 10.5439V15.2049C4.00053 15.241 4.00436 15.2762 4.01162 15.3102L2.1711 18.4829C2.03234 18.7221 2.1141 19.0286 2.3536 19.1668L3.21962 19.6668C3.45842 19.8047 3.76376 19.7232 3.90212 19.4847L5.65388 16.465L6.43606 19.3366C6.49534 19.5542 6.69295 19.7052 6.91849 19.7052H7.98978C8.32061 19.7052 8.56024 19.3897 8.47142 19.071L7.53333 15.7049H16.1461L17.1353 19.3366C17.1946 19.5542 17.3922 19.7052 17.6177 19.7052H18.689C19.0198 19.7052 19.2595 19.3897 19.1706 19.071L17.7645 14.0255C17.7609 14.0124 17.7567 13.9996 17.7521 13.9871C17.7044 13.7248 17.6983 13.4675 17.7874 13.2219L14.0374 9.70493Z" class="fill-current"/>
      </svg>        
    </ButtonShowcase>
    <ButtonShowcase className="btn-lg btn-circle" name="Large" content="">
      <svg class="square-24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9083 5.10746C18.6108 5.36401 18.8351 5.89113 18.6314 6.66059L21.9225 9.88144C22.1459 10.1001 22.1459 10.3545 21.9535 10.5812L21.1539 11.5236C20.4515 12.3691 19.5874 11.9734 19.105 11.5236L18.3902 12.4163L14.7236 8.97745L16.7063 6.75559C16.7063 6.75559 17.2642 5.76018 17.5145 5.24746C17.6226 5.02602 17.8235 5.0765 17.9083 5.10746ZM14.0374 9.70493H8.6965H5.41489L3.6226 7.91264C3.43731 7.72735 3.1404 7.71654 2.94213 7.88787L2.77219 8.03472C2.57709 8.20331 2.54219 8.49261 2.69159 8.70277L4.00053 10.5439V15.2049C4.00053 15.241 4.00436 15.2762 4.01162 15.3102L2.1711 18.4829C2.03234 18.7221 2.1141 19.0286 2.3536 19.1668L3.21962 19.6668C3.45842 19.8047 3.76376 19.7232 3.90212 19.4847L5.65388 16.465L6.43606 19.3366C6.49534 19.5542 6.69295 19.7052 6.91849 19.7052H7.98978C8.32061 19.7052 8.56024 19.3897 8.47142 19.071L7.53333 15.7049H16.1461L17.1353 19.3366C17.1946 19.5542 17.3922 19.7052 17.6177 19.7052H18.689C19.0198 19.7052 19.2595 19.3897 19.1706 19.071L17.7645 14.0255C17.7609 14.0124 17.7567 13.9996 17.7521 13.9871C17.7044 13.7248 17.6983 13.4675 17.7874 13.2219L14.0374 9.70493Z" class="fill-current"/>
      </svg>
    </ButtonShowcase>
    <ButtonShowcase className="btn-xl btn-circle" name="Giant" content="">
      <svg class="square-24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9083 5.10746C18.6108 5.36401 18.8351 5.89113 18.6314 6.66059L21.9225 9.88144C22.1459 10.1001 22.1459 10.3545 21.9535 10.5812L21.1539 11.5236C20.4515 12.3691 19.5874 11.9734 19.105 11.5236L18.3902 12.4163L14.7236 8.97745L16.7063 6.75559C16.7063 6.75559 17.2642 5.76018 17.5145 5.24746C17.6226 5.02602 17.8235 5.0765 17.9083 5.10746ZM14.0374 9.70493H8.6965H5.41489L3.6226 7.91264C3.43731 7.72735 3.1404 7.71654 2.94213 7.88787L2.77219 8.03472C2.57709 8.20331 2.54219 8.49261 2.69159 8.70277L4.00053 10.5439V15.2049C4.00053 15.241 4.00436 15.2762 4.01162 15.3102L2.1711 18.4829C2.03234 18.7221 2.1141 19.0286 2.3536 19.1668L3.21962 19.6668C3.45842 19.8047 3.76376 19.7232 3.90212 19.4847L5.65388 16.465L6.43606 19.3366C6.49534 19.5542 6.69295 19.7052 6.91849 19.7052H7.98978C8.32061 19.7052 8.56024 19.3897 8.47142 19.071L7.53333 15.7049H16.1461L17.1353 19.3366C17.1946 19.5542 17.3922 19.7052 17.6177 19.7052H18.689C19.0198 19.7052 19.2595 19.3897 19.1706 19.071L17.7645 14.0255C17.7609 14.0124 17.7567 13.9996 17.7521 13.9871C17.7044 13.7248 17.6983 13.4675 17.7874 13.2219L14.0374 9.70493Z" class="fill-current"/>
      </svg>
    </ButtonShowcase>
  </div>

  <h2>Themes</h2>
  <div class="flex flex-wrap gap-base py-24">
    <ButtonShowcase className="btn" name="Solid Primary Main"></ButtonShowcase>
    <ButtonShowcase className="btn-ultradark" name="Solid Primary Ultradark"></ButtonShowcase>
    <ButtonShowcase className="btn-light" name="Solid Primary Light"></ButtonShowcase>
    <ButtonShowcase className="btn-outline" name="Outline Primary Main"></ButtonShowcase>
    <ButtonShowcase className="btn-outline-light" name="Outline Primary Light"></ButtonShowcase>
    <ButtonShowcase className="btn-outline-grey" name="Outline Grey"></ButtonShowcase>
    <div class="bg-primary-dark text-grey-50 p-8 rounded-lg">
      <ButtonShowcase className="btn-outline-invert" name="Outline Invert"></ButtonShowcase>
    </div>
    <ButtonShowcase className="btn-transparent" name="Transparent"></ButtonShowcase>
    <ButtonShowcase className="btn-transparent-grey" name="Transparent Grey"></ButtonShowcase>
    <div class="bg-primary-dark text-grey-50 p-8 rounded-lg">
      <ButtonShowcase className="btn-transparent-invert" name="Transparent Invert"></ButtonShowcase>
    </div>
  </div>

  <h2>Disabled States</h2>
  <div class="flex flex-wrap gap-base py-24 items-center">
    <button disabled>Label</button>
    <button class="btn-ultradark" disabled>Label</button>
    <button class="btn-light" disabled>Label</button>
    <button class="btn-outline" disabled>Label</button>
    <button class="btn-outline-light" disabled>Label</button>
    <button class="btn-outline-grey" disabled>Label</button>
    <div class="bg-primary-dark text-grey-50 p-8 rounded-lg">
      <button class="btn-outline-invert" disabled>Label</button>
    </div>
    <button class="btn-transparent" disabled>Label</button>
    <button class="btn-transparent-grey" disabled>Label</button>
    <div class="bg-primary-dark text-grey-50 p-8 rounded-lg">
      <button class="btn-transparent-invert" disabled>Label</button>
    </div>
  </div>

  <h2>Labels with Icons</h2>
  <div class="flex flex-wrap gap-base py-24">
    <ButtonShowcase name="Regular" content="">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5996 18L8.59961 12L14.5996 6L15.9996 7.4L11.3996 12L15.9996 16.6L14.5996 18Z"/>
        </svg>
      Label
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.59961 16.6L13.1996 12L8.59961 7.4L9.99961 6L15.9996 12L9.99961 18L8.59961 16.6Z"/>
      </svg>         
    </ButtonShowcase>
  </div>

</section>