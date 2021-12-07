import { oRender } from 'ojs-core';
import { oSelect } from '../src';

const select = oSelect();
select.options(
    { value: '12', text: 'opcja 1', 'data-id': '12-ajdi' },
    { value: '23', text: 'opcja 2', 'data-id': '23-ajdi' },
);

select.options(
    { value: '12', text: 'opcja 1', 'data-id': '12-ajdi' },
    { value: '23', text: 'opcja 2', 'data-id': '23-ajdi' },
);

oRender(
    document.body,
    select
);