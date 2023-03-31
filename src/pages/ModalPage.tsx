import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

type Props = {};

export default function ModalPage({}: Props) {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important something to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleOpen}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        voluptatum perspiciatis harum labore at porro quae, laborum fugit minus
        ipsam? Deleniti quos enim officiis. Cupiditate laudantium ipsa expedita
        veritatis sapiente facere ducimus laboriosam architecto minus, aperiam
        molestiae est magni alias distinctio laborum consequatur consequuntur?
        Quis ipsam nostrum quasi animi numquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        voluptatum perspiciatis harum labore at porro quae, laborum fugit minus
        ipsam? Deleniti quos enim officiis. Cupiditate laudantium ipsa expedita
        veritatis sapiente facere ducimus laboriosam architecto minus, aperiam
        molestiae est magni alias distinctio laborum consequatur consequuntur?
        Quis ipsam nostrum quasi animi numquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        voluptatum perspiciatis harum labore at porro quae, laborum fugit minus
        ipsam? Deleniti quos enim officiis. Cupiditate laudantium ipsa expedita
        veritatis sapiente facere ducimus laboriosam architecto minus, aperiam
        molestiae est magni alias distinctio laborum consequatur consequuntur?
        Quis ipsam nostrum quasi animi numquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        voluptatum perspiciatis harum labore at porro quae, laborum fugit minus
        ipsam? Deleniti quos enim officiis. Cupiditate laudantium ipsa expedita
        veritatis sapiente facere ducimus laboriosam architecto minus, aperiam
        molestiae est magni alias distinctio laborum consequatur consequuntur?
        Quis ipsam nostrum quasi animi numquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        voluptatum perspiciatis harum labore at porro quae, laborum fugit minus
        ipsam? Deleniti quos enim officiis. Cupiditate laudantium ipsa expedita
        veritatis sapiente facere ducimus laboriosam architecto minus, aperiam
        molestiae est magni alias distinctio laborum consequatur consequuntur?
        Quis ipsam nostrum quasi animi numquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        voluptatum perspiciatis harum labore at porro quae, laborum fugit minus
        ipsam? Deleniti quos enim officiis. Cupiditate laudantium ipsa expedita
        veritatis sapiente facere ducimus laboriosam architecto minus, aperiam
        molestiae est magni alias distinctio laborum consequatur consequuntur?
        Quis ipsam nostrum quasi animi numquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        voluptatum perspiciatis harum labore at porro quae, laborum fugit minus
        ipsam? Deleniti quos enim officiis. Cupiditate laudantium ipsa expedita
        veritatis sapiente facere ducimus laboriosam architecto minus, aperiam
        molestiae est magni alias distinctio laborum consequatur consequuntur?
        Quis ipsam nostrum quasi animi numquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        voluptatum perspiciatis harum labore at porro quae, laborum fugit minus
        ipsam? Deleniti quos enim officiis. Cupiditate laudantium ipsa expedita
        veritatis sapiente facere ducimus laboriosam architecto minus, aperiam
        molestiae est magni alias distinctio laborum consequatur consequuntur?
        Quis ipsam nostrum quasi animi numquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        voluptatum perspiciatis harum labore at porro quae, laborum fugit minus
        ipsam? Deleniti quos enim officiis. Cupiditate laudantium ipsa expedita
        veritatis sapiente facere ducimus laboriosam architecto minus, aperiam
        molestiae est magni alias distinctio laborum consequatur consequuntur?
        Quis ipsam nostrum quasi animi numquam.
      </p>
    </div>
  );
}
