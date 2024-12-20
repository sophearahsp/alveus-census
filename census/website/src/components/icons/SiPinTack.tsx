import type { SVGProps } from 'react';
const SiPinTack = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.75 7.75L7.75 4.75H16.25L15.25 7.75V10C18.25 11 18.25 14.25 18.25 14.25H5.75C5.75 14.25 5.75 11 8.75 10V7.75Z"
    />
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14.5V19.25" />
  </svg>
);
export default SiPinTack;
