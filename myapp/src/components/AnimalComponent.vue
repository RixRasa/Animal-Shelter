<template>
    <div class="col-lg-12 border">
        <div class="blog-item">
            <div class="row g-0 bg-light overflow-hidden">
                <div class="col-12 col-sm-5 h-100">
                    <img class="img-fluid h-100" :src="myanimal.image_path" style="object-fit: cover;">
                </div>
                <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                    <div class="p-4">
                        <!--<div class="d-flex mb-3">
                            <small class="me-3"><i class="bi bi-bookmarks me-2"></i>Web Design</small>
                            <small><i class="bi bi-calendar-date me-2"></i>01 Jan, 2045</small>
                        </div> -->
                        <h2 class="text-uppercase mb-3" v-if="lang.value == 'srb'">{{ myanimal.nameS }}</h2>
                        <h2 class="text-uppercase mb-3" v-else-if="lang.value == 'eng'">{{ myanimal.nameE }}</h2>
                        <br>

                        <h5 v-if="lang.value == 'srb'">{{ myanimal.descriptionS }}</h5>
                        <h5 v-else-if="lang.value == 'eng'">{{ myanimal.descriptionE }}</h5>
                        <br>
                        <h5 v-if="lang.value == 'srb'">Tezina: {{ myanimal.weight }}</h5>
                        <h5 v-else-if="lang.value == 'eng'">Weight: {{ myanimal.weight }}</h5>
                        <h5 v-if="lang.value == 'srb'">Starost: {{ myanimal.age }}</h5>
                        <h5 v-else-if="lang.value == 'eng'">Age: {{ myanimal.age }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</template>

<style scoped>

img{
    border: 3px solid rgb(0, 85, 255);
}
  
</style>





<script>
import { lang } from "../data/lang.js";
export default {
    name: "AnimalComponent",
    data() {
        return {
            lang
        };
    },
    props: [
        "myanimal"
    ]
};
</script>