<svelte:head>
  <title>Typography · Copa Airlines Web Design System</title>
</svelte:head>

<script lang="ts">
  import Heading from '../components/heading.svelte';
  import TextShowcase from '../components/text-showcase.svelte';
</script>

<Heading title="Typography" subtitle="Foundations" bg="fares-economy-full"></Heading>
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
    <TextShowcase prefix="text" size="u6">
      <p class="text-u6 uppercase">U6</p>
    </TextShowcase>
    <TextShowcase prefix="text" size="u5">
      <p class="text-u5 uppercase">u5</p>
    </TextShowcase>
    <TextShowcase prefix="text" size="u4">
      <p class="text-u4 uppercase">u4</p>
    </TextShowcase>
    <TextShowcase prefix="text" size="u3">
      <p class="text-u3 uppercase">u3</p>
    </TextShowcase>
    <TextShowcase prefix="text" size="u2">
      <p class="text-u2 uppercase">u2</p>
    </TextShowcase>
    <TextShowcase prefix="text" size="u1">
      <p class="text-u1 uppercase">u1</p>
    </TextShowcase>
    <TextShowcase prefix="text" size="base">
      <p class="text-base uppercase">base</p>
    </TextShowcase>
    <TextShowcase prefix="text" size="d1">
      <p class="text-d1 uppercase">d1</p>
    </TextShowcase>
    <TextShowcase prefix="text" size="u6">
      <p class="text-d2 uppercase">d2</p>
    </TextShowcase>
    <TextShowcase prefix="text" size="d3">
      <p class="text-d3 uppercase">d3</p>
    </TextShowcase>
  </div>
  <h3 class="mt-24 mb-8">Font Size Sufixes</h3>
  <div class="flex flex-wrap items-baseline gap-base">
    <code>76-80</code>
    <code>66-72</code>
    <code>60-64</code>
    <code>56-64</code>
    <code>52-56</code>
    <code>48-64</code>
    <code>44-48</code>
    <code>40-48</code>
    <code>36-40</code>
    <code>32-40</code>
    <code>30-40</code>
    <code>30-32</code>
    <code>28-32</code>
    <code>24-32</code>
    <code>20-32</code>
    <code>20-24</code>
    <code>18-24</code>
    <code>16-24</code>
    <code>14-20</code>
    <code>12-16</code>
  </div>
  <h3 class="mt-24 mb-8">Letter Spacing Sufixes</h3>
  <p>R stands for rem values</p>
  <div class="flex flex-wrap items-baseline gap-base track">
    <code>0</code>
    <code>053</code>
    <code>063</code>
    <code>075</code>
    <code>088</code>
    <code>094</code>
    <code>1</code>
    <code>1025</code>
    <code>1033</code>
    <code>1042</code>
    <code>105</code>
    <code>1083</code>
    <code>2017</code>
    <code>2021</code>
    <code>205</code>
    <code>2061</code>
    <code>3</code>
    <code>r001</code>
    <code>r0018</code>
    <code>r0025</code>
    <code>r003</code>
    <code>r0033</code>
    <code>r004</code>
    <code>r0045</code>
    <code>r005</code>
    <code>r0054</code>
    <code>r006</code>
  </div>
</section>
<section class="container">
  <h2>Headings</h2>
  <p>Heading work using the proper tag, but in case you want to use the styles on another tag you can use <code>heading-[1-4]</code> classnames.</p>
  <p>To check how headings behave on different screen sizes please resize this window.</p>
  <div class="flex flex-wrap items-end my-24 gap-base">
    <div>
      <h1>Heading 1</h1>
      <code>heading-1</code>
    </div>
    <div>
      <h2>Heading 2</h2>
      <code>heading-2</code>
    </div>
    <div>
      <h3>Heading 3</h3>
      <code>heading-3</code>
    </div>
    <div>
      <h4>Heading 4</h4>
      <code>heading-4</code>
    </div>
  </div>
</section>
<section class="container">
  <h2>Display text</h2>
  <div class="flex flex-wrap items-end my-24 gap-base">
    <div>
      <div class="display-bg">Display big</div>
      <code>display-bg</code>
    </div>
    <div>
      <div class="display">Display normal</div>
      <code>display</code>
    </div>
    <div>
      <div class="display-sm">Display small</div>
      <code>display-sm</code>
    </div>
    <div>
      <div class="display-tn">Display tiny</div>
      <code>display-tn</code>
    </div>
  </div>
</section>
<section class="container">
  <h2>Body Text Variants</h2>
  <div class="flex flex-wrap items-end my-24 gap-base">
    <div>
      <p class="body-caption-lg">Caption large</p>
      <code>body-caption-lg</code>
    </div>
    <div>
      <p class="body-body-1">Body 1</p>
      <code>body-body-1</code>
    </div>
    <div>
      <p class="body-body-2">Body 2</p>
      <code>body-body-2</code>
    </div>
    <div>
      <p class="body-caption">Caption</p>
      <code>body-caption</code>
    </div>
    <div>
      <p class="body-overline">Overline</p>
      <code>body-overline</code>
    </div>
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