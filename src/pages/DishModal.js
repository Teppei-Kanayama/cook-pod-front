import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

function DishModal(props) {
  // const handleClick = () => {
  //  props.toggle();
  // };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>{ props.name }</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Id: { props.dishId }</p>
        <p>URL: { props.url }</p>
        <p>メモ: { props.memo }</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" href={"/dish/" + props.dishId  + "/edit"}>編集</Button>
        <Button variant="primary" onClick={ props.onHide }>閉じる</Button>
      </Modal.Footer>
  </Modal>
  );
}

export default DishModal;
