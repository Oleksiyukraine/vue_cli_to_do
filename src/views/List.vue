<template>
  <div>
    <h1>List</h1>
    <hr>
    <table v-if="tasks.length">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Desk</th>
          <th>Date</th>
          <th>Status</th>
          <th>Open</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(task, index) in tasks"
          :key="task.id"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
          <td>{{ task.date }}</td>
          <td>{{ task.status }}</td>
          <td>
            <router-link :to="`/task/${task.id}`" tag="button" class="btn btn-small">
              Open
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>
      No tasks
    </p>
  </div>
</template>

<script>
export default {
  name: 'List',
  components: {
  },
  data: () => ({
  }),
  computed: {
    tasks () {
      return this.$store.getters.tasks
    }
  }
}
</script>
