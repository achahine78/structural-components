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
} & BoxProps;

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
    (props, forwardedRef) => {
        const stylesFromProps = getStylesFromProps(props);
        const {
            display = "flex",
            direction,
            align,
            justify,
            wrap,
            style,
            gap,
        } = props;
        return (
            <Box
                {...props}
                style={{
                    display,
                    flexDirection: direction,
                    alignItems: align,
                    justifyContent: justify,
                    flexWrap: wrap,
                    gap: String(gap) + "px",
                    ...style,
                    ...stylesFromProps,
                }}
                ref={forwardedRef}
            />
        );
    }
);
