import type { SVGProps } from 'react';
const SiLightBulb = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 4.75C8.5 4.75 6.75 7.5 6.75 10C6.75 14 9.75 14.5 9.75 16V18.2505C9.75 18.8028 10.1977 19.25 10.75 19.25H13.25C13.8023 19.25 14.25 18.8028 14.25 18.2505V16C14.25 14.5 17.25 14 17.25 10C17.25 7.5 15.5 4.75 12 4.75Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10 16.75H14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export default SiLightBulb;
