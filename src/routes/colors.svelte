<svelte:head>
  <title>Colors · Copa Airlines Web Design System</title>
</svelte:head>

<script lang="ts">
  import Heading from '../components/heading.svelte';
  import DsHeading from '../components/ds-heading.svelte';
  import ColorShowcase from '../components/color-showcase.svelte';
  import ColorsContainer from '../components/colors-container.svelte';
</script>

<Heading title="Colors" subtitle="Foundations" bg="fares-economy-full"></Heading>
<div class="container">
  <DsHeading>Primary</DsHeading>
  <ColorsContainer>
    <ColorShowcase color="ultradark" hex="#001A66" prefix="primary">
      <div class="h-72 w-136 rounded-lg mt-8 bg-primary-ultradark" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="dark" hex="#002880" prefix="primary">
      <div class="h-72 w-136 rounded-lg mt-8 bg-primary-dark" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="main" hex="#0032A0" prefix="primary">
      <div class="h-72 w-136 rounded-lg mt-8 bg-primary-main" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="light" hex="#0E68FF" prefix="primary">
      <div class="h-72 w-136 rounded-lg mt-8 bg-primary-light" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="ultralight" hex="#D6E3FF" prefix="primary">
      <div class="h-72 w-136 rounded-lg mt-8 bg-primary-ultralight" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="faded" hex="#0E68FF66" prefix="primary">
      <div class="h-72 w-136 rounded-lg mt-8 bg-primary-ultralight bg-primary-faded" >
      </div>
    </ColorShowcase>
  </ColorsContainer>
  <DsHeading>Secondary</DsHeading>
  <ColorsContainer>
    <ColorShowcase color="main" hex="#00A3E0" prefix="secondary">
      <div class="h-72 w-136 rounded-lg mt-8 bg-secondary-main" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="faded" hex="#00A3E080" prefix="secondary">
      <div class="h-72 w-136 rounded-lg mt-8 bg-secondary-faded" >
      </div>
    </ColorShowcase>
  </ColorsContainer>
  <DsHeading>Alternative</DsHeading>
  <ColorsContainer>
    <ColorShowcase color="pardo" hex="#866D4B" prefix="">
      <div class="h-72 w-136 rounded-lg mt-8 bg-pardo" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="gold" hex="#AD7C59" prefix="">
      <div class="h-72 w-136 rounded-lg mt-8 bg-gold" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="dark orange" hex="#B15C37" prefix="">
      <div class="h-72 w-136 rounded-lg mt-8 bg-dark-orange" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="light orange" hex="#E2C070" prefix="">
      <div class="h-72 w-136 rounded-lg mt-8 bg-light-orange" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="prefermember blue" hex="#072241" prefix="">
      <div class="h-72 w-136 rounded-lg mt-8 bg-prefermember-blue" >
      </div>
    </ColorShowcase>
  </ColorsContainer>
  <DsHeading>Background</DsHeading>
  <ColorsContainer>
    <ColorShowcase color="light blue" hex="#EFF5FF" prefix="bg">
      <div class="h-72 w-136 rounded-lg mt-8 bg-bg-light-blue" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="paper" hex="#DBDAD8" prefix="bg">
      <div class="h-72 w-136 rounded-lg mt-8 bg-bg-paper" >
      </div>
    </ColorShowcase>
  </ColorsContainer>
  <DsHeading>Warning</DsHeading>
  <ColorsContainer>
    <ColorShowcase color="main" hex="#FFC82C" prefix="warning">
      <div class="h-72 w-136 rounded-lg mt-8 bg-warning-main" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="faded" hex="#FFC82C26" prefix="warning">
      <div class="h-72 w-136 rounded-lg mt-8 bg-warning-faded" >
      </div>
    </ColorShowcase>
  </ColorsContainer>
  <DsHeading>Error</DsHeading>
  <ColorsContainer>
    <ColorShowcase color="main" hex="#D52525" prefix="error">
      <div class="h-72 w-136 rounded-lg mt-8 bg-error-main" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="faded" hex="#D52525" prefix="error">
      <div class="h-72 w-136 rounded-lg mt-8 bg-error-faded" >
      </div>
    </ColorShowcase>
  </ColorsContainer>
  <DsHeading>Success</DsHeading>
  <ColorsContainer>
    <ColorShowcase color="main" hex="#0C7E3E" prefix="success">
      <div class="h-72 w-136 rounded-lg mt-8 bg-success-main" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="faded" hex="#0C7E3E" prefix="success">
      <div class="h-72 w-136 rounded-lg mt-8 bg-success-faded" >
      </div>
    </ColorShowcase>
  </ColorsContainer>
  <DsHeading>Grey</DsHeading>
  <ColorsContainer>
    <ColorShowcase color="800" hex="#121212" prefix="grey">
      <div class="h-72 w-136 rounded-lg mt-8 bg-grey-800" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="700" hex="#333333" prefix="grey">
      <div class="h-72 w-136 rounded-lg mt-8 bg-grey-700" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="600" hex="#666666" prefix="grey">
      <div class="h-72 w-136 rounded-lg mt-8 bg-grey-600" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="500" hex="#999999" prefix="grey">
      <div class="h-72 w-136 rounded-lg mt-8 bg-grey-500" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="400" hex="#AAAAAB" prefix="grey">
      <div class="h-72 w-136 rounded-lg mt-8 bg-grey-400" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="300" hex="#CCCCCB" prefix="grey">
      <div class="h-72 w-136 rounded-lg mt-8 bg-grey-300" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="200" hex="#DBDAD8" prefix="grey">
      <div class="h-72 w-136 rounded-lg mt-8 bg-grey-200" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="100" hex="#EFEFEE" prefix="grey">
      <div class="h-72 w-136 rounded-lg mt-8 bg-grey-100" >
      </div>
    </ColorShowcase>
    <ColorShowcase color="50" hex="#FFFFFF" prefix="grey">
      <div class="h-72 w-136 rounded-lg mt-8 bg-grey-50" >
      </div>
    </ColorShowcase>
  </ColorsContainer>
  <DsHeading>Fares</DsHeading>
  <ColorsContainer>
    <ColorShowcase color="economy full" hex="#0D3050" prefix="fares">
      <div class="h-72 w-136 rounded-lg mt-8 bg-fares-economy-full" >
      </div>
    </ColorShowcase>
  </ColorsContainer>
</div> 