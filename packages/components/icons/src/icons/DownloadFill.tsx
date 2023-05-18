import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const DownloadFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.4826 9.46335C20.4826 9.35223 20.4566 9.24112 20.4132 9.13856C20.3612 9.01035 20.2831 8.89924 20.1877 8.80523L13.1859 1.89924C13.0905 1.80523 12.9777 1.7283 12.8475 1.67702C12.7261 1.62574 12.5959 1.6001 12.4571 1.6001C12.4571 1.6001 12.4571 1.6001 12.4484 1.6001H5.43803C4.78731 1.6001 4.17129 1.85651 3.71145 2.30095C3.25161 2.75394 3 3.36078 3 4.00181V19.1984C3 19.8394 3.26029 20.4463 3.71145 20.8992C4.17129 21.3522 4.78731 21.6001 5.43803 21.6001H18.062C18.7127 21.6001 19.3287 21.3437 19.7885 20.8992C20.2484 20.4463 20.5 19.8394 20.5 19.1984V9.53172C20.5 9.50608 20.4913 9.48899 20.4826 9.46335ZM14.6262 16.1215L12.4571 18.2582C12.3617 18.3522 12.2402 18.4292 12.1187 18.4804C11.9973 18.5317 11.8671 18.5574 11.737 18.5574C11.468 18.5574 11.2251 18.4548 11.0429 18.2924C11.0342 18.2839 11.0255 18.2753 11.0169 18.2668L8.84779 16.13C8.44869 15.7368 8.44869 15.1044 8.84779 14.7112C9.2469 14.318 9.88894 14.318 10.2881 14.7112L10.7219 15.1386V11.5061C10.7219 10.9505 11.173 10.5061 11.737 10.5061C12.3009 10.5061 12.7521 10.9505 12.7521 11.5061V15.1386L13.1859 14.7112C13.585 14.318 14.2271 14.318 14.6262 14.7112C15.0253 15.1044 15.0253 15.7368 14.6262 16.13V16.1215ZM13.4809 8.50608V5.10437L16.9341 8.50608H13.4809Z"/>',
      }}
    />
  )
)

DownloadFill.displayName = 'DownloadFill'

export const tags = ['DownloadFill', '']
