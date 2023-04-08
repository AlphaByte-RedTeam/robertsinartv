<script>
import logo from "$lib/asset/images/logo.svg"
import illustration0 from "$lib/asset/images/illustration0.svg"
import background from "$lib/asset/images/tv.png"
</script>

<svelte:head>
    <title>Home | Robert Sinar TV</title>
    <meta name="description" content="Robert Sinar TV telah menyediakan layanan perbaikan TV berkualitas tinggi sejak tahun 1990. Teknisi berpengalaman kami telah membantu banyak klien dengan perbaikan TV, memastikan perangkat mereka bekerja secara optimal. Hubungi kami hari ini untuk layanan perbaikan TV yang dapat diandalkan." />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css">
</svelte:head>

<main>
    <section>
        <picture class="h-full w-full bg-center absolute z-10">
            <source srcset={background} type="images/png" />
            <img aria-hidden="true" class="object-cover h-full w-full" src={background} alt="Old classic TV">
        </picture>
        <header aria-hidden="true" class="fixed md:w-full top-0 left-0 right-0 z-30 flex flex-row h-10 py-10 md:py-8 md:px-12 px-4 items-center bg-gradient-to-br from-glassmorphishm-38 to-glassmorphishm-8 drop-shadow-glassmorphism backdrop-blur-xl">
            <nav>
                <a href="/#">
                    <picture>
                        <source srcset={logo} type="images/svg" />
                        <img src={logo} alt="Robert Sinar TV logo">
                    </picture>
                </a>
            </nav>
        </header>
        <div class="flex flex-col justify-between items-start md:py-96 md:px-72 py-80 px-12">
            <div class="z-20 flex flex-col items-start justify-center space-y-4">
                <h1 class="text-5xl md:text-8xl leading-none font-bold font-inter text-slate-50">Service TV <br> Professional</h1>
                <h2 class="text-xl md:text-3xl leading-9 font-medium font-inter text-slate-50">LCD • LED • Plasma</h2>
                <a href="https://wa.me/+6289515846191?text=Halo!%20Saya%20ingin%20konsultasi%20mengenai%20TV%20Saya.%20Terima%20kasih!" target="_blank" aria-label="WhatsApp Button">
                    <button class="flex flex-row space-x-2 px-4 py-3 bg-blue-600 rounded-lg">
                        <i class="iconoir-phone"></i>
                        <span class="text-base leading-6 font-bold font-inter text-slate-50">Konsultasi gratis</span>
                    </button>
                </a>
            </div>
        </div>
    </section>
    <section class="flex flex-col justify-center items-center gap-12 py-8 md:py-0 bg-white">
        <div class="flex justify-center items-center">
            <h1 class="text-lg md:text-4xl leading-7 md:leading-10 font-bold text-black font-inter">Kenapa Menggunakan Layanan Kami?</h1>
        </div>
        <div class="flex flex-col md:flex-row justify-center items-center md:gap-40">
            <picture class="py-4 md:py-24 ">
                <source srcset={illustration0} type="image/svg" />
                <img aria-hidden="true" src={illustration0} alt="Shiny TV illustration and a man">
            </picture>
            <div class="flex flex-col gap-6 md:items-start items-center">
                <div class="flex flex-col gap-6">
                    <div class="flex flex-row gap-2 items-start">
                        <p class="text-xl leading-7 md:text-4xl md:leading-10 font-light font-inter">&nbsp;01</p>
                        <div class="flex flex-col">
                            <h1 class="text-xl leading-7 md:text-4xl md:leading-10 font-bold font-inter">Berpengalaman</h1>
                            <p class="text-md leading-6 md:text-xl md:leading-7 font-normal">Sudah berpengalaman sejak <br> tahun 90an menangani <br> puluhan client.</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-2 items-start">
                        <p class="text-xl leading-7 md:text-4xl md:leading-10 font-light font-inter">02</p>
                        <div class="flex flex-col">
                            <h1 class="text-xl leading-7 md:text-4xl md:leading-10 font-bold font-inter">Harga terjangkau</h1>
                            <p class="text-md leading-6 md:text-xl md:leading-7 font-normal">Biaya layanan bervariasi dan <br> terjangkau tergantung dari <br> jenis kerusakan yang ditangani.</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-2 items-start">
                        <p class="text-xl leading-7 md:text-4xl md:leading-10 font-light font-inter">03</p>
                        <div class="flex flex-col">
                            <h1 class="text-xl leading-7 md:text-4xl md:leading-10 font-bold font-inter">Bergaransi</h1>
                            <p class="text-md leading-6 md:text-xl md:leading-7 font-normal">Kami menggunakan suku <br> cadang baru dan bergaransi <br> selama masa perbaikan.</p>
                        </div>
                    </div>
                </div>
                <a href="https://wa.me/+6289515846191?text=Halo!%20Saya%20ingin%20konsultasi%20mengenai%20TV%20Saya.%20Terima%20kasih!" target="_blank" aria-label="WhatsApp Button">
                    <button class="flex flex-row space-x-2 px-4 py-3 bg-blue-600 rounded-lg">
                        <i class="iconoir-phone"></i>
                        <span class="text-base leading-6 font-bold font-inter text-slate-50">Konsultasi gratis</span>
                    </button>
                </a>
            </div>
        </div>
    </section>
</main>
<footer class="flex flex-col md:flex-row justify-between items-center gap-8 bg-black py-12 px-4 md:px-32">
    <div class="flex flex-col justify-between items-start gap-6">
        <a href="/#">
            <picture>
                <source srcset={logo} type="images/svg" />
                <img src={logo} alt="Robert Sinar TV logo">
            </picture>
        </a>
        <div class="flex flex-col items-start justify-center gap-4">
            <div class="flex flex-row justify-center items-start gap-4 opacity-60">
                <i class="iconoir-phone"></i>
                <p class="text-white">+62 895-1584-6191</p>
            </div>
            <div class="flex flex-row justify-center items-start gap-4 opacity-60">
                <i class="iconoir-pin"></i>
                <p class="text-white">Jl. Kelapa Molek 7 Blok P1 <br> No.2, Jakarta Utara, <br> DKI Jakarta 14240</p>
            </div>
        </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701.2214512075434!2d106.90167163208193!3d-6.169900722879009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5289597ac23%3A0x20f0a671ffb28743!2sJl.%20Kelapa%20Molek%20VII%20Blok%20P1%20No.2%2C%20RT.16%2FRW.2%2C%20Klp.%20Gading%20Tim.%2C%20Kec.%20Klp.%20Gading%2C%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2014240!5e0!3m2!1sen!2sid!4v1680929412895!5m2!1sen!2sid" width="350" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</footer>

<style>
.iconoir-phone,
.iconoir-pin {
    font-size: 1.5rem;
    color: #fff;
}
</style>
