<template>
  <nav class="navbar navbar-expand-lg navbar-bytebank">
    <router-link class="navbar-brand" :to="{ name: 'home' }"
      >ByteBank</router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" >
      <BarraNavegacaoLogado v-if="usuarioEstaLogado"/>
      <BarraNavegacaoDeslogado v-else />
    </div>
  </nav>
</template>

<script>
import BarraNavegacaoLogado from './BarraNavegacaoLogado.vue'
import BarraNavegacaoDeslogado from './BarraNavegacaoDeslogado.vue'
import { mapGetters } from 'vuex'

export default {
  components:{
    BarraNavegacaoLogado,
    BarraNavegacaoDeslogado
  },
  computed: {
    ...mapGetters(['usuarioEstaLogado'])
  },
};
</script>

<style>
.navbar {
  background: #27ae60;
}
.navbar-bytebank a {
  color: #fff;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>

