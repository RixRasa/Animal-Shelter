<template>
    <div class="container-fluid py-5">
        <div class="container">
            <!--<div class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                <h6 class="text-primary text-uppercase">Latest Blog</h6>
                <h1 class="display-5 text-uppercase mb-0">Latest Articles From Our Blog Post</h1>
            </div> -->
            <div class="row g-0 bg-light overflow-hidden border">
                <div class="col-12 col-md-5 col-sm-12 h-100">
                    <img src="djus.jpg">
                </div>
                <div class="col-12 col-md-7 col-sm-12 h-100 d-flex flex-column justify-content-center">
                    <div class="p-4">
                        <!--
                        <h2 class="text-uppercase mb-3" v-if="lang.value == 'srb'">{{ myanimal.nameS }}</h2>
                        <h2 class="text-uppercase mb-3" v-else-if="lang.value == 'eng'">{{ myanimal.nameE }}</h2>
                        <br>

                        <h5 v-if="lang.value == 'srb'">{{ myanimal.descriptionS }}</h5>
                        <h5 v-else-if="lang.value == 'eng'">{{ myanimal.descriptionE }}</h5>
                        <br>
                        <h5 v-if="lang.value == 'srb'">Tezina: {{ myanimal.weight }}</h5>
                        <h5 v-else-if="lang.value == 'eng'">Weight: {{ myanimal.weight }}</h5>
                        <h5 v-if="lang.value == 'srb'">Starost: {{ myanimal.age }} y/o</h5>
                        <h5 v-else-if="lang.value == 'eng'">Age: {{ myanimal.age }} y/o</h5>  -->


                        <div class="list-group">
                           
                            <div class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                <h4 v-if="lang.value == 'srb'" class="mb-1">Korisnicko ime: {{user.username}}</h4>
                                <h4 v-if="lang.value == 'eng'" class="mb-1">Username: {{user.username}}</h4>
                                </div>
                                <h5 v-if="lang.value == 'srb'"></h5>
                                <h5 v-else-if="lang.value == 'eng'"></h5>
                                <br>
                            </div>
                            <div class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                <h4 v-if="lang.value == 'srb'">Email: {{user.email}}</h4>
                                <h4 v-else-if="lang.value == 'eng'">Email: {{user.email}}</h4>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <h3 v-if="lang.value == 'srb'" class=''>Odglasi</h3>
                <h3 v-if="lang.value == 'eng'" class=''>Adds</h3>
                <div v-for='oglas in mojOglasi' :key="oglas.naziv" class="col-lg-4 col-md-6 col-sm-12 my-3">
                    <OglasPreview :mojOglas='oglas'></OglasPreview>
                </div>
            </div>
            <div class="row">
                <h3 v-if="lang.value == 'srb'" class=''>Komentari</h3>
                <h3 v-if="lang.value == 'eng'" class=''>Comments</h3>
                <div class="col-lg-5 col-sm-12 m-2" v-for='komentar in mojiKomentari' :key="komentar.ime" >
                    <KomentarPreview :mojKomentar='komentar'></KomentarPreview>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import {lang} from '../data/lang.js'
import OglasPreview from '../components/OglasPreview.vue'
import KomentarPreview from '../components/KomentarPreview.vue'


export default{
    components:{
            OglasPreview,
            KomentarPreview,
        },
    data(){
        return{
            lang,
            allUsers:[],
            allOglas:[],
            mojOglasi:[],
            mojiKomentari:[],
            user:{},
        }
    },
    created(){
        var username = JSON.parse(localStorage.getItem('CurrentUser'));
        this.allUsers = JSON.parse(localStorage.getItem('allUsers'));

        this.user = this.allUsers.find(user => user.username=username)

        this.allOglasi = JSON.parse(localStorage.getItem('allOglasi'));
        this.mojOglasi = this.allOglasi.filter(oglas => oglas.username == username);
       
        this.mojiKomentari = JSON.parse(localStorage.getItem(username));
    }
}
</script>
