import { describe, expect, it } from 'vitest';

import { calculateReadTime, cn } from '@/lib/utils';

describe('calculateReadTime', () => {
  it('rounds minutes up when word count exceeds threshold', () => {
    const content = Array.from({ length: 250 }, () => 'word').join(' ');
    expect(calculateReadTime(content)).toBe(2);
  });

  it('ignores html tags when calculating word count', () => {
    const htmlContent = '<p>Hello world</p>';
    expect(calculateReadTime(htmlContent)).toBe(1);
  });
});

describe('cn', () => {
  it('merges conflicting tailwind classes', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });

  it('handles conditional class names gracefully', () => {
    expect(cn('text-sm', false && 'hidden', 'font-bold')).toBe(
      'text-sm font-bold',
    );
  });
});
