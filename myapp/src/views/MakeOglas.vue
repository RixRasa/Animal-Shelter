<template>
    <div class="container-fluid pt-5">
        <div class="container">
            <div class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                <h6 class="text-primary text-uppercase">Oglas</h6>
                <h1 class="display-5 text-uppercase mb-0">Ostavite oglas vaseg izgubljenog ljubimca</h1>
            </div>
            <div class="row g-5">
                <div class="col-lg-7">
                    <form>
                        <div class="row g-3">
                            <div class="col-12">
                                <input class="form-control bg-light border-0 px-4" placeholder="Naziv/Name" style="height: 55px;" v-model="ime">
                            </div>
                            <div class="col-12">
                                <input class="form-control bg-light border-0 px-4" placeholder="Kontakt/Contact" style="height: 55px;" v-model="kontakt">
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="Naslov/Title" style="height: 55px;" v-model="naslov">
                            </div>
                            <div class="col-12">
                                <textarea class="form-control bg-light border-0 px-4 py-3" rows="8" placeholder="Tekst/Text" v-model="tekst"></textarea>
                            </div>
                            <div class="col-12">
                                <button @click='addOglas()' class="btn btn-primary w-100 py-3" type="submit">Objavite Oglas</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import allOglasi from '../data/oglasi.js'

export default{
    name : "MakeOglas",
    data(){
        return{
            kontakt:'',
            naslov:'',
            tekst:'',
            naziv:'',
            oglasi:[],
        }
    },
    methods:{
        addOglas(){
            var today = new Date();
            var dan = today.getDay();
            var mesec = today.getMonth();
            var godina = today.getFullYear();
            var datum = dan + "-" + mesec + "-" + godina;

            this.oglasi.push({'naziv':this.naziv, 'naslov':this.naslov,'opis':this.tekst,'kontakt':this.kontakt,'datum':datum})
            localStorage.setItem("allOglasi",JSON.stringify(this.oglasi))


        }
    },
    created(){
        if(localStorage.getItem('allOglasi')==null){
                localStorage.setItem('allOglasi', JSON.stringify(allOglasi))
        }
        this.oglasi=JSON.parse(localStorage.getItem("allOglasi"))
    }

}
</script>
