<template>
  <div>
    <div>
      <h2 class="text-xl">Curated art.</h2>
      <p>Handselected artists worth checking out</p>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 spacy-y-10 mt-10"
    >
      <div>
        <div class="thumbnail mb-4">
          <router-link
            :to="{
              name: 'UserPosts',
              params: { id: 'CKVQv2Fl1BeFS2qCSwSjNXxHeXF3' },
            }"
          >
            <img src="@/assets/imgs/photography.png" alt="photography" />
          </router-link>
        </div>
        <h3 class="mt-2">Via Damay</h3>
        <p class="">Nature, Models, Architecture</p>
      </div>
      <div>
        <div class="thumbnail mb-4">
          <router-link
            :to="{
              name: 'UserPosts',
              params: { id: 'CKVQv2Fl1BeFS2qCSwSjNXxHeXF3' },
            }"
          >
            <img src="@/assets/imgs/valia.png" alt="photography" />
          </router-link>
        </div>
        <h3 class="mt-2">Valia Gontard</h3>
        <p class="">Surf, Lifestyle, Portrait</p>
      </div>
      <div>
        <div class="thumbnail mb-4">
          <router-link
            :to="{
              name: 'UserPosts',
              params: { id: 'CKVQv2Fl1BeFS2qCSwSjNXxHeXF3' },
            }"
          >
            <img src="@/assets/imgs/tony.png" alt="photography" />
          </router-link>
        </div>
        <h3 class="mt-2">Tony Schmidt</h3>
        <p class="">photography, surf, roofing</p>
      </div>
      <div>
        <div class="thumbnail mb-4">
          <router-link
            :to="{
              name: 'UserPosts',
              params: { id: 'CKVQv2Fl1BeFS2qCSwSjNXxHeXF3' },
            }"
          >
            <img src="@/assets/imgs/graphic.png" alt="photography" />
          </router-link>
        </div>
        <h3 class="mt-2">Moritz Murauer</h3>
        <p class="">Illustrations, Typo, photography</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.thumbnail {
  width: 100%;
  max-height: 250px;
  overflow: hidden;
  border-radius: 10px;
  min-height: 100%;
}
</style>
