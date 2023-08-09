import { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';
import i18n from '../../utils/i18n';
import { useTranslation } from 'react-i18next';
import './styles/LanguageSwitcher.scss';

export const LanguageSwitcher = () => {
  const { t } = useTranslation();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;

    i18n.changeLanguage(newLang);
  };

  return (
    <label className="language-switcher">
      {t('language')}:
      <Form.Select
        size="sm"
        className="language-switcher__select"
        defaultValue={i18n.language}
        onChange={handleLanguageChange}
      >
        <option value="en">en</option>
        <option value="uk">укр</option>
      </Form.Select>
    </label>
  );
};
