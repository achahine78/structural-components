import React, { ReactNode } from "react";
import { getStylesFromProps } from "../../helpers";

export type PaddingProps = {
    p?: string | number;
    px?: string | number;
    py?: string | number;
    pt?: string | number;
    pr?: string | number;
    pb?: string | number;
    pl?: string | number;
    paddingUnit?: string;
};

export type MarginProps = {
    m?: string | number;
    mx?: string | number;
    my?: string | number;
    mt?: string | number;
    mr?: string | number;
    mb?: string | number;
    ml?: string | number;
    marginUnit?: string;
};

export type WidthProps = {
    width?: React.CSSProperties["width"];
    minWidth?: React.CSSProperties["minWidth"];
    maxWidth?: React.CSSProperties["maxWidth"];
    widthUnit?: string;
};

export type HeightProps = {
    height?: React.CSSProperties["height"];
    minHeight?: React.CSSProperties["minHeight"];
    maxHeight?: React.CSSProperties["maxHeight"];
    heightUnit?: string;
};

export type PositioningProps = {
    position?: React.CSSProperties["position"];
    inset?: React.CSSProperties["inset"];
    top?: React.CSSProperties["top"];
    right?: React.CSSProperties["right"];
    bottom?: React.CSSProperties["bottom"];
    left?: React.CSSProperties["left"];
};

export type FlexChildrenProps = {
    flexBasis?: React.CSSProperties["flexBasis"];
    flexShrink?: React.CSSProperties["flexShrink"];
    flexGrow?: React.CSSProperties["flexGrow"];
};

export type GridChildrenProps = {
    gridArea?: React.CSSProperties["gridArea"];
    gridColumn?: React.CSSProperties["gridColumn"];
    gridColumnStart?: React.CSSProperties["gridColumnStart"];
    gridColumnEnd?: React.CSSProperties["gridColumnEnd"];
    gridRow?: React.CSSProperties["gridRow"];
    gridRowStart?: React.CSSProperties["gridRowStart"];
    gridRowEnd?: React.CSSProperties["gridRowEnd"];
};

export type BoxProps = {
    children: ReactNode;
    as?: "div" | "span";
    style?: React.CSSProperties;
} & Partial<PaddingProps> &
    Partial<MarginProps> &
    Partial<PositioningProps> &
    Partial<FlexChildrenProps> &
    Partial<GridChildrenProps>;

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
    (props, forwardedRef) => {
        const { children, as = "div", style } = props;
        const computedStyles = {
            ...getStylesFromProps(props),
            ...style,
        };
        return as === "span" ? (
            <span ref={forwardedRef} style={computedStyles} {...props}>
                {children}
            </span>
        ) : (
            <div ref={forwardedRef} style={computedStyles} {...props}>
                {children}
            </div>
        );
    }
);
