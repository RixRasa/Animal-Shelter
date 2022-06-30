<template>
    <div class="container-fluid py-5">
        <div class="container">
            <div class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                <h6 class="text-primary text-uppercase">Oglasi</h6>
                <h1 class="display-5 text-uppercase mb-0">Poslednji oglasi o izgubljenim zivotinjama</h1>
            </div>
        <div class="row">
            <div v-for='oglas in oglasi' :key="oglas.naziv" class="col-lg-4 col-sm-6 my-3">
                <OglasPreview :mojOglas='oglas'></OglasPreview>
            </div>
        </div>
        </div>
    </div>


</template>

<script>
    import OglasPreview from '../components/OglasPreview.vue'
    import allOglasi from '../data/oglasi.js'
    export default{
        name : 'ShowOglasi',
        components:{
            OglasPreview
        },
        data(){
            return{
                oglasi:[]
            }
        },
        created(){
            if(localStorage.getItem('allOglasi')==null){
                localStorage.setItem('allOglasi', JSON.stringify(allOglasi))
            }
            else{
                this.oglasi = JSON.parse(localStorage.getItem('allOglasi'));
            }
        }

    }
</script>


<style scoped>
.blog-item a i {
    position: relative;
    padding-left: 20px;
    transition: .3s;
}

.blog-item a:hover i {
    padding-left: 50px;
}

.blog-item a i::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 2px;
    top: 50%;
    left: 10px;
    margin-top: -1px;
    background: var(--primary);
    transition: .3s;
}

.blog-item a:hover i::after {
    width: 50px;
}

@media (min-width: 576px) {
    .blog-item .row {
        height: 300px;
    }
}
</style>