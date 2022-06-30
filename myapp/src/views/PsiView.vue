<template>

    <div class="container-fluid py-5">
        <div class="container">
            <div class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                <h6 v-if="lang.value == 'srb'" class="text-primary text-uppercase">Psi</h6>
                <h6 v-else-if="lang.value == 'eng'" class="text-primary text-uppercase">Dogs</h6>

                <h1 v-if="lang.value == 'srb'" class="display-5 text-uppercase mb-0">Lista svih pasa koji se nalaze u nasem azilu</h1>
                <h1 v-else-if="lang.value == 'eng'" class="display-5 text-uppercase mb-0">List of all dogs in our animal shelter</h1>
            </div>

            <div class="input-group">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control" />
                </div>
                <button v-if="lang.value == 'srb'" type="button" class="btn btn-primary">
                    Pretrazi<i class="fas fa-search"></i>
                </button>
                <button v-else-if="lang.value == 'eng'" type="button" class="btn btn-primary">
                    Search<i class="fas fa-search"></i>
                </button>
            </div>
            <br>

            <div v-if="lang.value == 'srb'" class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    Sortiraj po nazivu
                </label>
            </div>
            <div v-if="lang.value == 'srb'" class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">
                    Sortiraj po starosti
                </label>
            </div>
            <div v-if="lang.value == 'eng'" class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    Sort by name
                </label>
            </div>
            <div v-if="lang.value == 'eng'" class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">
                    Sort by age
                </label>
            </div>


            <br>

            <div class="row g-5">
                <div v-for='animal in myanimals' :key="animal.id">
                     <AnimalPreviewComponent :myanimal='animal'></AnimalPreviewComponent> 
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
.form-check{
    margin-left: 30px;
}
</style>

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
