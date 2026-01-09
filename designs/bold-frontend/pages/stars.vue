<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <!--Titles-->
                <div class="title pb-5 col-12">
                    <h2 class="align-left pb-3 mbr-fonts-style display-5">
                        User's Saved Stars</h2>

                </div>
                <!--Card-1-->
                <div class="card col-12 col-md-6 p-3 col-lg-4">
                    <div class="card-wrapper">
                        <div class="card-img">
                            <img src="../assets/images/product1.jpg" alt="ShopnBold">
                        </div>
                        <div class="card-box">
                            <h4 class="card-title mbr-fonts-style display-5">
                                Watch Star
                            </h4>
                            <p class="mbr-text mbr-fonts-style display-7">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium dolores
                                doloribus
                                eligendi eum illo placeat quis repellendus sequi tempore!
                            </p>
                            <!--Btn-->
                            <div class="mbr-section-btn align-left">
                                <a href="/" class="btn btn-warning-outline display-4">
                                    $ 790
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        
    }
</script>

<script setup>
    useHead({
        title: 'Stars',
    })
</script>