import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const JobType = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="JobType"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m18,16.86h0s0,.01,0,.01v.04s0,0,0,0c0,.02,0,.03,0,.04,0,.01,0,.02,0,.03v.03s-.02.02-.03.03c0,0,0,.02-.02.03,0,0,0,0,0,.01h0s-.02.03-.02.04l-2.27,2.27h-.01s0,.02,0,.02l.03-.03-.04.03-.03.02s-.02.01-.03.01c-.01,0-.02.01-.03.01,0,0-.02,0-.03.01-.01,0-.02,0-.03,0,0,0-.02,0-.02,0-.01,0-.03,0-.04,0,0,0-.01,0-.02,0h-.04s0,0,0,0h.01s.02,0,.02,0h-.02s0,0,0,0h-.04s-8.91,0-8.91,0c-.18,0-.34-.13-.37-.29v-.06s0-14.29,0-14.29c0-.18.13-.32.31-.35h.07s11.25,0,11.25,0c.18,0,.34.13.37.29v.06s0,11.94,0,11.94v.03s0,.03,0,.03Zm-.75-11.65H6.75v13.57h8.25s0-1.91,0-1.91c0-.21.17-.38.38-.38h1.88V5.21Zm-.53,12.04h-.97v.97l.97-.97Zm-4.34-8.25c.21,0,.38.17.38.38,0,.18-.13.34-.31.37h-.07s-3.75,0-3.75,0c-.21,0-.38-.17-.38-.38,0-.18.13-.34.31-.37h.07s3.75,0,3.75,0Zm3-1.5c.21,0,.38.17.38.38,0,.18-.13.34-.31.37h-.07s-6.75,0-6.75,0c-.21,0-.38-.17-.38-.38,0-.18.13-.34.31-.37h.07s6.75,0,6.75,0Z"/>',
      }}
    />
  )
)

JobType.displayName = 'JobType'

export const tags = ['JobType', '']
