<script lang="ts">
  import Menu from 'lucide-svelte/icons/menu';
  import Search from 'lucide-svelte/icons/search';
  import * as Sheet from "$lib/components/ui/sheet";
  import { Button } from "$lib/components/ui/button/index.js";
</script>
 
<Sheet.Root>
 <Sheet.Trigger asChild let:builder>
  <nav class="flex items-center justify-between flex-nowrap bg-white dark:bg-[#101010] sticky z-10 top-0 p-2">
  <div class="flex items-center text-black dark:text-white mr-6">
    <Button builders={[builder]} variant="ghost"
    size="icon" aria-label="Open menu">
      <Menu />
    </Button>
    <span class="font-medium text-xl ml-2.5">Kruistz's Page</span>
    </div>
    <Button variant="ghost" size="icon" aria-label="Search">
      <Search />
    </Button>
</nav>
 </Sheet.Trigger>
 <Sheet.Content side="left">
  <Sheet.Header>
   <Sheet.Title>Edit profile</Sheet.Title>
   <Sheet.Description>
    Make changes to your profile here. Click save when you're done.
   </Sheet.Description>
  </Sheet.Header>
  <Sheet.Footer>
   <Sheet.Close asChild let:builder>
    <Button builders={[builder]} type="submit">Save changes</Button>
   </Sheet.Close>
  </Sheet.Footer>
 </Sheet.Content>
</Sheet.Root>

<section class="text-gray-600">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
      <h1 class="text-3xl mb-4 font-medium text-gray-900">Hello, I'm Kruistz!</h1>
      <p class="mb-8 leading-relaxed">I'm an 17 years old schoolboy who likes to code and take some pictures. This is where I talk about things and post the photos that I took.</p>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
  </div>
</section>