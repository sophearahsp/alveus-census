import type { SVGProps } from 'react';
const SiBallotBox = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M16.75 4.75H17.3921C17.8857 4.75 18.3054 5.11011 18.3805 5.59794L19.25 11.25H4.75L5.61955 5.59794C5.6946 5.11011 6.11435 4.75 6.60792 4.75H7.25"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.75 11.25H19.25V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V11.25Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.75 8.25H14.25M9.75 8.25V5.75C9.75 5.19772 10.1977 4.75 10.75 4.75H13.25C13.8023 4.75 14.25 5.19772 14.25 5.75V8.25M9.75 8.25H7.75M14.25 8.25H16.25"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SiBallotBox;
