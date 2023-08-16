<template>
  <div class="detail">
    <h1>This is an user detail page</h1>
    <h3>ini adalah variabel dari parameter {{ identitas }}</h3>
  </div>
</template>

<script>
export default {
  name: "UserDetailView",
  computed: {
    identitas() {
      return this.$route.params.id
    }
  }
}
</script>
