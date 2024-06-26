import { BaseInputProps } from '@/components/organism/base-input/base-input.tsx'
import { getLayoutProps } from '@/types'
import { isNil } from '@/utils'

export const populateBaseInputProps = (props: BaseInputProps) => {
  const { layoutProps, className, ...otherBaseInputProps } = getLayoutProps(props)
  const {
    helperText,
    label,
    topOffset = '4px',
    bottomOffset = '4px',
    id,
    error,
    errorRender,
    htmlFor,
    ...otherInputContentProps
  } = otherBaseInputProps

  const isHelperTextEnabled = !isNil(helperText)
  const isLabelEnabled = !isNil(label)
  const isTopSectionEnabled = isLabelEnabled || isHelperTextEnabled
  const isBottomSectionEnabled = !isNil(error)

  const inputContentTopMargin = isTopSectionEnabled ? topOffset : 'none'
  const inputContentBottomMargin = isBottomSectionEnabled ? bottomOffset : 'none'

  return {
    wrapperProps: { ...layoutProps, className },
    baseInputTopSectionProps: {
      isLabelEnabled,
      label,
      isHelperTextEnabled,
      helperText,
      htmlFor: htmlFor ?? id,
    },
    baseInputBottomSectionProps: {
      error,
      errorRender,
    },
    contentProps: {
      ...otherInputContentProps,
      id,
      marginTop: inputContentTopMargin,
      marginBottom: inputContentBottomMargin,
    },
  }
}
