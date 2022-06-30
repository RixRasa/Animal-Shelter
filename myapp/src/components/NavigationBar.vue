<template>
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <router-link to='/' class="navbar-brand ms-lg-5">
            <h1 class="m-0 text-uppercase text-dark"><i class="bi bi-shop fs-1 text-primary me-3"></i>Pet Shop</h1>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
                <router-link to='/' class="nav-item nav-link">Home</router-link>
                <router-link to='/about' class="nav-item nav-link">O nama</router-link>
                <router-link to='/showoglasi' class="nav-item nav-link">Izgubljeni Ljubimci </router-link>
                <router-link to='/makeoglas' class="nav-item nav-link">Dodaj Oglas</router-link>
                <router-link to='/oglasview' class="nav-item nav-link">Moj Nalog</router-link>
                <div class="nav-item dropdown">
                    <div class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Zivotinje</div>
                    <div class="dropdown-menu m-0">
                        <router-link to='/psi' class="dropdown-item">Psi</router-link>
                        <router-link to='/macke' class="dropdown-item">Macke</router-link>
                        <router-link to='/ptice' class="dropdown-item">Ptice</router-link>
                       
                    </div>
                </div>
                <a href="contact.html" class="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5">Contact <i class="bi bi-arrow-right"></i></a>
            </div>
        </div>
    </nav>
</template>

<style scoped>
@media (min-width: 992px) {
    .navbar-light .navbar-nav .nav-link::before {
        position: absolute;
        content: "";
        width: 0;
        height: 7px;
        top: -4px;
        left: 50%;
        background: var(--primary);
        transition: .5s;
    }

    .navbar-light .navbar-nav .nav-link:hover::before,
    .navbar-light .navbar-nav .nav-link.active::before {
        width: 100%;
        left: 0;
    }

    .navbar-light .navbar-nav .nav-link.nav-contact::before {
        width: 100%;
        height: 1px;
        top: -1px;
        left: 0;
    }
}

@media (max-width: 991.98px) {
    .navbar-light .navbar-nav .nav-link  {
        margin-left: 0;
        padding: 10px 0;
    }
}

.navbar-light .navbar-nav .nav-link {
    font-family: 'Roboto', sans-serif;
    position: relative;
    margin-left: 30px;
    padding: 30px 0;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--dark);
    outline: none;
    transition: .5s;
}

.sticky-top.navbar-light .navbar-nav .nav-link {
    padding: 20px 0;
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link.active {
    color: var(--primary);
}


</style>

