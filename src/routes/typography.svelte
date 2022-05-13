<svelte:head>
  <title>Typography · Copa Airlines Web Design System</title>
</svelte:head>

<script lang="ts">
  import Heading from '../components/heading.svelte';
  import TextShowcase from '../components/text-showcase.svelte';

  type classAndNames = {
    className: string
    name: string
  }

  const responsiveFontClasses: string[] = ['text-u6','text-u5','text-u4','text-u3','text-u2','text-u1','text-base','text-d1','text-d2','text-d3']

  const fontSizeSufixes: string[] = [
    'text-76-80',
    'text-66-72',
    'text-60-64',
    'text-56-64',
    'text-52-56',
    'text-48-64',
    'text-44-48',
    'text-40-48',
    'text-36-40',
    'text-32-40',
    'text-30-40',
    'text-30-32',
    'text-28-32',
    'text-24-32',
    'text-20-32',
    'text-20-24',
    'text-18-24',
    'text-16-24',
    'text-14-20',
    'text-12-16'
  ]

  const letterSpacingSufixes: string[] = [
    'tracking-0',
    'tracking-053',
    'tracking-063',
    'tracking-075',
    'tracking-088',
    'tracking-094',
    'tracking-1',
    'tracking-1025',
    'tracking-1033',
    'tracking-1042',
    'tracking-105',
    'tracking-1083',
    'tracking-2017',
    'tracking-2021',
    'tracking-205',
    'tracking-2061',
    'tracking-3',
    'tracking-r001',
    'tracking-r0018',
    'tracking-r0025',
    'tracking-r003',
    'tracking-r0033',
    'tracking-r004',
    'tracking-r0045',
    'tracking-r005',
    'tracking-r0054',
    'tracking-r006',
  ]

  const headingClasses: string[] = ['heading-1','heading-2','heading-3','heading-4']

  const displayClasses: classAndNames[] = [
    {
      className: 'display-bg',
      name: 'Display Big'
    },
    {
      className: 'display',
      name: 'Display Nomral'
    },{
      className: 'display-sm',
      name: 'Display Small'
    },{
      className: 'display-tn',
      name: 'Display Tiny'
    },
  ]

  const textVariantsClasses: classAndNames[] = [
    {
      className: 'body-caption-lg',
      name: 'Caption large'
    }, {
      className: 'body-body-1',
      name: 'Body 1'
    }, {
      className: 'body-body-2',
      name: 'Body 2'
    }, {
      className: 'body-caption',
      name: 'Caption'
    }, {
      className: 'body-overline',
      name: 'OVERLINE'
    }
  ]
</script>

<Heading title="Typography" subtitle="Foundations" bg="bg-fares-economy-full"></Heading>
<section class="container">
  <h2>Type Families</h2>
  <p>
    Copa uses two type families for its texts across the UI, Gilroy and Suisse. These fonts have well-defined uses across the digital ecosystem and work together to provide the best readability possible while clearly identifying our UI with Copa’s brand.
  </p>
  <div class="grid grid-cols-2 my-32 gap-base">
    <div class="border-t">
      <div class="text-u6 font-heading pt-16">Gilroy</div>
      <code>font-heading</code>
      <div><span class="font-heading">Regular</span> <span class="font-heading font-medium">Medium</span> <span class="font-heading font-bold">Bold</span></div>
      <p class="font-heading">For use in titles and large display text in general.</p>
    </div>
    <div class="border-t">
      <div class="text-u6 pt-16">Suisse Int'l</div>
      <code>font-body</code>
      <div><span class="font-light">Light</span> <span>Regular</span> <span class="font-medium">Medium</span> <span class="font-semibold">Semibold</span></div>
      <p>For use in smaller text where readability is crucial. Also applies for long paragraphs.</p>
    </div>
  </div>
