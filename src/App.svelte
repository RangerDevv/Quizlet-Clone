<script lang="ts">
  import { Router } from 'svelte-router-spa'
  //import { routes } from './routes'
  import Landing from "src/pages/Landing.svelte"

  let routes = [
    {
      name: "/",
      component: Landing
    }
  ]
</script>

<Router {routes} />
