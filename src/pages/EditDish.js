import {
  useParams
} from "react-router-dom";

function EditDish() {
  let { dishId } = useParams();

  return <h2>料理 { dishId } の編集</h2>;
}

export default EditDish;
