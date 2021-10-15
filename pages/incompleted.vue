<template>
  <TheLayout>
    <Header selectedPage="incompleted" />
    <ContentIncompletedPage />
    <TheFooter />
  </TheLayout>
</template>

<script>
export default {
  head() {
    return {
      title: 'Incompleted Tasks | Todolist'
    }
  }
}
</script>
