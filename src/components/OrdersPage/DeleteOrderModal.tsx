import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { hideDeleteOrderModal } from '../../store/reducers/deleteOrderModalSlice';

export const DeleteOrderModal = () => {
  const dispatch = useDispatch();
  const { isVisible, orderId } = useSelector(
    (state: RootState) => state.deleteOrderModal,
  );

  const [id, setId] = useState<null | number>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (orderId) {
      setId(orderId);
    }
  }, [orderId]);

  const handleConfirmDelete = () => {
    // Here we can delete the order
    dispatch(hideDeleteOrderModal());
  };

  const handleClose = () => {
    dispatch(hideDeleteOrderModal());
  };

  return (
    <Modal show={isVisible} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t('modalDelete.confirmTitle.order')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {t('modalDelete.confirmBody.order')} {id}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {t('modalDelete.cancel')}
        </Button>
        <Button variant="danger" onClick={handleConfirmDelete}>
          {t('modalDelete.delete')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
