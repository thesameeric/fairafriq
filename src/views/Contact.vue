<template>
  <div class="flex column contact">
    <section>
        <div class="flex flex-wrap justify-content-center align-items-center contact">
            <div class="flex column nowrap">
                <p class="heading">You may contact us at the address below:</p>
                <ul class="contact-ul">
                    <li>
                        <a class="flex text-20 align-items-center" href="mailto:info@fairafriq.org">
                            <img class="mini-icons" src="../assets/icon/002-email.svg" alt="mail">
                            info@fairafriq.org
                        </a>
                    </li>
                    <li>
                        <a class="flex text-20 align-items-center" href="tel:+44-753-474-8947">
                            <img class="mini-icons" src="../assets/icon/003-telephone.svg" alt="mail">
                            +44-753-474-8947
                        </a>
                    </li>
                    <li>
                        <a target="_blank" class="flex text-20 align-items-center" href="#">
                            <img class="mini-icons" src="../assets/icon/001-location.svg" alt="mail">
                            <p class="text-left">
                                UK Office: 16 Pickering Road,<br>Barking IG11 8PG
                            </p>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" class="flex text-20 align-items-center" href="#">
                            <img class="mini-icons" src="../assets/icon/001-location.svg" alt="mail">
                            <p class="text-left">
                                USA Office: 3916 Big Fork Trail,<br>McKinney, TX75070, USA
                            </p>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" class="flex text-20 align-items-center" href="#">
                            <img class="mini-icons" src="../assets/icon/001-location.svg" alt="mail">
                            <p class="text-left">
                               Nigeria Office: 1 Kajola Avenue<br>Oba-Ile. Akure,<br>Ondo State, Nigeria.
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
