import type { SVGProps } from 'react';
const SiMaximize = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.75 14.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H9.25"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.25 14.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H14.75"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.25 9.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75H14.75"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.75 9.25V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H9.25"
    />
  </svg>
);
export default SiMaximize;
