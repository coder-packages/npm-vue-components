<template>
  <div>
    <h1>Profile</h1>
  </div>
</template>

<script type="text/javascript">
import auth from '@/routes/middleware/auth'
export default {
  middleware: [auth]
}
</script>
