<template>
  <div class="rounded-md border-creator ">
    <div class="flex justify-between">
      <div class="w-96 m-8">
        <h2 class="text-2xl">Become a creator.</h2>
        <p class="text-sm leading-relaxed mt-3">
          We’re a network of indonesian based artists with a vision of creating
          a platform free of data trading or 3rd companies. This is supposed to
          be a space for inspiration and exploring new things. Help us make that
          vision come to reality!
        </p>
        <button class="btn-outline rounded-full mt-8">
          find out more
        </button>
      </div>
      <div class="mr-20">
        <img
          class="max-h-72"
          src="@/assets/imgs/highfive.png"
          alt="illustration highfive"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.border-creator {
  border: 1px var(--primary) solid;
}
</style>
