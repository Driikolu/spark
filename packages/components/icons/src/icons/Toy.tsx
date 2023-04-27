import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Toy = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5732 8.81732C13.8797 8.81732 14.1284 8.55904 14.1284 8.24056 14.1284 7.92208 13.8797 7.6638 13.5732 7.6638 13.2666 7.6638 13.0172 7.92208 13.0172 8.24056 13.0172 8.55904 13.2666 8.81732 13.5732 8.81732ZM10.4082 8.81732C10.7148 8.81732 10.9634 8.55904 10.9634 8.24056 10.9634 7.92208 10.7148 7.6638 10.4082 7.6638 10.1016 7.6638 9.853 7.92208 9.853 8.24056 9.853 8.55904 10.1016 8.81732 10.4082 8.81732Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.1681 14.9527C17.9693 15.4723 17.4325 15.7428 16.9235 15.6087C16.867 15.5836 16.8054 15.5714 16.7467 15.5508L16.3089 15.3702C16.3045 15.3512 16.2979 15.3329 16.2935 15.3139C16.2451 15.0716 16.1827 14.8354 16.105 14.6068C16.1006 14.5931 16.0947 14.5794 16.0903 14.5664C16.0111 14.3394 15.9165 14.1222 15.8109 13.912C15.7984 13.8883 15.7874 13.8647 15.7749 13.8419C15.5505 13.4114 15.2704 13.0213 14.9425 12.683C14.9257 12.6655 14.9124 12.6449 14.8963 12.6281C15.1369 12.5497 15.4002 12.5565 15.6422 12.6563L17.5975 13.4624C17.8593 13.5699 18.0647 13.7786 18.1776 14.0491C18.2905 14.3203 18.2957 14.6198 18.1681 14.9527ZM16.0456 19.3436C15.6341 19.3436 15.2623 19.1714 14.9887 18.8948C14.9469 18.8529 14.9124 18.8064 14.8758 18.7607C14.8479 18.7249 14.8164 18.6921 14.7914 18.6533C14.7665 18.616 14.7482 18.574 14.7269 18.5352C14.699 18.4834 14.6682 18.4339 14.6455 18.3798C14.6367 18.3584 14.633 18.3348 14.625 18.3127C14.5633 18.1413 14.5252 17.9577 14.5252 17.7641C14.5252 17.6575 14.5362 17.5531 14.556 17.4518C14.6536 16.955 14.9807 16.5405 15.4148 16.3318C15.4222 16.328 15.4288 16.3226 15.4368 16.3196C15.4992 16.2906 15.5659 16.2716 15.6319 16.2518C15.6627 16.2426 15.6921 16.2297 15.7229 16.2228C15.7771 16.2106 15.8343 16.2076 15.8908 16.2015C15.9422 16.1961 15.9928 16.1855 16.0456 16.1855C16.1893 16.1855 16.3257 16.2129 16.457 16.2518L16.5223 16.2784C16.5641 16.2952 16.6074 16.3028 16.6499 16.3173C17.1882 16.5603 17.5659 17.1165 17.5659 17.7641C17.5659 18.635 16.8839 19.3436 16.0456 19.3436ZM11.9979 19.438C11.1141 19.438 10.3844 19.3146 9.8211 19.0685C9.89224 18.958 9.95164 18.84 10.0045 18.718C10.0228 18.6754 10.0375 18.632 10.0529 18.5878C10.0851 18.4986 10.1123 18.4087 10.1343 18.3165C10.1445 18.2716 10.1555 18.2274 10.1636 18.1817C10.1878 18.0445 10.2047 17.9051 10.2047 17.7641C10.2047 17.614 10.1885 17.4685 10.1614 17.326C10.1504 17.2659 10.1313 17.2095 10.1159 17.1508C10.0954 17.0731 10.0749 16.9954 10.047 16.9207C10.0206 16.8506 9.98832 16.7843 9.95531 16.7165C9.92818 16.6609 9.90104 16.6053 9.8695 16.5527C9.8277 16.4819 9.78296 16.4156 9.73455 16.35C9.70302 16.3074 9.67001 16.2655 9.63481 16.2243C9.58054 16.1603 9.5248 16.0986 9.46393 16.0415C9.42652 16.0049 9.38545 15.9729 9.34511 15.9394C9.28131 15.8868 9.21823 15.835 9.14929 15.7893C9.09942 15.7565 9.04661 15.7306 8.99454 15.7017C8.92853 15.6659 8.86473 15.6262 8.79505 15.5973C8.67771 15.547 8.55596 15.5081 8.43055 15.4792C8.45622 15.3497 8.48702 15.2217 8.52369 15.0952C8.55083 15 8.57283 14.9009 8.6051 14.808C8.67551 14.6114 8.76205 14.4247 8.85593 14.2426C8.8838 14.1885 8.90506 14.1299 8.93513 14.078C9.05688 13.8617 9.19696 13.6605 9.35025 13.4723C9.36345 13.4563 9.37298 13.4373 9.38692 13.4213C9.55707 13.2186 9.74482 13.0358 9.94798 12.875C9.94944 12.8758 9.95164 12.8758 9.95384 12.8765C10.5508 13.0533 11.2307 13.15 11.9825 13.15C12.743 13.15 13.4288 13.051 14.0302 12.8704C14.0338 12.8697 14.0382 12.8689 14.0419 12.8681C14.2458 13.0289 14.4343 13.214 14.6059 13.4167C14.6294 13.4449 14.647 13.4784 14.6704 13.5074C14.812 13.6849 14.9455 13.8723 15.0599 14.075C15.0914 14.1306 15.1141 14.1923 15.1435 14.2502C15.2351 14.43 15.3217 14.6137 15.3899 14.8072C15.4236 14.9009 15.4456 15 15.4735 15.0967C15.5094 15.2224 15.5402 15.3497 15.5659 15.4792C15.4405 15.5081 15.318 15.5478 15.2014 15.5973C15.1325 15.6262 15.0694 15.6651 15.0041 15.7009C14.9513 15.7299 14.897 15.7565 14.8464 15.7893C14.7782 15.835 14.7152 15.8868 14.6521 15.9386C14.611 15.9721 14.5699 16.0049 14.5318 16.0415C14.4717 16.0994 14.4159 16.1603 14.3624 16.2236C14.3272 16.2655 14.2934 16.3074 14.2612 16.3508C14.2135 16.4156 14.168 16.4819 14.127 16.5527C14.0954 16.6053 14.0683 16.6617 14.0412 16.7173C14.0082 16.7843 13.9759 16.8506 13.9495 16.9207C13.9209 16.9954 13.9011 17.0739 13.8805 17.1516C13.8644 17.2095 13.8453 17.2659 13.8343 17.326C13.8079 17.4685 13.7918 17.614 13.7918 17.7641C13.7918 17.9051 13.8087 18.0438 13.8321 18.1809C13.8409 18.2274 13.8519 18.2723 13.8622 18.318C13.8842 18.4095 13.9113 18.4979 13.9429 18.5855C13.959 18.6304 13.9737 18.6754 13.9927 18.7196C14.0448 18.8407 14.1042 18.958 14.1754 19.0685C13.6121 19.3146 12.8824 19.438 11.9979 19.438ZM6.43126 17.7641C6.43126 17.1165 6.80897 16.5603 7.3473 16.3173C7.3891 16.3028 7.43311 16.2952 7.47418 16.2784L7.53872 16.2518C7.67073 16.2129 7.80788 16.1855 7.95089 16.1855C8.0037 16.1855 8.05284 16.1961 8.10418 16.2015C8.16138 16.2076 8.21932 16.2099 8.27433 16.2228C8.30367 16.2297 8.3308 16.2419 8.36014 16.251C8.42835 16.2708 8.49655 16.2899 8.56036 16.3196C8.56623 16.3226 8.57136 16.3264 8.57723 16.3295C9.01361 16.5375 9.34218 16.9535 9.44046 17.4518C9.46026 17.5531 9.47126 17.6575 9.47126 17.7641C9.47126 17.9683 9.43019 18.1619 9.36271 18.3417C9.35758 18.3539 9.35611 18.3668 9.35098 18.379C9.32678 18.4392 9.29304 18.4933 9.2615 18.5497C9.24317 18.584 9.22777 18.6198 9.2065 18.6525C9.17936 18.6937 9.14562 18.7295 9.11482 18.7683C9.08035 18.8102 9.04808 18.8552 9.00921 18.894C8.73491 19.1714 8.36234 19.3436 7.95089 19.3436C7.1126 19.3436 6.43126 18.635 6.43126 17.7641ZM5.80493 14.891C5.70078 14.6198 5.70592 14.3203 5.81886 14.0491C5.93108 13.7786 6.1379 13.5699 6.39899 13.4624L8.35427 12.6563C8.48702 12.6022 8.6271 12.5748 8.76572 12.5748C8.87866 12.5748 8.99234 12.5931 9.10015 12.6281C9.08402 12.6449 9.07082 12.6655 9.05468 12.6822C8.72538 13.022 8.44448 13.4129 8.21932 13.8449C8.20832 13.8662 8.19805 13.8876 8.18779 13.9081C8.08071 14.1207 7.98463 14.3409 7.90469 14.5702C7.90029 14.5824 7.89589 14.5939 7.89149 14.6053C7.81301 14.8354 7.75067 15.0731 7.70227 15.3161C7.6986 15.3344 7.69127 15.352 7.6876 15.371L7.24902 15.5516C7.22408 15.56 7.19768 15.566 7.17348 15.576C6.92045 15.6712 6.64542 15.6681 6.39386 15.5561C6.13276 15.4388 5.93181 15.2247 5.80493 14.891ZM8.01323 9.68643C8.01323 9.01748 8.25966 8.29747 8.68064 7.65595C8.69531 7.63462 8.71144 7.61405 8.72611 7.59195C8.85226 7.40605 8.99381 7.22776 9.14782 7.06014C9.16689 7.03957 9.18523 7.01976 9.2043 6.99995C9.34878 6.84833 9.505 6.70814 9.67001 6.57709C9.70888 6.54586 9.74702 6.51309 9.78736 6.48338C9.8695 6.42319 9.95458 6.36528 10.0404 6.31119C10.1511 6.24186 10.2633 6.17633 10.3785 6.11919C10.8691 5.87005 11.4111 5.72071 11.9825 5.72071C12.5531 5.72071 13.0943 5.86928 13.5835 6.1169C13.7001 6.17481 13.8131 6.24109 13.9245 6.31043C14.0111 6.36528 14.0962 6.42319 14.179 6.48414C14.2186 6.51309 14.256 6.54509 14.2942 6.57481C14.4599 6.70662 14.6169 6.84833 14.7621 6.99995C14.7804 7.01976 14.7988 7.03957 14.8171 7.05938C14.9726 7.22776 15.1134 7.40681 15.241 7.59348C15.255 7.61481 15.2704 7.63462 15.2843 7.65595C15.7067 8.29747 15.9524 9.01748 15.9524 9.68643C15.9524 10.9634 15.109 11.7116 13.9979 12.0857C13.9964 12.0857 13.9949 12.0857 13.9942 12.0857C13.849 12.1352 13.6957 12.1786 13.538 12.216C13.5358 12.2167 13.5329 12.2167 13.5307 12.2175C13.2153 12.2914 12.878 12.3409 12.5325 12.366L12.5135 12.3676C12.4584 12.3714 12.4042 12.3714 12.3492 12.3737V10.6182L12.875 10.072C13.087 9.85176 12.9366 9.47538 12.6367 9.47538H11.329C11.029 9.47538 10.8787 9.85176 11.0906 10.072L11.6158 10.6175V12.3744C11.5696 12.3721 11.5226 12.3729 11.4764 12.3691C11.4698 12.3691 11.4617 12.3683 11.4544 12.3676C11.109 12.3432 10.7709 12.2952 10.454 12.222C10.4533 12.222 10.4526 12.222 10.4518 12.222C10.2919 12.1847 10.1379 12.142 9.99125 12.0925H9.98978C8.86839 11.7207 8.01323 10.9718 8.01323 9.68643ZM8.14672 7.10281C7.87389 6.87805 7.70887 6.53443 7.70887 6.16186C7.70887 5.50052 8.22666 4.96186 8.86326 4.96186C9.2703 4.96186 9.64214 5.18814 9.84897 5.53709C9.82623 5.55005 9.80496 5.56681 9.78223 5.58052C9.69495 5.63157 9.61134 5.68795 9.52773 5.74509C9.2241 5.94928 8.94174 6.18852 8.68357 6.45748C8.66451 6.47805 8.64397 6.49786 8.6249 6.51843C8.53249 6.61824 8.44595 6.72109 8.36087 6.82776C8.34474 6.84833 8.32934 6.86814 8.31393 6.88871C8.25819 6.96033 8.19879 7.02814 8.14672 7.10281ZM14.1167 5.53709C14.3235 5.18814 14.6961 4.96186 15.1024 4.96186C15.739 4.96186 16.2575 5.50052 16.2575 6.16186C16.2575 6.53443 16.0918 6.87805 15.8189 7.10281C15.7676 7.0289 15.7082 6.96109 15.6532 6.88948C15.6363 6.8689 15.6202 6.84757 15.6033 6.82624C15.5197 6.72109 15.4339 6.619 15.343 6.52071C15.321 6.49709 15.2975 6.475 15.2748 6.45062C15.0203 6.18547 14.7408 5.94928 14.4409 5.74662C14.3565 5.68947 14.2722 5.63233 14.1834 5.58052C14.1607 5.56681 14.1394 5.55005 14.1167 5.53709ZM18.8509 13.7474C18.6602 13.2895 18.3111 12.9367 17.8681 12.7539L15.9121 11.9485C15.8615 11.9272 15.8072 11.9241 15.7551 11.9081C16.3529 11.3314 16.6858 10.5763 16.6858 9.68643C16.6858 9.04871 16.5069 8.38205 16.1937 7.75652C16.6858 7.39309 16.9909 6.8049 16.9909 6.16186C16.9909 5.07995 16.1438 4.19995 15.1024 4.19995C14.4057 4.19995 13.7742 4.60909 13.4478 5.22776C12.9887 5.05709 12.4973 4.95881 11.9825 4.95881C11.4683 4.95881 10.977 5.05709 10.5178 5.22776C10.1922 4.60909 9.56074 4.19995 8.86326 4.19995C7.82255 4.19995 6.97546 5.07995 6.97546 6.16186C6.97546 6.8049 7.28056 7.39309 7.77194 7.75652C7.45877 8.38205 7.27982 9.04871 7.27982 9.68643C7.27982 10.5794 7.61499 11.3367 8.21639 11.9142C8.17239 11.9287 8.12691 11.9302 8.08364 11.9485L6.12836 12.7539C5.68465 12.9367 5.33554 13.2895 5.14559 13.7474C4.9549 14.2053 4.94757 14.7112 5.14706 15.2339C5.32234 15.6948 5.66191 16.0575 6.10269 16.2548C6.13936 16.2716 6.17677 16.2777 6.21417 16.2914C5.89587 16.6952 5.69785 17.2034 5.69785 17.7641C5.69785 19.0548 6.70849 20.1055 7.95089 20.1055C8.45402 20.1055 8.91387 19.9272 9.28937 19.6369C9.98538 20.008 10.8677 20.2 11.9979 20.2C13.1281 20.2 14.0104 20.008 14.7071 19.6369C15.0819 19.9272 15.5425 20.1055 16.0456 20.1055C17.288 20.1055 18.2993 19.0548 18.2993 17.7641C18.2993 17.2011 18.0991 16.6906 17.7786 16.286C18.2524 16.1062 18.6617 15.7253 18.8736 15.1721C19.0496 14.7112 19.0416 14.2053 18.8509 13.7474Z"/>',
      }}
    />
  )
)

export const tags = ['toy', 'criteria', 'hobbies']
