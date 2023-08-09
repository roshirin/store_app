import { useCallback } from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { updateFilter, updateSort } from '../../store/reducers/filterSlice';
import './styles/FilterAndSortBar.scss';

export const FilterAndSortBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newFilterOption = event.target.value;

      dispatch(updateFilter(newFilterOption));
    },
    [],
  );

  const handleSortChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newSortOption = event.target.value;

      dispatch(updateSort(newSortOption));
    },
    [],
  );

  return (
    <div className="filter-sort-container">
      <label className="d-flex gap-2 align-items-center">
        {t('filter.filter')}:
        <div className="filter-sort-select">
          <Form.Select size="sm" onChange={handleFilterChange}>
            <option value="all">{t('filter.all')}</option>
            <option value="monitors">{t('filter.monitors')}</option>
            <option value="laptops">{t('filter.laptops')}</option>
            <option value="printers">{t('filter.printers')}</option>
          </Form.Select>
        </div>
      </label>

      <label className="d-flex gap-2 align-items-center">
        {t('sort.sort')}:
        <div className="filter-sort-select">
          <Form.Select size="sm" onChange={handleSortChange}>
            <option value="none">{t('sort.none')}</option>
            <option value="title">{t('sort.title')}</option>
            <option value="status">{t('sort.status')}</option>
            <option value="guaranty">{t('sort.guaranty')}</option>
            <option value="isNew">{t('sort.isNew')}</option>
            <option value="date">{t('sort.date')}</option>
          </Form.Select>
        </div>
      </label>
    </div>
  );
};
