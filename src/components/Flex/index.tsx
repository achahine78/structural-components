import React from "react";
import { getStylesFromProps } from "../../helpers";
import { Box, BoxProps } from "../Box";

export type FlexProps = {
    display?: "none" | "inline-flex" | "flex";
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    align?: "start" | "center" | "end" | "baseline" | "stretch";
    justify?: "start" | "center" | "end" | "between";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    gap?: number;
    gapX?: number;
    gapY?: number;
} & BoxProps;

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
    (props, forwardedRef) => {
        const style = getStylesFromProps(props);
        const { display, direction, align, justify, wrap } = props;
        return (
            <Box
                {...props}
                style={{
                    display,
                    flexDirection: direction,
                    alignItems: align,
                    justifyContent: justify,
                    flexWrap: wrap,
                    ...style,
                }}
                ref={forwardedRef}
            />
        );
    }
);
