import { useState, useCallback, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { updateQuery } from '../../store/reducers/filterSlice';
import './styles/SearchBar.scss';

export const SearchBar = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [isResetButtonActive, setIsResetButtonActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQueryChange = useCallback(
    (inputEvent: ChangeEvent<HTMLInputElement>) => {
      const { value } = inputEvent.target;

      setQuery(value);
      setIsResetButtonActive(value.length > 0);

      dispatch(updateQuery(value));
      navigate('/products');
    },
    [],
  );

  const handleReset = () => {
    dispatch(updateQuery(''));

    setQuery('');
    setIsResetButtonActive(false);
  };

  return (
    <div className="search-bar">
      <InputGroup size="sm">
        <Form.Control
          placeholder={t('searchInputPlaceholder')}
          value={query}
          onChange={handleQueryChange}
        />

        <Button
          className="search-bar__reset-button"
          variant="outline-secondary"
          disabled={!isResetButtonActive}
          onClick={handleReset}
        >
          <i className="fas fa-xmark" />
        </Button>
      </InputGroup>
    </div>
  );
};
