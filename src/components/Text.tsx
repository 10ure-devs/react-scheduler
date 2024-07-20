import React, { ReactElement, CSSProperties, HTMLAttributes } from "react";

import { TextType, TextStyles } from "../typography";
import { PrimaryColorPalette, ColorPalette } from "../designSystem";

export { TextType };
export interface TextProps {
  type?: TextType;
  children: string;
  fontColor?: ColorPalette;
  style?: CSSProperties;
}

export const Text = ({
  type = TextType.PARAGRAPH,
  children,
  fontColor,
  style,
  ...otherProps
}: TextProps & HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>): ReactElement => {
  const combinedStyles = aggregateStyles({ fontColor, style, type });
  return (
    <Typography type={type} style={combinedStyles} {...otherProps}>
      {children}
    </Typography>
  );
};

export default Text;

/**
 * Combine styles based on the based text type and any other one off style attributes
 */
function aggregateStyles(options: {
  type: TextType;
  fontColor?: ColorPalette;
  style?: CSSProperties;
  // NOTE - would like to add in text transform since it's commeon, but need to troubleshoot
  // textTransform?: Pick<CSSProperties, 'textTransform'>;
}): CSSProperties {
  const { type, fontColor, style } = options;
  const defaultTypeColor = TextStyles[type].color;
  return {
    ...(TextStyles[type] as CSSProperties),
    color: fontColor ?? defaultTypeColor ?? PrimaryColorPalette.MAIN_1,
    ...(Boolean(style) && { ...style })
  };
}

/**
 * translate typography to correct HTML type
 * aka. h1, h2, p, etc..
 */
function Typography({
  style,
  type,
  children,
  ...otherProps
}: TextProps & { style: CSSProperties } & HTMLAttributes<
    HTMLHeadingElement | HTMLParagraphElement
  >): ReactElement {
  switch (type) {
    case TextType.HEADING:
      return (
        <h1 style={style} {...otherProps}>
          {children}
        </h1>
      );
    case TextType.HEADING_MEDIUM:
    case TextType.HEADING_MEDIUM_LIGHT:
      return (
        <h2 style={style} {...otherProps}>
          {children}
        </h2>
      );
    case TextType.HEADING_SMALL:
      return (
        <h3 style={style} {...otherProps}>
          {children}
        </h3>
      );
    case TextType.HEADING_SMALL_LIGHT:
      return (
        <h4 style={style} {...otherProps}>
          {children}
        </h4>
      );
    case TextType.PARAGRAPH_SPAN:
      return (
        <span style={style} {...otherProps}>
          {children}
        </span>
      );
    default:
      return (
        <p style={style} {...otherProps}>
          {children}
        </p>
      );
  }
}
