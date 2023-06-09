---
to: "<%= h.src() %>/<%= appPath %>/src/components/<%= name %>/<%= name %>.tsx"
---
import type { FC } from 'react';

export const <%= name %>: FC = (props) => {
  return <div {...props}></div>;
}

export default <%= name %>;
