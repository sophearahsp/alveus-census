import type { SVGProps } from 'react';
const SiArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.25 13.75L12 19.25L6.75 13.75"
    />
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18.25V4.75" />
  </svg>
);
export default SiArrowDown;
