import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

export default class ReactRenderer {
  constructor() {
    this.type = 'react';
  }

  render(Page, Store, Reducer) {
    const reducer = new Reducer();
    const pageStore = new Store(reducer);

    return renderToString(
      <Provider store={pageStore.store}>
        <Page />
      </Provider>
    );
  }
}
