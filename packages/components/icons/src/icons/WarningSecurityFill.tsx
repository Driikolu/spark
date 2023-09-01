import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const WarningSecurityFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="WarningSecurityFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m13.14,2.2c-.74-.26-1.54-.26-2.28,0l-5.73,2.02c-1.38.49-2.33,1.8-2.3,3.31.07,3.1.42,5.98,2.25,8.95,1.48,2.4,3.59,4.28,6.06,5.35h0c.54.23,1.15.23,1.69,0h0c2.48-1.08,4.59-2.95,6.07-5.36,1.83-2.98,2.18-5.85,2.25-8.95.03-1.5-.92-2.82-2.3-3.31l-5.73-2.02Zm-2.23,10.32c0,.56.45,1.01,1,1.01s1-.45,1-1.01v-5.04c0-.56-.45-1.01-1-1.01s-1,.45-1,1.01v5.04Zm.99,4.53c.55,0,1-.45,1-1.01s-.45-1.01-1-1.01-1,.45-1,1.01.45,1.01,1,1.01Z"/>',
      }}
    />
  )
)

WarningSecurityFill.displayName = 'WarningSecurityFill'

export const tags = ['WarningSecurityFill', '']
