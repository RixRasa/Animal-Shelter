<template>
    <div class="blog-item  bg-light">  
        <div class="col-12 col-sm-7 h-100 w-100 d-flex flex-column justify-content-center">
            <div class="p-4">
                <div class="d-flex mb-3">
                    <small class="me-3"><i class="bi bi-bookmarks me-2"></i>nestao</small>
                    <small><i class="bi bi-calendar-date me-2"></i>{{mojOglas.datum}}</small>
                </div>
                <h5 class="text-uppercase mb-3">{{mojOglas.naslov}}</h5>
                <p>{{mojOglas.opis}}</p>
                <a class="text-primary text-uppercase" href="">Procitaj Vise<i class="bi bi-chevron-right"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name : "OglasPreview",
    props: [
        'mojOglas'
    ]
}
</script>
