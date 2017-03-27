/**
 *
 * Currencies  val: 'string'
 * Example: USD,RUB,EUR,GBP"
 *
 * View options: horizontal names
 * Example: <Main val="USD,RUB,EUR,TRY" horizontal names />"
 *
 */

import React from 'react';
import { render } from 'react-dom';
import Widget from './components/Widget';

render(
    <Widget val="USD,RUB,EUR,TRY,GBP" horizontal />,
    document.querySelector('#cbar')
);