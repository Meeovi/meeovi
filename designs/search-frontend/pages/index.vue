<template>
  <div>
    <section data-bs-version="5.1" class="form1 cid-tuDDMgjaXG mbr-fullscreen mbr-parallax-background" id="form1-0">




      <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(53, 53, 53);"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
            <form action="https://mobirise.eu/" method="POST" class="mbr-form form-with-styler"
              data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true"
                value="0lXc2IyTWYFXUrryB6Nbk+LPku02miBXLtVfiDnxGonMZLBteYx90kTj5T7wMrQkhDSx8Al3QnYbXNRRG8Imjc36hJU57gfUTuK+t2TJERU87QtdrOXc7wObKkP2eUPg">
              <div class="row">
                <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling out the
                  form!</div>
                <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                  Oops...! some problem!
                </div>
              </div>
              <div class="dragArea row">
                <div class="col-12">
                  <h1 class="mbr-section-title mb-4 mbr-fonts-style align-center display-2">
                    <strong>Meeovi Search</strong></h1>
                </div>
                <div class="col-12">

                </div>
                <div class="col-md col-12 form-group mb-3" data-for="name">
                  <input type="text" name="name" placeholder="Search" data-form-field="Name" class="form-control"
                    id="name-form1-0">
                </div>

                <div class="mbr-section-btn col-12 col-md-auto"><button type="submit"
                    class="btn btn-primary display-4"><span
                      class="mobi-mbri mobi-mbri-search mbr-iconfont mbr-iconfont-btn"></span></button></div>
              </div>
              <span class="gdpr-block">
                <label>
                  <span class="textGDPR display-7" style="color: #a7a7a7"><input type="checkbox" name="gdpr"
                      id="gdpr-form1-0" required="">By continuing you agree to our <a
                      style="color: #149dcc; text-decoration: none;" href="terms.html">Terms of Service</a> and <a
                      style="color: #149dcc; text-decoration: none;" href="policy.html">Privacy Policy</a>.</span>
                </label>
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loaded: false,
        loading: false,
      }
    },

    methods: {
      onClick() {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }
</script>

<script setup>
  useHead({
    title: 'Meeovi Search',
  })

  definePageMeta({
    layout: "frontpage"
  })
</script>