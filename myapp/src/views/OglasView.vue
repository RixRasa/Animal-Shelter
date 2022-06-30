<template>
    <div class="container-fluid py-5">
      <div class="container">
          <div class="row gx-5">
              <div class="col-lg-6 col-sm-4 bg-light" style="">
                  <div class=" border-5 border-primary  mb-5">
                      <div class="d-flex justify-content-between">
                        <h6 class="text-primary text-uppercase">Oglas Nestanka</h6>
                        <small><i class="bi bi-calendar-date me-2"></i>{{oglas.datum}}</small>
                      </div><br>  
                      <h3 class="display-5 text-uppercase mb-0">{{oglas.naslov}}</h3>
                  </div>
                  <div class="bg-light" style="width:70%">
                      <div class="tab-content" id="pills-tabContent">
                          <div class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                              <p class="mb-0">{{oglas.opis}}</p>
                          </div>
                      </div>
                  </div>
                  <br><br>
                  <h5 class="text-body mb-4">{{oglas.kontakt}}</h5>
              </div>
          </div>
      </div>
  </div>

</template>

<script>
import allOglasi from '../data/oglasi.js'

export default{
    name : "OglasView",
    data(){
        return{
            oglasi:[],
            oglas:{},
        }
    },
    created(){
        var naziv = String(this.$route.params.naziv)
       
        if(localStorage.getItem("allOglasi")==null){
            localStorage.setItem(JSON.stringify(allOglasi));
        }
        this.oglasi = JSON.parse(localStorage.getItem('allOglasi'));
        
        this.oglas = this.oglasi.find(oglas=>oglas.naziv==naziv);
        
    },

}
</script>
