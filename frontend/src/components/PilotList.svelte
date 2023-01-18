<script>
  import utils from '../util/utils';
  export let pilots;
</script>

<div>
  {#if pilots}
    <table>
      <tr>
        <th>First name</th>
        <th>Email</th>
        <th>Phone number</th>
        <th>Closest distance</th>
        <th>Latest violation</th>
      </tr>
      {#each pilots as pilot (pilot.id)}
        <tr>
          <td>{pilot.firstName}</td>
          <td>{pilot.email}</td>
          <td>{pilot.phoneNumber}</td>
          <td>{(pilot.closestDroneDistance / 1000).toFixed(2)} m</td>
          <td>{utils.formatTime(pilot.latestViolation)}</td>
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