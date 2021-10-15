<template>
  <TheLayout>
    <Header selectedPage="home" />
    <ContentHomePage />
    <TheFooter />
  </TheLayout>
</template>

<script>
export default {
  head() {
    return {
      title: 'Todolist'
    }
  }
}
</script>
