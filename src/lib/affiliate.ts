// Single source of truth for outbound affiliate link attributes.
// Every partner / casino link must go through these helpers so that
// rel="sponsored nofollow noopener noreferrer" is applied consistently.

export const AFFILIATE_REL = 'nofollow sponsored noopener noreferrer';

export type AffiliateLinkProps = {
  href: string;
  target: '_blank';
  rel: string;
};

export function affiliateLinkProps(href: string): AffiliateLinkProps {
  return {
    href,
    target: '_blank',
    rel: AFFILIATE_REL,
  };
}
