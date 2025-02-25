import { createVar, style } from '@vanilla-extract/css';

import { vars } from '../src';

export const accentVar = createVar();

export const container = style({
  backgroundColor: vars.color.bg.ui.secondary,
  color: vars.color.text.ui.secondary,
  padding: vars.spacing[500],
  border: `${vars.border.width[300]} solid ${vars.color.border.ui.primary}`,
  fontSize: vars.font.size[300],
});

export const local = style({
  vars: {
    [accentVar]: vars.color.pink[500],
  },
  backgroundColor: accentVar,
  height: '10rem',
  width: '10rem',
});
