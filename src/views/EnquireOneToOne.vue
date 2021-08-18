<template>
  <main>
    <section class="enquire-intro">
      <h1 class="">Enquire one to one</h1>
      <p class=""></p>
    </section>
    <section class="enquire-content">
      <div clas="">
        <h1 class="">Nikki Pope</h1>
        <hr class="" />
        <p class=""></p>
        <img class="" src="" alt="" />
      </div>
      <div clas="">
        <h1 class="">test</h1>
        <hr class="" />
        <p class=""></p>
        <img class="" src="" alt="" />
      </div>
      <form class="">
        <div class="form-header"></div>
        <label class="" for="name">Name</label>
        <input class="" name="name" v-model="name" placeholder="Your name" required />
        <label class="" for="email">Email</label>
        <input class="" name="email"  v-model="email" placeholder="Your email" required />
        <label class="" for="telephone">Telephone</label>
        <input class="" name="telephone"  v-model="telephone" placeholder="Your telephone" required />
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
      name: '',
      email: '',
      telephone: '',
      message: ''
    }
  }
}
</script>

<style>

</style>
