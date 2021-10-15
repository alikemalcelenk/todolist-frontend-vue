<template>
  <TheLayout>
    <Header selectedPage="completed" />
    <ContentCompletedPage />
    <TheFooter />
  </TheLayout>
</template>

<script>
export default {
  head() {
    return {
      title: 'Completed Tasks | Todolist'
    }
  }
}
</script>
