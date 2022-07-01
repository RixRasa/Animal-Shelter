<template>
      <div class="container-fluid py-5">
        <div class="container">
            <div class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                <h6 v-if="lang.value == 'srb'" class="text-primary text-uppercase">Aktuelnosti</h6>
                <h1 v-if="lang.value == 'srb'" class="display-5 text-uppercase mb-0">Najskorije aktuelnosti sa naseg sajta</h1>
                <h6 v-if="lang.value == 'eng'" class="text-primary text-uppercase">Latest News</h6>
                <h1 v-if="lang.value == 'eng'" class="display-5 text-uppercase mb-0">Latest News From Our Site</h1>
            </div>



            <div class="row">
                <div v-for='oglas in oglasi' :key="oglas.naziv" class="col-lg-4 col-md-6 col-sm-12 my-3">
                    <OglasPreview :mojOglas='oglas'></OglasPreview>
                </div>
            </div>



            <div class="row g-5">
                <div class="col-lg-6">
                    <div class="blog-item">
                        <div class="row g-0 bg-light overflow-hidden">
                            <div class="col-12 col-sm-5 h-100">
                                <img class="img-fluid h-100" src="img/blog-1.jpg" style="object-fit: cover;">
                            </div>
                            <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="bi bi-bookmarks me-2"></i>Web Design</small>
                                        <small><i class="bi bi-calendar-date me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h5 class="text-uppercase mb-3">Dolor sit magna rebum clita rebum dolor</h5>
                                    <p>Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est stet tempor eos dolor</p>
                                    <a class="text-primary text-uppercase" href="">Read More<i class="bi bi-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="blog-item">
                        <div class="row g-0 bg-light overflow-hidden">
                            <div class="col-12 col-sm-5 h-100">
                                <img class="img-fluid h-100" src="img/blog-2.jpg" style="object-fit: cover;">
                            </div>
                            <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="bi bi-bookmarks me-2"></i>Web Design</small>
                                        <small><i class="bi bi-calendar-date me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h5 class="text-uppercase mb-3">Dolor sit magna rebum clita rebum dolor</h5>
                                    <p>Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est stet tempor eos dolor</p>
                                    <a class="text-primary text-uppercase" href="">Read More<i class="bi bi-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>


<script>
import { lang } from "../data/lang.js";
import OglasPreview from '../components/OglasPreview.vue'
import allOglasi from '../data/oglasi.js'

export default {
    name: "HomeView",
    data() {
        return {
            lang,
            oglasi:[],
            alloglasi: [],
        };
    },
    components:{
        OglasPreview
    },
    created(){
        if(localStorage.getItem('allOglasi')==null){
            localStorage.setItem('allOglasi', JSON.stringify(allOglasi))
            this.alloglasi = JSON.parse(localStorage.getItem('allOglasi'));
        }
        else{
            this.alloglasi = JSON.parse(localStorage.getItem('allOglasi'));
        }

        let poglasi = this.alloglasi;
        let min_index;
        for(let i=0; i<poglasi.length; i++){
            min_index = i; 
            for(let j=i+1; j<poglasi.length; j++){

                var datum1 = poglasi[min_index].datum.split('-');
                var god1 = parseInt(datum1[2]);
                var mesec1 = parseInt(datum1[1]) - 1;
                var dan1 = parseInt(datum1[0]);
                var Date_min_index = new Date(god1, mesec1, dan1);

                var datum2 = poglasi[j].datum.split('-');
                var god2 = parseInt(datum2[2]);
                var mesec2 = parseInt(datum2[1]) - 1;
                var dan2 = parseInt(datum2[0]);
                var Date_j = new Date(god2, mesec2, dan2);

                if(Date_j.getTime() > Date_min_index.getTime())
                    min_index = j;
            }
            let p = poglasi[min_index];
            poglasi[min_index] = poglasi[i];
            poglasi[i] = p;
        }
        
        for(let i=0; i<3; i++){
            this.oglasi.push(poglasi[i]);
        }
    }
};

</script>


