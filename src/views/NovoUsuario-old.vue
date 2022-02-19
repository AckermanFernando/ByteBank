<template>
  <div class="conteudo">
    <ul class="formulario green">
      <li v-for="field in formFields" :key="field.fieldName">
        <label for="field.fieldName"
          >{{ field.fieldName }} <span class="obrigatorio">*</span>
        </label>
        <input
          v-model="field.modelName"
          :type="field.type"
          name="field.fieldName"
          :placeholder="field.label"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { Gerente } from "../domain/gerente/Gerente.js";

export default {
  data() {
    return {
      formFields: [
        { fieldName: "Nome", type: "text", modelName: this.gerente.nome, label: "Digite o seu nome..." },
        { fieldName: "CPF", type: "number", modelName: this.gerente.cpf, label: "ex: 12345678910" },
        // { fieldName: "Masculino", type: "radio", label: "" },
        // { fieldName: "Feminino", type: "radio", label: "" },
        { fieldName: "Data de nascimento", modelName: this.gerente.dataNascimento, type: "month", label: "sim" },
        { fieldName: "E-mail", type: "email", modelName: this.gerente.email, label: "ex: cleitin@gmail.com" },
        {
          fieldName: "Senha",
          type: "password",
          label: "Digite uma senha forte...",
        },
      ],
      gerente: new Gerente(),
    };
  },
};
</script>

<style scoped>
.conteudo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5vh auto;
}

.formulario {
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 30px;
  margin: 20px;
  width: 400px;
  transition: all 0.3s ease-out;
}

.green {
  border-left: 3px solid #27ae60;
}

li {
  list-style-type: none;
  padding: 1rem;
  display: grid;
}

.obrigatorio {
  color: red;
  font-size: large;
}
</style>