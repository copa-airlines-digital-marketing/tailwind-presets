<svelte:head>
  <title>Colors · Copa Airlines Web Design System</title>
</svelte:head>

<script lang="ts">
  import Heading from '../components/heading.svelte';
  import DsHeading from '../components/ds-heading.svelte';
  import ColorShowcase from '../components/color-showcase.svelte';
  import ColorsContainer from '../components/colors-container.svelte';

  type TColor = { 
    name: string,
    hex: string, 
    className: string,
  }

  type TColorCategory = {
    name: string,
    colors: TColor[]
  }

  const colorCategories: TColorCategory[] = [
    { 
      name: 'Primary',
      colors: [{
        name: 'ultradark',
        hex: '#001A66',
        className: 'bg-primary-ultradark'
        }, {
        name: 'dark',
        hex: '#002880',
        className: 'bg-primary-dark'
        }, {
        name: 'light',
        hex: '#0E68FF',
        className: 'bg-primary-light'
        }, {
        name: 'main',
        hex: '#0032A0',
        className: 'bg-primary-main'
        }, {
        name: 'ultralight',
        hex: '#D6E3FF',
        className: 'bg-primary-ultralight'
        }, {
        name: 'faded',
        hex: '#0E68FF66',
        className: 'bg-primary-faded'
      }]
    }, { 
      name: 'Secondary',
      colors: [{
          name: 'main',
          hex: '#00A3E0',
          className: 'bg-secondary-main'
        }, {
          name: 'faded',
          hex: '#00A3E080',
          className: 'bg-secondary-faded'
      }]
    }, { 
      name: 'Alternative',
      colors: [
        {
          name: 'pardo',
          hex: '#866D4B',
          className: 'bg-pardo'
        }, {
          name: 'gold',
          hex: '#AD7C59',
          className: 'bg-gold'
        }, {
          name: 'Dark Orange',
          hex: '#B15C37',
          className: 'bg-dark-orange'
        }, {
          name: 'Light Orange',
          hex: '#E2C070',
          className: 'bg-light-orange'
        }, {
          name: 'Prefermember Blue',
          hex: '#072241',
          className: 'bg-prefermember-blue'
        }
      ]
    }, { 
      name: 'Background',
      colors: [
        {
          name: 'Light Blue',
          hex: '#EFF5FF',
          className: 'bg-bg-light-blue'
        }, {
          name: 'paper',
          hex: '#FCFCFC',
          className: 'bg-bg-paper'
        }
      ]
    }, { 
      name: 'Warning',
      colors: [
        {
          name: 'main',
          hex: '#FFC82C',
          className: 'bg-warning-main'
        }, {
          name: 'faded',
          hex: '#FFC82C26',
          className: 'bg-warning-faded'
        }
      ]
    }, { 
      name: 'Error',
      colors: [
        {
          name: 'main',
          hex: '#D52525',
          className: 'bg-error-main'
        }, {
          name: 'faded',
          hex: '#D5252526',
          className: 'bg-error-faded'
        }
      ]
    }, { 
      name: 'Success',
      colors: [
        {
          name: 'main',
          hex: '#0C7E3E',
          className: 'bg-success-main'
        }, {
          name: 'faded',
          hex: '#0C7E3E26',
          className: 'bg-success-faded'
        }
      ]
    }, { 
      name: 'Grey',
      colors: [
        {
          name: '800',
          hex: '#121212',
          className: 'bg-grey-800'
        }, {
          name: '700',
          hex: '#333333',
          className: 'bg-grey-700'
        }, {
          name: '600',
          hex: '#666666',
          className: 'bg-grey-600'
        }, {
          name: '500',
          hex: '#999999',
          className: 'bg-grey-500'
        }, {
          name: '400',
          hex: '#AAAAAB',
          className: 'bg-grey-400'
        }, {
          name: '300',
          hex: '#CCCCCB',
          className: 'bg-grey-300'
        }, {
          name: '200',
          hex: '#DBDAD8',
          className: 'bg-grey-200'
        }, {
          name: '100',
          hex: '#EFEFEE',
          className: 'bg-grey-100'
        }, {
          name: '50',
          hex: '#FFFFFF',
          className: 'bg-grey-50'
        }
      ]
    }, { 
      name: 'Fares',
      colors: [
        {
          name: 'Economy Full',
          hex: '#0D3050',
          className: 'bg-fares-economy-full'
        }
      ]
    }
  ]

  const getCategoryName = ({name}: TColorCategory) => name

  const getCategoryColors = ({colors}: TColorCategory) => colors

  const getcolorName = ({name}: TColor) => name

  const getcolorHex = ({hex}: TColor) => hex

  const getcolorClass = ({className}: TColor) => className
</script>

<Heading title="Colors" subtitle="Foundations" bg="bg-fares-economy-full"></Heading>
<div class="container">
  {#each colorCategories as category}
    <DsHeading>{getCategoryName(category)}</DsHeading>
    {@const colorsFromCategory = getCategoryColors(category)}
    <ColorsContainer>
      {#each colorsFromCategory as colorObject}
        <ColorShowcase color="{getcolorName(colorObject)}" hex="{getcolorHex(colorObject)}" bg="{getcolorClass(colorObject)}"></ColorShowcase>
      {/each}
    </ColorsContainer>
  {/each}
</div>
