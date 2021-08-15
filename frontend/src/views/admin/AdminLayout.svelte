<!-- Svelte components have functions that can be used to run code at specific points during the components
lifecycle. The onMount lifecycle function runs just after the component is rendered. We'll use onMount to popular our user state
 -->
<script>
  import { Route } from "svelte-router-spa";
  import { onMount } from "svelte";
  import { user } from "../../stores";

  export let currentRoute;
  let initialized = false;

  // The onMount lifecycle function
  onMount(() => {
    // Svelte stores are written to by calling set
    user.set({
      name: "Test User",
      schoolName: "Test School",
    });
    initialized = true;
  });
</script>

<div>
  {#if initialized}
    <Route {currentRoute} />
  {/if}
</div>
