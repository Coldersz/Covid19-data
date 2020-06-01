<template>
  <div class="container mx-auto py-10">
    <div
      class="border m-6 rounded-lg bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
    >
      <div class="sm:flex sm:items-center px-6 py-4">
        <img
          class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
          src="https://api.adorable.io/avatars/193/abott@adorable.png"
          alt
        />
        <div class="text-center sm:text-left sm:flex-grow">
          <div class="mb-4">
            <div class="hover:uppercase">
              <p class="text-xl leading-tight">Jane Doe</p>
            </div>
            <p class="text-sm leading-tight text-grey-dark">Software Developer at SpongeBob LLC.</p>
          </div>
          <div class="flex flex-wrap">
            <button
              class="text-xs font-semibold rounded-full px-4 py-1 mx-3 leading-normal bg-white border border-blue text-blue hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125 hover:skew-y-12"
            >Call</button>
            <button
              class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple-500 hover:text-white transition transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125 hover:-skew-y-12"
            >Message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>
