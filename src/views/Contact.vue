<template>
  <div class="flex column contact">
    <section>
        <div class="flex flex-wrap justify-content-center align-items-center contact">
            <div class="flex column nowrap">
                <p class="heading">Let's have a Trep conversation</p>
                <ul class="contact-ul">
                    <li>
                        <a class="flex text-20 align-items-center" href="mailto:hello@treblabs.co">
                            <img class="mini-icons" src="../assets/icon/002-email.svg" alt="mail">
                            hello@treplabs.co
                        </a>
                    </li>
                    <li>
                        <a class="flex text-20 align-items-center" href="tel:+2348063537984">
                            <img class="mini-icons" src="../assets/icon/003-telephone.svg" alt="mail">
                            +2348063537984
                        </a>
                    </li>
                    <li>
                        <a class="flex text-20 align-items-center" href="tel:+2348101595909">
                            <img class="mini-icons" src="../assets/icon/003-telephone.svg" alt="mail">
                            +2348101595909
                        </a>
                    </li>
                    <li>
                        <a target="_blank" class="flex text-20 align-items-center" href="https://goo.gl/maps/2pPXcYf73CdCoEji8">
                            <img class="mini-icons" src="../assets/icon/001-location.svg" alt="mail">
                            <p class="text-left">
                                9 Ik peters, Int'l Airport Road,<br>Ikeja Lagos, Nigeria, Earth.
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <img class="contact-img" src="../assets/contact.svg" alt="contact us image" />
        </div>
    </section>
  </div>
</template>
<style scoped>
.contact-img {
    width: 550px;
    object-fit: cover;
    margin: 25px;
}
.contact-ul li{
    margin: 25px 0;
}
.contact {
    padding: 70px 15px 20px 15px;
}
@media only screen and (max-width: 720px) {
    .contact-img {
        width: 350px;
        object-fit: cover;
        margin: 25px;
    }
}
</style>
<script>
export default {
  
};
</script>
