<template>
  <form>
    <button />
    <input type="text" />
  </form>
</template>
<style scoped>
form {
  position: relative;
  margin: 0;
  margin-top: 0.5rem;
  padding: 0;
}

input {
  width: 600px;
  font-family: Roboto;
  font-size: 1.25rem;
  border-radius: 30px;
  border: 1px solid rgb(231, 231, 231);
  padding: 1rem 1.5rem 1rem 3.5rem;
  color: #333;
  caret-color: #aaa;
  background-color: white;
  margin-top: 1.5rem;
}

button {
  position: absolute;
  top: 50%;
  text-indent: -999px;
  overflow: hidden;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  margin-left: 1.25rem;
  border: 1px solid transparent;
  border-radius: inherit;
  background: url("data:image/svg+xml,%3C%3Fxml version='1.0' %3F%3E%3Csvg class='feather feather-search' fill='none' height='24' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cline x1='21' x2='16.65' y1='21' y2='16.65'/%3E%3C/svg%3E")
    no-repeat center;
  cursor: pointer;
  opacity: 0.5;
}

input:focus {
  outline: none;
}
</style>
