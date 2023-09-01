import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const QuestionOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="QuestionOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m12,22c-5.52,0-10-4.48-10-10S6.48,2,12,2s10,4.48,10,10-4.48,10-10,10Zm0-18c-4.41,0-8,3.59-8,8s3.59,8,8,8,8-3.59,8-8S16.41,4,12,4Z"/><path d="m12,14.38c-.55,0-1-.45-1-1v-1.38c0-.55.45-1,1-1,.22,0,.42-.07.6-.18.17-.12.32-.28.4-.48.08-.2.1-.42.06-.62-.04-.21-.14-.4-.29-.55-.15-.15-.34-.25-.55-.29-.21-.04-.42-.02-.62.06-.2.08-.37.22-.48.4-.12.18-.18.38-.18.6,0,.55-.45,1-1,1s-1-.45-1-1c0-.61.18-1.2.52-1.71.34-.51.82-.9,1.38-1.13.57-.23,1.18-.29,1.78-.18.6.12,1.14.41,1.57.84.43.43.72.98.84,1.57.12.6.06,1.22-.18,1.78-.23.57-.62,1.04-1.13,1.38-.22.15-.46.27-.71.35v.55c0,.55-.45,1-1,1Zm0,1.08c-.21,0-.42.06-.59.17-.18.12-.31.28-.39.48-.08.19-.1.41-.06.62.04.21.14.39.29.54s.34.25.54.29c.21.04.42.02.62-.06.19-.08.36-.22.47-.39.12-.17.18-.38.18-.59,0-.28-.12-.55-.32-.75-.2-.2-.47-.31-.75-.32h0Z"/>',
      }}
    />
  )
)

QuestionOutline.displayName = 'QuestionOutline'

export const tags = ['QuestionOutline', '']
