<template>
  <div class="container">
    <h1>Gerentes</h1>
    <div class="row">
      <Gerente
        v-for="gerente in gerentes"
        :key="gerente.numero"
        :gerente="gerente"
      />
    </div>
    <router-link :to="{ name: 'home' }">
      <a href="#" class="btn btn-success btn-custom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
      </a>
    </router-link>
  </div>
</template>

<script>
import Gerente from "@/components/Gerente.vue";

export default {
  components: {
    Gerente,
  },
  data() {
    return {
      gerentes: [],
    };
  },
  mounted() {
    this.$http
      .get("gerentes")
      .then((response) => (this.gerentes = response.data))
      .catch((erro) => console.log(erro));
  },
};
</script>

<style scoped>
.btn-custom {
  border-radius: 50px;
}
</style>