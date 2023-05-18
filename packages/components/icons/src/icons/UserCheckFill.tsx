import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const UserCheckFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M9.23129 2C6.95821 2 5.11554 3.84253 5.11554 6.11538 5.11554 8.38823 6.95821 10.2308 9.23129 10.2308 11.5044 10.2308 13.347 8.38823 13.347 6.11538 13.347 3.84253 11.5044 2 9.23129 2ZM12.3627 21.7189 10.0883 20.0153C9.05677 19.2427 8.84698 17.7803 9.61966 16.7489 10.3923 15.7175 11.8549 15.5078 12.8864 16.2804L14.1597 17.2341C14.5281 17.51 15.0504 17.4351 15.3264 17.0668L15.4692 16.8762C15.7912 16.4464 15.8982 15.8827 15.6878 15.3885 15.6346 15.2634 15.5782 15.1405 15.5186 15.0206 15.2305 14.4412 14.8344 13.8683 14.2762 13.4668 13.275 12.4921 12.0123 11.8278 10.6404 11.5553 9.23852 11.2768 7.78551 11.42 6.46492 11.9667 5.14434 12.5135 4.01541 13.4393 3.22073 14.6272 2.42605 15.8151 2.00126 17.2119 2 18.6411V20.7189C2 21.2712 2.44776 21.7189 3.0001 21.7189H12.3627Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5994 12.5843C22.0415 12.9154 22.1314 13.5421 21.8003 13.9841L16.0952 21.5995C15.9361 21.8118 15.6993 21.9522 15.4367 21.9899C15.1742 22.0275 14.9074 21.9594 14.6951 21.8003L10.8871 18.948C10.445 18.6169 10.3551 17.9902 10.6863 17.5482C11.0174 17.1061 11.6442 17.0162 12.0863 17.3473L15.0939 19.6001L20.1994 12.7851C20.5306 12.3431 21.1574 12.2532 21.5994 12.5843Z"/>',
      }}
    />
  )
)

UserCheckFill.displayName = 'UserCheckFill'

export const tags = ['UserCheckFill', '']
