<script>
    import logo from "$lib/asset/images/logo.svg"
    import background from "$lib/asset/images/tv.png"
</script>

<svelte:head>
    <title>Home | Robert Sinar TV</title>
    <meta name="description" content="Robert Sinar TV telah menyediakan layanan perbaikan TV berkualitas tinggi sejak tahun 1990. Teknisi berpengalaman kami telah membantu banyak klien dengan perbaikan TV, memastikan perangkat mereka bekerja secara optimal. Hubungi kami hari ini untuk layanan perbaikan TV yang dapat diandalkan." />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css">
</svelte:head>


<main>
    <picture class="h-full w-full bg-center absolute z-10">
        <source srcset={background} type="images/png" />
        <img aria-hidden="true" class="relative object-cover h-full w-full" src={background} alt="Old classic TV">
    </picture>
    <header aria-hidden="true" class="fixed w-screen top-0 left-0 right-0 z-30 flex flex-row h-10 p-12 items-center bg-gradient-to-br from-glassmorphishm-38 to-glassmorphishm-8 drop-shadow-glassmorphism backdrop-blur-xl">
        <nav>
            <a href="/#">
                <picture>
                    <source srcset={logo} type="images/png" />
                    <img src={logo} alt="Robert Sinar TV logo">
                </picture>
            </a>
        </nav>
    </header>
    <div class="flex flex-col justify-between items-start p-96">
        <div class="z-20 flex flex-col items-start justify-center space-y-4">
            <h1 class="text-8xl leading-none font-bold font-inter text-slate-50">Service TV <br> Professional</h1>
            <h2 class="text-3xl leading-9 font-medium font-inter text-slate-50">LCD • LED • Plasma</h2>
            <a href="https://wa.me/+6289515846191?text=Halo!%20Saya%20ingin%20konsultasi%20mengenai%20TV%20Saya.%20Terima%20kasih!" target="_blank" aria-label="WhatsApp Button">
                <button class="flex flex-row space-x-2 px-4 py-3 bg-blue-600 rounded-lg">
                    <i class="iconoir-phone"></i>
                    <span class="text-base leading-6 font-bold font-inter text-slate-50">Konsultasi gratis</span>
                </button>
            </a>
        </div>
    </div>
</main>

<style>
    .iconoir-phone {
        font-size: 1.5rem;
        color: #fff;
    }
</style>