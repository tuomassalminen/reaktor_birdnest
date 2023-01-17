<script>
  export let pilots;
</script>

<div>
  {#if pilots}
    <table>
      <tr>
        <th>First name</th>
        <th>Email</th>
        <th>Phone number</th>
      </tr>
      {#each pilots as pilot (pilot.pilotId)}
        <tr>
          <td>{pilot.firstName}</td>
          <td>{pilot.email}</td>
          <td>{pilot.phoneNumber}</td>
        </tr>
      {/each}
    </table>
    {#if pilots.length === 0}
      <p>No pilot violations</p>
    {/if}
  {:else}
    <p>Loading...</p>
  {/if}
</div>

<style>
  div {
    margin-top: 2rem;
  }
  table {
    width: 100%;
  }
  th {
    height: 3rem;
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid #ddd
  }
  td {
    text-align: left;
    height: 2rem;
    padding: 0.5rem;
    border-bottom: 1px solid #ddd
  }
  p {
    text-align: center;
    padding: 0.5rem;
  }
</style>