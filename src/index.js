import axios from "axios";

axios.get("http://localhost:5000/api/products")
  .then(res => console.log(res.data));
