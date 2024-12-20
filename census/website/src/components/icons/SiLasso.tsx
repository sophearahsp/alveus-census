import type { SVGProps } from 'react';
const SiLasso = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.887 15.43a1.25 1.25 0 0 0 2.146 1.273m-2.146-1.272a1.25 1.25 0 1 1 2.146 1.273m-2.146-1.273C5.567 14.299 4.75 12.73 4.75 11c0-3.452 3.246-6.25 7.25-6.25s7.25 2.798 7.25 6.25-3.246 6.25-7.25 6.25a8.217 8.217 0 0 1-2.967-.546M4.75 19.25c2.01 0 2.404-1.617 2.481-2.25"
    />
  </svg>
);
export default SiLasso;
