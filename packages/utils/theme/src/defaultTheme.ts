import type { Theme } from './types'

export const defaultTheme: Theme = {
  borderRadius: {
    none: '0px',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  borderWidth: {
    none: '0px',
    sm: '1px',
    md: '2px',
  },
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.2)',
    DEFAULT: '0 4px 8px 0 rgb(0 0 0 / 0.2)',
    md: '0 6px 12px 0 rgb(0 0 0 / 0.2)',
    lg: '0 8px 16px 0 rgb(0 0 0 / 0.2)',
    xl: '0 12px 24px 0 rgb(0 0 0 / 0.2)',
    none: 'none',
  },
  colors: {
    // Primary
    primary: '#2118C9',
    onPrimary: '#FFFFFF',
    primaryHovered: '#5952D6',
    primaryDisabled: '#F4F4FC',
    primaryFocused: '#5952D6',
    // Primary container
    primaryContainer: '#E2E1F8',
    onPrimaryContainer: '#140E79',
    primaryContainerHovered: '#F4F4FC',
    primaryContainerDisabled: '#F4F4FC',
    primaryContainerFocused: '#F4F4FC',
    // Primary Variant
    primaryVariant: '#140E79',
    onPrimaryVariant: '#FFFFFF',
    primaryVariantHovered: '#191297',
    primaryVariantDisabled: '#F4F4FC',
    primaryVariantFocused: '#191297',
    // Secondary
    secondary: '#FD398A',
    onSecondary: '#FFFFFF',
    secondaryHovered: '#FE6BA7',
    secondaryDisabled: '#FFF5F9',
    secondaryFocused: '#FE6BA7',
    // Secondary Container
    secondaryContainer: '#FFE1ED',
    onSecondaryContainer: '#982253',
    secondaryContainerHovered: '#FFF5F9',
    secondaryContainerDisabled: '#FFF5F9',
    secondaryContainerFocused: '#FFF5F9',
    // Secondary Variant
    secondaryVariant: '#982253',
    onSecondaryVariant: '#FFFFFF',
    secondaryVariantHovered: '#CA2E6E',
    secondaryVariantDisabled: '#FFF5F9',
    secondaryVariantFocused: '#CA2E6E',
    // Success
    success: '#31A56B',
    onSuccess: '#FFFFFF',
    successHovered: '#64BC90',
    successDisabled: '#F5FBF8',
    successFocused: '#64BC90',
    // Success container
    successContainer: '#E0F2E9',
    onSuccessContainer: '#1D6340',
    successContainerHovered: '#F5FBF8',
    successContainerDisabled: '#F5FBF8',
    successContainerFocused: '#F5FBF8',
    // Alert
    alert: '#F4BF48',
    onAlert: '#000000',
    alertHovered: '#F7CF76',
    alertDisabled: '#FFFCF6',
    alertFocused: '#F7CF76',
    // Alert container
    alertContainer: '#FDF5E4',
    onAlertContainer: '#92732B',
    alertContainerHovered: '#FFFCF6',
    alertContainerDisabled: '#FFFCF6',
    alertContainerFocused: '#FFFCF6',
    // Error
    error: '#F65651',
    onError: '#FFFFFF',
    errorHovered: '#F8807D',
    errorDisabled: '#FFF7F6',
    errorFocused: '#F8807D',
    // Error container
    errorContainer: '#FEE6E5',
    onErrorContainer: '#943431',
    errorContainerHovered: '#FFF7F6',
    errorContainerDisabled: '#FFF7F6',
    errorContainerFocused: '#FFF7F6',
    // Info
    info: '#07A0B8',
    onInfo: '#FFFFFF',
    infoHovered: '#45B8CA',
    infoDisabled: '#F3FAFC',
    infoFocused: '#45B8CA',
    // Info container
    infoContainer: '#DAF1F4',
    onInfoContainer: '#04606E',
    infoContainerHovered: '#F3FAFC',
    infoContainerDisabled: '#F3FAFC',
    infoContainerFocused: '#F3FAFC',
    // Neutral
    neutral: '#7B7986',
    onNeutral: '#FFFFFF',
    neutralHovered: '#9C9BA4',
    neutralDisabled: '#F8F8F9',
    neutralFocused: '#9C9BA4',
    // Neutral container
    neutralContainer: '#EBEBED',
    onNeutralContainer: '#4A4950',
    neutralContainerHovered: '#F8F8F9',
    neutralContainerDisabled: '#F8F8F9',
    neutralContainerFocused: '#F8F8F9',
    // Background
    background: '#FFFFFF',
    onBackground: '#000000',
    backgroundHovered: '#F4F4FC',
    backgroundDisabled: '#F8F8F9',
    backgroundFocused: '#000000', // use with dim-5 opacity
    // Background variant
    backgroundVariant: '#F8F8F9',
    onBackgroundVariant: '#000000',
    // Surface
    surface: '#FFFFFF',
    onSurface: '#000000',
    surfaceHovered: '#F4F4FC',
    surfaceDisabled: '#F8F8F9',
    surfaceFocused: '#000000', // use with dim-5 opacity
    // Surface Inverse
    surfaceInverse: '#252428',
    onSurfaceInverse: '#FFFFFF',
    surfaceInverseHovered: '#313036',
    surfaceInverseDisabled: '#F8F8F9',
    surfaceInverseFocused: '#313036',
    // Outline
    outline: '#D1D0D5',
    outlineHigh: '#000000',
    outlineHovered: '#2118C9',
    outlineDisabled: '#F8F8F9',
    outlineFocused: '#D1D0D5',
    // Overlay
    overlay: '#313036', // use with dim-1 opacity
    onOverlay: '#FFFFFF',
  },
  fontFamily: {
    nunitoSans: '"Nunito Sans", sans-serif',
    openSans:
      'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"',
  },
  fontSize: {
    display1: { fontSize: '2.5rem', lineHeight: '3.5rem', fontWeight: '700' },
    display1Expanded: { fontSize: '3rem', lineHeight: '4rem', fontWeight: '700' },
    display2: { fontSize: '2rem', lineHeight: '2.75rem', fontWeight: '700' },
    display2Expanded: { fontSize: '2.5rem', lineHeight: '3.5rem', fontWeight: '700' },
    display3: { fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '700' },
    display3Expanded: { fontSize: '2rem', lineHeight: '2.75rem', fontWeight: '700' },
    headline1: { fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '700' },
    headline1Expanded: { fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '700' }, //
    headline2: { fontSize: '1.125rem', lineHeight: '1.5rem', fontWeight: '700' }, //
    headline2Expanded: { fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '700' }, //
    subhead: { fontSize: '1rem', lineHeight: '1.5rem', fontWeight: '700' },
    subheadExpanded: { fontSize: '1rem', lineHeight: '1.5rem', fontWeight: '700' },
    body1: { fontSize: '1rem', lineHeight: '1.5rem' },
    body2: { fontSize: '0.875rem', lineHeight: '1.25rem' },
    caption: { fontSize: '0.75rem', lineHeight: '1rem' },
    small: { fontSize: '0.625rem', lineHeight: '0.875rem' },
    body1Link: { fontSize: '1rem', lineHeight: '1.5rem' },
    body2Link: { fontSize: '0.875rem', lineHeight: '1.125rem' },
    captionLink: { fontSize: '0.75rem', lineHeight: '1rem' },
    callout: { fontSize: '1rem', lineHeight: '1.5rem' },
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  opacity: {
    0: '0',
    dim1: '0.72',
    dim2: '0.56',
    dim3: '0.40',
    dim4: '0.16',
    dim5: '0.08',
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  spacing: {
    auto: 'auto',
    none: '0px',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.5rem',
  },
  zIndex: {
    hide: '-1',
    base: '0',
    raised: '1',
    dropdown: '1000',
    sticky: '1100',
    overlay: '1300',
    modal: '1400',
    popover: '1500',
    skipLink: '1600',
    toast: '1700',
    tooltip: '1800',
  },
}
