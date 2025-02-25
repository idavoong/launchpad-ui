import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Icon, StatusIcon, FlairIcon } from '../src';

describe('Icon', () => {
  it('renders', () => {
    render(<Icon name="add" size="medium" />);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('is labelled by a title', () => {
    render(<Icon name="info" size="medium" title="info" subtle />);
    expect(screen.getByTitle('info')).toBeInTheDocument();
  });

  it('returns an icon based on the kind passed', () => {
    render(<StatusIcon kind="warning" />);
    expect(screen.getByLabelText('Warning icon')).toBeInTheDocument();

    render(<StatusIcon kind="error" />);
    expect(screen.getByLabelText('Error icon')).toBeInTheDocument();

    render(<StatusIcon kind="info" />);
    expect(screen.getByLabelText('Info icon')).toBeInTheDocument();
  });

  it('passes aria labeling to svg', () => {
    render(<Icon name="info" aria-label="test" />);

    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'test');
    expect(screen.getByRole('img')).toHaveAttribute('aria-hidden', 'false');
  });

  it('hides svg by default when aria label is not passed', () => {
    render(<Icon name="info" />);

    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders a flair icon', () => {
    render(
      <FlairIcon isRounded>
        <Icon name="info" size="medium" />
      </FlairIcon>
    );
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });
});
