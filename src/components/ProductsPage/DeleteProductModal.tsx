import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { hideDeleteProductModal } from '../../store/reducers/deleteProductModalSlice';

export const DeleteProductModal = () => {
  const dispatch = useDispatch();
  const { isVisible, productId } = useSelector(
    (state: RootState) => state.deleteProductModal,
  );
  const [id, setId] = useState<null | number>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (productId) {
      setId(productId);
    }
  }, [productId]);

  const handleConfirmDelete = () => {
    // Here we can delete the product
    dispatch(hideDeleteProductModal());
  };

  const handleClose = () => {
    dispatch(hideDeleteProductModal());
  };

  return (
    <Modal show={isVisible} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t('modalDelete.confirmTitle.product')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {t('modalDelete.confirmBody.product')} {id}?
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
