<template>
  <div>
 <b-container class="mt-5">
      <b-row>
          <b-col cols="6">
          <b-img
            src="https://www.drip.com/static/img/public/pages/get/free-trial/why-drip.jpg?v=20200820-585.428947507816208489"
            fluid
            alt="Responsive image"
          ></b-img>
        </b-col>

        <b-col cols="6">
          <h1 class="headline">Empower the ecommerce rebellion.</h1>
          <p>Ecommerce was built to unite unique people with unique goods online. At Drip, we know that independent shops are what keeps the world interesting. Our mission is to help brands grow by giving everyone the same powerful automation tools as the big guys. We’re here to help brands fight back against the powers that be: impersonal giants like Amazon. We like to call this the ecommerce rebellion.</p>

        </b-col>
      
      </b-row>
    </b-container>

  </div>
</template>

<script>
export default {
  name: 'Empower',
  props: {
    msg: String
  }
}
</script>

<style lang="css" scoped>
.headline{
  margin-top:200px;
}
</style>