import React, { ReactNode } from "react";

export type PaddingProps = {
    p: string;
    px: string;
    py: string;
    pt: string;
    pr: string;
    pb: string;
    pl: string;
};

export type MarginProps = {
    m: string;
    mx: string;
    my: string;
    mt: string;
    mr: string;
    mb: string;
    ml: string;
};

export type WidthProps = {
    width: string;
    minWidth: string;
    maxWidth: string;
};

export type HeightProps = {
    height: string;
    minHeight: string;
    maxHeight: string;
};

export type PositioningProps = {
    position: string;
    inset: string;
    top: string;
    right: string;
    bottom: string;
    left: string;
};

export type FlexChildrenProps = {
    flexBasis: string;
    flexShrink: string;
    flexGrow: string;
};

export type GridChildrenProps = {
    gridArea: string;
    gridColumn: string;
    gridColumnStart: string;
    gridColumnEnd: string;
    gridRow: string;
    gridRowStart: string;
    gridRowEnd: string;
};

export type BoxProps = {
    children: ReactNode;
    as?: "div" | "span";
};

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
    (props, forwardedRef) => {
        const { children, as = "div" } = props;
        return as === "span" ? (
            <span ref={forwardedRef} {...props}>
                {children}
            </span>
        ) : (
            <div ref={forwardedRef} {...props}>
                {children}
            </div>
        );
    }
);
