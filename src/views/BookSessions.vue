<template>
  <main>
    <section class="book-intro">
      <h1 class="">Book sessions</h1>
      <p class=""></p>  
    </section>
    <section class="book-content">
      <div class="">
        <h2 class=""></h2>
        <hr class="" />
        <p class=""></p>
        <img class="" src="" alt="" />
      </div>
      <div class="">
        <h2 class=""></h2>
        <hr class="" />
        <p class=""></p>
        <img class="" src="" alt="" />
      </div>
      <div class="">
        <h2 class=""></h2>
        <hr class="" />
        <p class=""></p>
        <img class="" src="" alt="" />
      </div>
      <form class="">
        <!-- Add in additional fields, find out from Nikki. -->
        <div class="form-header"></div>
        <label class="" for="parentName">Name</label>
        <input class="" name="parentName" v-model="parentName" placeholder="Your name" required />
        <label class="" for="parentEmail">Email</label>
        <input class="" name="parentEmail"  v-model="parentEmail" placeholder="Your email" required />
        <label class="" for="parentTelephone">Telephone</label>
        <input class="" name="parentTelephone"  v-model="parentTelephone" placeholder="Your telephone" required />
        <label class="" for="childName">Child name</label>
        <input class="" name="childName"  v-model="childName" placeholder="Your telephone" required />
        <label class="" for="childAge">childAge</label>
        <input class="" name="childAge"  v-model="childAge" placeholder="Your telephone" type="number" required />
        <label class="" for="message">Message</label>
        <textarea class="" name="message"  v-model="message" placeholder="Your message" required></textarea>
        <button class="" type="submit">Submit</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  data: function () {
    return {
      parentName: '',
      parentEmail: '',
      parentTelephone: '',
      childName: '',
      childAge: '',
      sessionDate: '',
      message: ''
    }
  }
}
</script>

<style>

</style>