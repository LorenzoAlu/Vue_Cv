<template>
  <transition mode="out-in">
    <form class="contact-form" @submit.prevent="sendEmail" v-if="!sendingEmail">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input class="form-control" type="text" name="user_name" />
      </div>
      <div class="mb-3">
        <label class="form-label">Oggetto</label>
        <input class="form-control" type="text" name="topic" />
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input class="form-control" type="email" name="user_email" />
      </div>
      <div class="mb-3">
        <label class="form-label">Message</label>
        <textarea class="form-control" name="message"></textarea>
      </div>
      <input class="btn btn-primary w-100" type="submit" value="Invia" />
    </form>

    <form class="text-center" @submit.prevent="resetMail" v-else>
      <h2>Email Inviata!</h2>
      <p>Avrai presto mie notizie ;)</p>
      <input class="btn btn-primary w-100" type="submit" value="Grazie" />
    </form>
  </transition>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      sendingEmail: false,
    };
  },
  methods: {
    sendEmail(e) {
      emailjs
        .sendForm(
          "service_ga2v6s6",
          "template_c1wf2gg",
          e.target,
          "user_hhuffDmG0UIwksjLbfMoI"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
            this.sendingEmail = true;
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
    resetMail() {
      this.sendingEmail = !this.sendingEmail;
    },
  },
};
</script>

<style scoped>
form {
  padding: 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  margin-top: 5rem;
  background-color: white;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease-in;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>