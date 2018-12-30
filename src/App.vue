<template>
  <div id="app">
    <modal>
      <div class="panel">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis recusandae dicta repellendus esse. Culpa impedit odio necessitatibus iusto, blanditiis excepturi.
      </div>
    </modal>

    <portal-target name="modals"></portal-target>
  </div>
</template>

<script>
import Modal from './components/Modal/Modal'
export default {
  components: {
    Modal
  }
}
</script>
