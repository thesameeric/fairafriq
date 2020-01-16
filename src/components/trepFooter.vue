<template>
    <footer class="flex column col-lg-6 header justify-content-space-between">
        <div class="fo-sec">
            <div class="flex align-items-start column nowrap">
                <p class="text text-left footer-pl">It doesn't end here <br> This is where it Begins.</p>
                <a target="_blank" href="https://twitter.com/trephq">
                    <img class="mini-icons2" src="../assets/twitter.svg" alt="">
                </a>
            </div>
        </div>
        <div class="copycat">
            &copy; 2019. Trep Labs. | Legal.
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
