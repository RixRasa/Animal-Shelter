<template>

    <div class="container-fluid py-5">
        <div class="container">
            <div class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                <h6 v-if="lang.value == 'srb'" class="text-primary text-uppercase">Psi</h6>
                <h6 v-else-if="lang.value == 'eng'" class="text-primary text-uppercase">Dogs</h6>

                <h1 v-if="lang.value == 'srb'" class="display-5 text-uppercase mb-0">Lista svih pasa koji se nalaze u nasem azilu</h1>
                <h1 v-else-if="lang.value == 'eng'" class="display-5 text-uppercase mb-0">List of all dogs in our animal shelter</h1>
            </div>
            <div class="row g-5">
                <div v-for='animal in myanimals' :key="animal.id">
                     <AnimalPreviewComponent :myanimal='animal'></AnimalPreviewComponent> 
                </div>
                
            </div>
        </div>
    </div>


</template>

<script>
import AnimalPreviewComponent from '../components/AnimalPreviewComponent.vue'
import dogs from '../data/dogs'
import { lang } from "../data/lang.js";

export default {
  name: 'HomeView',
  components: {
    AnimalPreviewComponent
  },
  data() {
    return{
      lang,
      myanimals: dogs
    }
  }
}
</script>