</section>
<section class="container">
  <h2>Typographic Scale</h2>
  <p>All text styles are based on this typographic scale. The scale dictates <strong>font sizes, line heights and character spacing</strong>.  The scale assumes a Base size of 16px and grows upward 6 values and downward 3 values. There’s a different scale for each breakpoint and values change accordingly (e.g. U6 in large is 76px, while in Xsmall is 36px).</p>
  <p>To check sizes switch to mobile views</p>
  <h3 class="mt-24">Classes</h3>
  <div class="flex flex-wrap items-end gap-base">
    {#each responsiveFontClasses as className}
      <div>
        <p class="{className} uppercase">{className.replace('text-','')}</p>
        <code>{className}</code>
      </div>
    {/each}
  </div>
  <h3 class="mt-24 mb-8">Font Size Sufixes</h3>
  <div>
    {#each fontSizeSufixes as sufix}
      <div class="m-base">
        <p class="{sufix}">{sufix.replace('text', 'Size').replace('-', ' ').replace('-', ' Letter ')}</p>
        <code>{sufix.replace('text-','')}</code>
      </div>
    {/each}
  </div>
  <h3 class="mt-24 mb-8">Letter Spacing Sufixes</h3>
  <p>R stands for rem values</p>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-baseline gap-base track">
    {#each letterSpacingSufixes as sufix}
    <div class="m-base">
      <p class="{sufix} uppercase">{sufix.replace('-', ' ')}</p>
      <code>{sufix.replace('tracking-','')}</code>
    </div>
    {/each}
  </div>
</section>
<section class="container">
  <h2>Headings</h2>
  <p>Heading work using the proper tag, but in case you want to use the styles on another tag you can use <code>heading-[1-4]</code> classnames.</p>
  <p>To check how headings behave on different screen sizes please resize this window.</p>
  <div class="flex flex-wrap items-end my-24 gap-base">
    {#each headingClasses as className}
      <div>
        <div class="{className} capitalize">{className.replace('-', ' ')}</div>
        <code>{className}</code>
      </div>
    {/each}
  </div>
</section>
<section class="container">
  <h2>Display text</h2>
  <div class="flex flex-wrap items-end my-24 gap-base">
    {#each displayClasses as className}
      <div>
        <div class="{className.className} capitalize">{className.name}</div>
        <code>{className.className}</code>
      </div>
    {/each}
  </div>
</section>
<section class="container">
  <h2>Body Text Variants</h2>
  <div class="flex flex-wrap items-end my-24 gap-base">
    {#each textVariantsClasses as className}
      <div>
        <div class="{className.className} capitalize">{className.name}</div>
        <code>{className.className}</code>
      </div>
    {/each}
  </div>
</section>
<section class="container">
  <h2>Body Text Overrides</h2>
  <p>You can mix any of the styles bellow</p>
  <h3 class="mt-16">Body Text</h3>
  <p>The basic styles applies to the <code>p</code> tag</p>
  <p>Text not included in this page also apply the same styles</p>
  <h4 class="mt-8">Sizes</h4>
  <div class="flex flex-wrap items-end my-8 gap-base">
    <TextShowcase prefix="body" size="lg">
      <p class="body-lg">Body Large</p>
    </TextShowcase>
    <TextShowcase prefix="body" size="">
      <p class="body">Body Normal</p>
    </TextShowcase>
    <TextShowcase prefix="body" size="sm">
      <p class="body-sm">Body Small</p>
    </TextShowcase>
  </div>
  <h4 class="mt-8">Variants</h4>
  <div class="flex flex-wrap items-end my-8 gap-base">
    <TextShowcase prefix="body" size="">
      <p class="body p-8">Body Primary</p>
    </TextShowcase>
    <TextShowcase prefix="body" size="invert">
      <p class="body-invert p-8 bg-primary-ultradark">Body Invert</p>
    </TextShowcase>
  </div>
  <h3 class="mt-16">Captions</h3>
  <h4 class="mt-8">Sizes</h4>
  <div class="flex flex-wrap items-end my-8 gap-base">
    <TextShowcase prefix="caption" size="lg">
      <p class="caption-lg">Caption Large</p>
    </TextShowcase>
    <TextShowcase prefix="caption" size="">
      <p class="caption">Caption Normal</p>
    </TextShowcase>
    <TextShowcase prefix="caption" size="sm">
      <p class="caption-sm">Caption Small</p>
    </TextShowcase>
    <TextShowcase prefix="caption" size="tn">
      <p class="caption-tn">Caption Tiny</p>
    </TextShowcase>
  </div>
  <h4 class="mt-8">Variants</h4>
  <div class="flex flex-wrap items-end my-8 gap-base">
    <TextShowcase prefix="caption" size="">
      <p class="caption p-8">Caption Primary</p>
    </TextShowcase>
    <TextShowcase prefix="caption" size="secondary">
      <p class="caption-secondary p-8">Caption Secondary</p>
    </TextShowcase>
    <TextShowcase prefix="caption" size="invert">
      <p class="caption-invert p-8 bg-primary-ultradark">Caption Invert</p>
    </TextShowcase>
    <TextShowcase prefix="caption" size="secondary-invert">
      <p class="caption-secondary-invert p-8 bg-primary-ultradark">Caption Secondary Invert</p>
    </TextShowcase>
  </div>
  <h3 class="mt-16">Overline Text</h3>
  <h4 class="mt-8">Sizes</h4>
  <div class="flex flex-wrap items-end my-8 gap-base">
    <TextShowcase prefix="overln" size="">
      <p class="overln">Overline Normal</p>
    </TextShowcase>
    <TextShowcase prefix="overln" size="sm">
      <p class="overln overln-sm">Overline Small</p>
    </TextShowcase>
  </div>
  <h4 class="mt-8">Variants</h4>
  <div class="flex flex-wrap items-end my-8 gap-base">
    <TextShowcase prefix="overln" size="">
      <p class="overln p-8">Overline Primary</p>
    </TextShowcase>
    <TextShowcase prefix="overln" size="invert">
      <p class="overln overln-invert p-8 bg-primary-ultradark">Overline Invert</p>
    </TextShowcase>
  </div>
  <h3 class="mt-16">Emphasis</h3>
  <p>The basic styles applies to the <em>em</em> tag</p>
  <h4 class="mt-8">Variants</h4>
  <div class="flex flex-wrap items-end my-8 gap-base">
    <TextShowcase prefix="emphasis" size="">
      <div class="emphasis p-8">Emphasis</div>
    </TextShowcase>
    <TextShowcase prefix="emphasis" size="invert">
      <div class="emphasis emphasis-invert p-8 bg-primary-ultradark">Emphasis Invert</div>
    </TextShowcase>
    <TextShowcase prefix="emphasis" size="overline">
      <div class=" emphasis overln emphasis-overline p-8">Emphasis Overline</div>
    </TextShowcase>
  </div>
  <h3 class="mt-16">Links</h3>
  <p>The basic styles applies to the <a href="#">a</a> tag</p>
  <h3>Variants</h3>
  <div class="flex flex-wrap items-end my-8 gap-base">
    <TextShowcase prefix="link" size="">
      <div class="link p-8">Link Primary</div>
    </TextShowcase>
    <TextShowcase prefix="link" size="invert">
      <div class="link link-invert p-8 bg-primary-ultradark">Link Primary Invert</div>
    </TextShowcase>
    <TextShowcase prefix="link" size="secondary">
      <div class="link link-secondary p-8">Link Secondary Invert</div>
    </TextShowcase>
    <TextShowcase prefix="link" size="secondary-invert">
      <div class="link link-secondary-invert p-8 bg-primary-ultradark">Link Secondary Invert</div>
    </TextShowcase>
  </div>
</section>