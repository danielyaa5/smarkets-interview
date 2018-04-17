import React from 'react';
import { MemoryRouter } from 'react-router';

export const wrap = (component, props, initialEntries) =>
    (<MemoryRouter initialEntries={initialEntries} initialIndex={0}>
      <component {...props}/>
    </MemoryRouter>);
