import axios from "axios";

axios
  .get("http://localhost:3000")
  .then((response) => {
    const alunos = response.data;
    console.log(alunos);
  })
  .catch((error) => {
    console.error(error);
  });
