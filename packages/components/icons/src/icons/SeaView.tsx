import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SeaView = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5595 5.19995L19.6294 5.20557C19.8344 5.23882 19.9911 5.41584 19.9911 5.63084L19.9955 12.7714C19.9955 12.7788 19.9993 12.784 19.9993 12.7915C19.9993 12.7989 19.9955 12.8034 19.9955 12.8108L20 19.7594C20 19.8732 19.9554 19.9834 19.8743 20.0638C19.7931 20.1449 19.6838 20.1903 19.5699 20.1903L5.44273 20.2C5.20388 20.2 5.01116 20.0072 5.01116 19.7691L5.0067 12.8242C5.00595 12.8123 5 12.8027 5 12.7915L5.0067 12.7587L5.00223 5.63977C5.00223 5.52591 5.04762 5.41651 5.12798 5.33539C5.20834 5.25502 5.31847 5.20888 5.43231 5.20888L8.23082 5.20665H8.25835L19.5595 5.19995ZM6.60425 13.2231H5.86909L5.87281 19.3382L7.13031 19.3374C7.16082 18.0157 7.05963 14.259 6.60425 13.2231ZM15.508 14.6512C15.063 14.6512 14.8554 14.7167 14.6151 14.7911C14.3546 14.8737 14.0585 14.9668 13.4997 14.9668C12.9409 14.9668 12.6455 14.8737 12.385 14.7911C12.1454 14.7167 11.9386 14.6512 11.4944 14.6512C11.0502 14.6512 10.8433 14.7167 10.6037 14.7911C10.3433 14.8737 10.0479 14.9668 9.48981 14.9668C8.93174 14.9668 8.63634 14.8737 8.37591 14.7911C8.19659 14.7353 8.03586 14.6847 7.7799 14.6624C7.98973 16.3532 7.9942 18.4719 7.98452 19.3367L17.0155 19.33C17.0065 18.5099 17.0118 16.5847 17.1874 14.9526C16.8332 14.9244 16.604 14.8551 16.4009 14.7911C16.1605 14.7167 15.9529 14.6512 15.508 14.6512ZM19.1339 13.2231H18.395C17.9411 14.2568 17.8384 18.0016 17.8689 19.3292L19.1383 19.3285L19.1339 13.2231ZM13.3625 17.3968C13.5678 17.3968 13.7345 17.5635 13.7345 17.7689C13.7345 17.9743 13.5678 18.141 13.3625 18.141C13.2055 18.141 13.1392 18.1618 13.0462 18.1908L12.9928 18.2075C12.8814 18.2414 12.7389 18.2764 12.5068 18.2764C12.2352 18.2764 12.0864 18.2288 11.9666 18.1908C11.8743 18.1618 11.8073 18.141 11.6511 18.141C11.4457 18.141 11.279 17.9743 11.279 17.7689C11.279 17.5635 11.4457 17.3968 11.6511 17.3968C11.9219 17.3968 12.0707 17.4437 12.1905 17.4816C12.2835 17.5107 12.3498 17.5322 12.5068 17.5322C12.663 17.5322 12.73 17.5107 12.8223 17.4816C12.9421 17.4437 13.0909 17.3968 13.3625 17.3968ZM11.0092 16.0458C11.2146 16.0458 11.3813 16.2125 11.3813 16.4179C11.3813 16.6233 11.2146 16.79 11.0092 16.79C10.8522 16.79 10.786 16.8108 10.693 16.8398C10.5732 16.8778 10.4244 16.9254 10.1535 16.9254C9.88194 16.9254 9.73312 16.8778 9.61332 16.8398C9.52106 16.8108 9.45409 16.79 9.29783 16.79C9.09246 16.79 8.92579 16.6233 8.92579 16.4179C8.92579 16.2125 9.09246 16.0458 9.29783 16.0458C9.56868 16.0458 9.7175 16.0927 9.83729 16.1306C9.9303 16.1596 9.99653 16.1812 10.1535 16.1812C10.3098 16.1812 10.3768 16.1596 10.469 16.1306C10.5888 16.0927 10.7376 16.0458 11.0092 16.0458ZM15.7153 16.0458C15.9207 16.0458 16.0874 16.2125 16.0874 16.4179C16.0874 16.6233 15.9207 16.79 15.7153 16.79C15.5583 16.79 15.4921 16.8108 15.3991 16.8398C15.2793 16.8778 15.1305 16.9254 14.8596 16.9254C14.5881 16.9254 14.4392 16.8778 14.3194 16.8398C14.2272 16.8108 14.1602 16.79 14.0039 16.79C13.7986 16.79 13.6319 16.6233 13.6319 16.4179C13.6319 16.2125 13.7986 16.0458 14.0039 16.0458C14.2748 16.0458 14.4236 16.0927 14.5434 16.1306L14.5969 16.147C14.6665 16.1674 14.734 16.1812 14.8596 16.1812C15.0159 16.1812 15.0829 16.1596 15.1751 16.1306C15.2949 16.0927 15.4437 16.0458 15.7153 16.0458ZM12.5011 10.3944C11.1045 10.3944 9.96825 11.5308 9.96825 12.9269C9.96825 13.3429 10.0739 13.7522 10.2681 14.1162C10.3053 14.1042 10.3425 14.0938 10.3805 14.0819C10.6409 14.0001 10.9363 13.907 11.4944 13.907C12.0532 13.907 12.3478 14.0001 12.6083 14.0819C12.8479 14.1571 13.0555 14.2226 13.4997 14.2226C13.9446 14.2226 14.1522 14.1571 14.3926 14.0819C14.5176 14.0425 14.6523 14.0015 14.8182 13.9688C14.8219 13.9554 14.8204 13.9435 14.8264 13.9309C14.964 13.6123 15.0332 13.2745 15.0332 12.9269C15.0332 11.5308 13.8978 10.3944 12.5011 10.3944ZM16.1791 6.06396L8.82087 6.06917C9.22342 8.98121 8.34912 11.8665 7.39446 12.8927C7.50384 13.1614 7.5909 13.5163 7.66457 13.9145C8.10283 13.9331 8.36996 14.0105 8.59914 14.0819C8.83873 14.1571 9.04633 14.2226 9.48981 14.2226C9.3209 13.8148 9.22417 13.3742 9.22417 12.9269C9.22417 11.1208 10.6945 9.65024 12.5011 9.65024C14.3078 9.65024 15.7773 11.1208 15.7773 12.9269C15.7773 13.2655 15.7104 13.5922 15.6084 13.9115C16.098 13.9219 16.3808 14.006 16.6241 14.0819C16.8161 14.1415 16.9932 14.1943 17.2826 14.2129C17.3637 13.6897 17.4686 13.2283 17.6048 12.8927C16.6501 11.8657 15.7751 8.97823 16.1791 6.06396ZM7.94657 6.06992L5.86388 6.0714L5.86835 12.3599H6.70544C7.38107 11.7786 8.40865 9.08614 7.94657 6.06992ZM19.1294 6.06173L17.0542 6.06322C16.5891 9.08167 17.6167 11.7779 18.2938 12.3599H19.1331L19.1294 6.06173Z"/>',
      }}
    />
  )
)

SeaView.displayName = 'SeaView'

export const tags = ['SeaView', '']
