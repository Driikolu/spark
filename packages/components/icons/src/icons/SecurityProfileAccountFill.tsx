import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SecurityProfileAccountFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="SecurityProfileAccountFill"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m9.23,2c-2.27,0-4.12,1.84-4.12,4.12s1.84,4.12,4.12,4.12,4.12-1.84,4.12-4.12-1.84-4.12-4.12-4.12Zm0,8.97c-.54,0-1.08.06-1.6.18-1.06.24-2.05.72-2.9,1.4-.85.68-1.54,1.54-2.01,2.52-.47.98-.71,2.05-.71,3.14v2.08c0,.55.45,1,1,1h7.61c.37,0,.71-.2.88-.53.17-.33.15-.72-.05-1.03-.57-.85-.96-2.17-1.16-3.63-.2-1.45-.2-2.92-.07-4.01.03-.28-.06-.57-.25-.78-.19-.21-.46-.34-.75-.34Zm7.39-.78c-.32,0-.7.1-1.02.19-.36.11-.76.26-1.17.43-.77.33-1.7.81-2.25,1.36-.17.17-.3.37-.38.59-.08.21-.11.43-.1.65v1.79c0,1.44.44,2.85,1.25,4.04.81,1.19,1.96,2.11,3.3,2.65,0,0,.02,0,.03.01.37.13.78.13,1.15,0,0,0,.02,0,.03-.01,1.34-.53,2.49-1.45,3.3-2.65.81-1.19,1.25-2.6,1.25-4.04v-1.79c0-.22-.03-.44-.1-.65-.08-.22-.21-.42-.38-.59-.32-.32-.76-.59-1.18-.81-.43-.22-.91-.42-1.37-.59-.46-.17-.92-.31-1.31-.41-.35-.09-.75-.18-1.05-.18Z"/>',
      }}
    />
  )
)

SecurityProfileAccountFill.displayName = 'SecurityProfileAccountFill'

export const tags = ['SecurityProfileAccountFill', '']
