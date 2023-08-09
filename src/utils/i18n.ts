import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          chartsIsNew: 'New and used',
          chartsTitle: 'Charts',
          chartsTypes: 'Types',
          filter: {
            filter: 'Filter',
            all: 'All',
            laptops: 'Laptops',
            monitors: 'Monitors',
            printers: 'Printers',
          },
          language: 'Lang',
          modalDelete: {
            cancel: 'Cancel',
            confirmTitle: {
              order: 'Delete order',
              product: 'Delete product',
            },
            confirmBody: {
              order: 'Are you sure you want to delete order with ID:',
              product: 'Are you sure you want to delete product with ID:',
            },
            delete: 'Delete',
          },
          months: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Novr',
            'Dec',
          ],
          navigation: {
            charts: 'Charts',
            orders: 'Orders',
            products: 'Products',
          },
          noProducts: 'No products match your search query',
          order: {
            prodQuantity1: 'product',
            prodQuantity2: 'products',
            prodQuantity3: 'products',
          },
          ordersTitle: 'Orders',
          product: {
            guar_from: 'from',
            guar_to: 'to',
            isNew_1: 'New',
            isNew_2: 'Used',
            orders: 'Orders ids',
            purchased: 'Purchased',
            spec_1: 'Free',
            spec_2: 'In maintance',
            title: 'Products',
          },
          productsTitle: 'Products',
          searchInputPlaceholder: 'Search for product...',
          sort: {
            sort: 'Sort',
            date: 'Date',
            guaranty: 'Guaranty',
            isNew: 'New / used',
            none: '-',
            status: 'Free / in maintaince',
            title: 'Title',
          },
          weekDays: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
        },
      },
      uk: {
        translation: {
          chartsIsNew: 'Нові та вживані',
          chartsTitle: 'Графіки',
          chartsTypes: 'Типи',
          cancel: 'Скасувати',
          filter: {
            filter: 'Фільтрувати',
            all: 'Всі',
            laptops: 'Ноутбуки',
            monitors: 'Монітори',
            printers: 'Прінтери',
          },
          language: 'Мова',
          modalDelete: {
            cancel: 'Скасувати',
            confirmTitle: {
              order: 'Видалення замовлення',
              product: 'Видалення продукту',
            },
            confirmBody: {
              order: 'Ви впевнені, що бажаєте видалити замовлення з ID:',
              product: 'Ви впевнені, що бажаєте видалити продукт з ID:',
            },
            delete: 'Видалити',
          },
          months: [
            'Січ',
            'Лют',
            'Мар',
            'Кві',
            'Тра',
            'Чер',
            'Лип',
            'Сер',
            'Вер',
            'Жов',
            'Лис',
            'Гру',
          ],
          navigation: {
            charts: 'Графіки',
            orders: 'Замовлення',
            products: 'Товари',
          },
          noProducts: 'За вашим запитом не знайдено продуктів.',
          order: {
            prodQuantity1: 'продукт',
            prodQuantity2: 'продукти',
            prodQuantity3: 'продуктів',
          },
          ordersTitle: 'Замовлення',
          product: {
            guar_from: 'з',
            guar_to: 'до',
            isNew_1: 'Новий',
            isNew_2: 'Вживаний',
            orders: 'id замовлень',
            purchased: 'Придбано',
            spec_1: 'Вільний',
            spec_2: 'В ремонті',
          },
          productsTitle: 'Продукти',
          searchInputPlaceholder: 'Пошук продукту...',
          sort: {
            sort: 'Сортувати',
            date: 'Дата',
            guaranty: 'Гарантія',
            isNew: 'Новий / вживаний',
            none: '-',
            status: 'Вільний / в ремонті',
            title: 'Назва',
          },
          weekDays: [
            'Неділя',
            'Понеділок',
            'Вівторок',
            'Середа',
            'Четвер',
            "П'ятниця",
            'Субота',
          ],
        },
      },
    },
  });

export default i18n;
