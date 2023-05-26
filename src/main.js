import { renderCategories } from 'components/categories/';
import { renderFooter } from 'components/footer';
import { renderHeader } from 'components/header';

import { scrollToCategory } from 'helpers/scrollToCategory';

import 'utils/scrollTop';
import 'assets/style/style.css';

renderHeader();
renderCategories();
renderFooter();
scrollToCategory();
