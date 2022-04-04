<script lang="ts">
</script>

<main>
	<div class="container bg-bg-paper py-96">
    <section id="headings">
      <h3 class="text-primary-main mb-24">Regular Title Hierarchy styles (H1 - H4)</h3>
      <div class="flex justify-between items-baseline">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      </div>
    </section>
    <section id="display">
      <h3 class="text-primary-main mt-64 mb-24">Display Text styles</h3>
      <div class="flex justify-between items-baseline">
        <div class="cm-display--big">Display Big</div>
        <div class="cm-display--normal">Display Normal</div>
        <div class="cm-display--small">Display Small</div>
        <div class="cm-display--tiny">Display Tiny</div>
      </div>
    </section>
    <section id="text-variants">
      <h3 class="text-primary-main mt-64 mb-24">Body Text variants</h3>
      <div class="flex justify-between items-baseline">
        <p class="text-20-32">Caption Large</p>
        <p class="text-12-16">Caption</p>
        <p>Body 1</p>
        <p class="text-14-20">Body 2</p>
        <p class="cm-overline">Overline</p>
      </div>
    </section>
    <section id="text-override">
      <h3 class="text-primary-main mt-64 mb-24">Body Text style overrides</h3>
      <div class="flex justify-between items-baseline p-8">
        <p>Body Large / Primary</p>
        <p class="text-14-20">Body Normal / Primary</p>
        <p class="text-12-16">Body small / Primary</p>
      </div>
      <div class="flex justify-between items-baseline p-8">
        <em>Body Large / Emphasis</em>
        <em class="text-14-20">Body Normal / Emphasis</em>
        <em class="text-12-16">Body small / Emphasis</em>
      </div>
      <div class="flex justify-between items-baseline p-8">
        <a href="#">Body Large / Link</a>
        <a href="#" class="text-14-20">Body Normal / Link</a>
        <a href="#" class="text-12-16">Body small / Link</a>
      </div>
      <div class="flex justify-between items-baseline p-8">
        <a href="#" class="text-grey-600 underline">Body Large / Link Secondary</a>
        <a href="#" class="text-14-20 text-grey-600 underline">Body Normal / Link Secondary</a>
        <a href="#" class="text-12-16 text-grey-600 underline">Body small / Link Secondary</a>
      </div>
      <div class="flex justify-between items-baseline bg-primary-main p-8 rounded-t-lg">
        <p class="text-grey-200">Body Large / Primary Invert</p>
        <p class="text-14-20 text-grey-200">Body Normal / Primary Invert</p>
        <p class="text-12-16 text-grey-200">Body small / Primary Invert</p>
      </div>
      <div class="flex justify-between items-baseline bg-primary-main p-8">
        <em class="text-grey-50">Body Large / Emphasis Invert</em>
        <em class="text-14-20 text-grey-50">Body Normal / Emphasis Invert</em>
        <em class="text-12-16 text-grey-50">Body small / Emphasis Invert</em>
      </div>
      <div class="flex justify-between items-baseline bg-primary-main p-8">
        <a href="#" class="text-grey-200 underline">Body Large / Link Invert</a>
        <a href="#" class="text-14-20 text-grey-200 underline">Body Normal / Link Invert</a>
        <a href="#" class="text-12-16 text-grey-200 underline">Body small / Link Invert</a>
      </div>
      <div class="flex justify-between items-baseline bg-primary-main p-8 rounded-b-lg">
        <a href="#" class="text-grey-200 underline">Body Large / Link Secondary Invert</a>
        <a href="#" class="text-14-20 text-grey-200 underline">Body Normal / Link Secondary Invert</a>
        <a href="#" class="text-12-16 text-grey-200 underline">Body small / Link Secondary Invert</a>
      </div>
      <div class="flex justify-between items-baseline mt-24 p-8">
        <p class="text-20-32 text-grey-700">Caption Large / Primary</p>
        <p class="text-grey-700">Caption Normal / Primary</p>
        <p class="text-14-20 text-grey-700">Caption small / Primary</p>
        <p class="text-12-16 text-grey-700">Caption tiny / Primary</p>
      </div>
      <div class="flex justify-between items-baseline p-8">
        <p class="text-20-32 text-grey-600">Caption Large / Secondary</p>
        <p class="text-grey-600">Caption Normal / Secondary</p>
        <p class="text-14-20 text-grey-600">Caption small / Secondary</p>
        <p class="text-12-16 text-grey-600">Caption tiny / Secondary</p>
      </div>
      <div class="flex justify-between items-baseline bg-primary-main p-8 rounded-t-lg">
        <p class="text-20-32 text-grey-50">Caption Large / Primary Invert</p>
        <p class="text-grey-50">Caption Normal / Primary Invert</p>
        <p class="text-14-20 text-grey-50">Caption small / Primary Invert</p>
        <p class="text-12-16 text-grey-50">Caption tiny / Primary Invert</p>
      </div>
      <div class="flex justify-between items-baseline bg-primary-main p-8 rounded-b-lg">
        <p class="text-20-32 text-grey-200">Caption Large / Secondary Invert</p>
        <p class="text-grey-200">Caption Normal / Secondary Invert</p>
        <p class="text-14-20 text-grey-200">Caption small / Secondary Invert</p>
        <p class="text-12-16 text-grey-200">Caption tiny / Secondary Invert</p>
      </div>
      <div class="flex justify-between items-baseline mt-24 p-8">
        <p class="cm-overline">Overline Normal / Primary</p>
        <p class="text-12-16">Overline small / Primary</p>
      </div>
      <div class="flex justify-between items-baseline p-8">
        <em class="cm-overline">Overline Normal / Emphasis</em>
        <em class="text-12-16">Overline small / Emphasis</em>
      </div>
      <div class="flex justify-between items-baseline bg-primary-main p-8 rounded-md">
        <p class="cm-overline text-grey-50">Overline Normal / Primary Invert</p>
        <p class="text-12-16 text-grey-50">Overline small / Primary Invert</p>
      </div>
    </section>
    <section id="buttons">
      <h3 class="text-primary-main mt-64 mb-24 ">Base Component</h3>
      <div class='my-24 flex justify-between'>
        <button class="cm-button--giant" type="button">Giant</button>
        <button class="cm-button--giant cm-button--ultradark" type="button">Giant</button>
        <button class="cm-button--giant cm-button--light" type="button">Giant</button>
        <button class="cm-button--giant cm-button--outline--primary" type="button">Giant</button>
        <button class="cm-button--giant cm-button--outline--light" type="button">Giant</button>
      </div>
      <div class='my-24 flex justify-between'>
        <button class="py-12" type="button">Large</button>
        <button class="py-12 cm-button--ultradark" type="button">Large</button>
        <button class="py-12 cm-button--light" type="button">Large</button>
        <button class="py-12 cm-button--outline--primary" type="button">Large</button>
        <button class="py-12 cm-button--outline--light" type="button">Large</button>
      </div>
      <div class="my-24 flex justify-between">
        <button type="button">default</button>
        <button class="cm-button--ultradark" type="button">default</button>
        <button class="cm-button--light" type="button">default</button>
        <button class="cm-button--outline--primary" type="button">default</button>
        <button class="cm-button--outline--light" type="button">default</button>
      </div>
      <div class='my-24 flex justify-between'>
        <button class="cm-button--slim" type="button">Slim</button>
        <button class="cm-button--slim cm-button--ultradark" type="button">Slim</button>
        <button class="cm-button--slim cm-button--light" type="button">Slim</button>
        <button class="cm-button--slim cm-button--outline--primary" type="button">Slim</button>
        <button class="cm-button--slim cm-button--outline--light" type="button">Slim</button>
      </div>
      <div class="flex justify-between my-24">
        <div class='flex flex-col gap-24 items-center p-24'>
          <button class="cm-button--giant cm-button--outline--grey" type="button">Giant</button>
          <button class="py-12 cm-button--outline--grey" type="button">Large</button>
          <button class="cm-button--outline--grey" type="button">default</button>
          <button class="cm-button--slim cm-button--outline--grey" type="button">Slim</button>
        </div>
        <div class='flex flex-col gap-24 items-center bg-primary-ultradark p-24 rounded-lg'>
          <button class="cm-button--giant cm-button--outline--invert" type="button">Giant</button>
          <button class="py-12 cm-button--outline--invert" type="button">Large</button>
          <button class="cm-button--outline--invert " type="button">default</button>
          <button class="cm-button--slim cm-button--outline--invert" type="button">Slim</button>
        </div>
        <div class="flex flex-col gap-24 items-center p-24">
          <button class="cm-button--giant cm-button--transparent" type="button">Giant</button>
          <button class="py-12 cm-button--transparent" type="button" disabled>Large</button>
          <button class="cm-button--transparent" type="button">default</button>
          <button class="cm-button--slim cm-button--transparent" type="button">Slim</button>
        </div>
        <div class='flex flex-col gap-24 items-center p-24'>
          <button class="cm-button--giant cm-button--transparent--grey" type="button">Giant</button>
          <button class="py-12 cm-button--transparent--grey" type="button">Large</button>
          <button class="cm-button--transparent--grey" type="button">default</button>
          <button class="cm-button--slim cm-button--transparent--grey" type="button">Slim</button>
        </div>
        <div class='flex flex-col gap-24 items-center p-24 bg-primary-ultradark rounded-lg'>
          <button class="cm-button--giant cm-button--transparent--invert" type="button">Giant</button>
          <button class="py-12 cm-button--transparent--invert" type="button">Large</button>
          <button class="cm-button--transparent--invert" type="button">default</button>
          <button class="cm-button--slim cm-button--transparent--invert" type="button">Slim</button>
        </div>
      </div>
      <div class='flex justify-between items-center my-24'>
        <button class="cm-button--giant cm-button--rounded" type="button">Giant</button>
        <button class="py-12 cm-button--rounded" type="button">Large</button>
        <button class="cm-button--rounded" type="button">default</button>
        <button class="cm-button--slim cm-button--rounded" type="button">Slim</button>
      </div>
    </section>
  </div>
</main>