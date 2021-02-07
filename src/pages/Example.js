import axios from 'axios';
import Button from 'react-bootstrap/Button';

function Example() {
  const fetchData = async() => {
    try {
      const response = await axios.get('http://10.0.1.207/');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <Button onClick={fetchData}>
        表示
    </Button>
  );
}

export default Example;
