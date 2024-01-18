<!-- TwoWayBindingComponent.vue -->

<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Inicializar el mensaje aquí',
    };
  },
};
</script>

<style scoped>
p {
  font-size: 50px;
  color: green;
}

input{
  width: 400px;
  height: 15px;
  font-size: larger;
}

</style>
