<template>
  <div class="material-list">
    <span>
      Detail Name: <strong> {{ list.Name }} </strong>
    </span>
    <span>
      Detail Tag: <strong>{{ list.Tag }} </strong>
    </span>
    <div class="table-container">
      <table class="material-table" v-bind:id="list.Tag">
        <thead>
          <tr>
            <th>ID:</th>
            <th>NAME:</th>
            <th>MATERIAL:</th>
            <th>UNIT:</th>
            <th>QTY:</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(material, index) in list.Materials" v-bind:key="index">
            <td>{{ material.Id }}</td>
            <td>{{ material.Name }}</td>
            <td>{{ material.Material }}</td>
            <td>{{ material.Unit }}</td>
            <td>{{ material.Count }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExtractTable",
  props: { list: { type: Object, required: true } },
};
</script>

<style scoped>
.material-list {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 450px;
}

.material-list span {
  font-size: 1.5rem;
  color: #fff;
}

/*Table Estilization*/
.material-list table {
  border-collapse: collapse;
  font-size: 1.2rem;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  font-family: "Inter", sans-serif;
  margin-top: 1rem;
  background-color: #ffffff;
  width: 100%;
  transition: ease-in 0.25s;
}

.material-list table:hover {
  transform: scale(1.025);
}

.material-list table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.material-list table th,
table td {
  padding: 12px 15px;
}

.material-list table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.material-list table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.material-list table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.material-list table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
.export-button {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80px;
  height: 30px;
  margin-top: 1rem;
  background-color: #ef4444;
  font-size: 1.5rem;
  color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

a:active {
  transform: scale(0.9);
}

.export-button span {
  font-weight: 300;
}
</style>
