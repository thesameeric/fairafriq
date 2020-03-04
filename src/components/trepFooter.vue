<template>
    <footer class="flex column col-lg-6 header justify-content-space-between">
        <div class="copycat">
            <!-- eslint-disable-next-line -->
            &copy; Copyright 2020 - FOUNDATION FOR AFRICA INTEGRITY | 16 Pickering Road Birking IG11 8PG,   |    Nonprofit Organization
        </div>
        <div class="flex flex-wrap text-45 justify-content-center">
            <a href="#">
                <i class='uil uil-facebook'></i>
            </a>
            <a href="#">
                <i class='uil uil-twitter'></i>
            </a>
            <a href="#">
                <i class='uil uil-linkedin'></i>
            </a>
        </div>
    </footer>
</template>
<style scoped>
    footer {
        overflow: hidden;
    }
    .footer-pl {
        font-size: 35px;
        font-family: 'Nunito', sans-serif;
    }
    .fo-sec {
        padding: 50px 100px;
    }
    .copycat {
        padding: 20px;
        font-size: 13px;
    }
    @media only screen and (max-width: 720px) {
        .footer-pl {
            font-size: 30px;
        }
        .fo-sec {
            padding: 50px 20px;
        }
    }
</style>
