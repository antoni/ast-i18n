import { defineTest } from '../../test/testUtils';

describe('i18nTransformerCodemod', () => {
  defineTest(__dirname, 'i18nTransformerCodemod', null, 'Classes');
  defineTest(__dirname, 'i18nTransformerCodemod', null, 'Diacritics');
  defineTest(__dirname, 'i18nTransformerCodemod', null, 'ExpressionContainer');
  defineTest(__dirname, 'i18nTransformerCodemod', null, 'Functional');
  defineTest(__dirname, 'i18nTransformerCodemod', null, 'Props');
  defineTest(__dirname, 'i18nTransformerCodemod', null, 'Tsx');
});