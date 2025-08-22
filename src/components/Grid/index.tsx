import React from "react";
import { getStylesFromProps } from "../../helpers";
import { Box, BoxProps } from "../Box";

export type GridProps = {
    display?: "none" | "inline-grid" | "grid";
    areas?: string;
    columns?: number;
    rows?: number;
    flow?: "row" | "column" | "dense" | "row-dense" | "column-dense";
    align?: "start" | "center" | "end" | "baseline" | "stretch";
    justify?: "start" | "center" | "end" | "between";
    gap?: number;
} & BoxProps;

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
    (props, forwardedRef) => {
        const stylesFromProps = getStylesFromProps(props);
        const {
            display = "grid",
            areas,
            columns,
            rows,
            flow,
            align,
            justify,
            gap,
            style,
        } = props;
        return (
            <Box
                {...props}
                style={{
                    display,
                    gridTemplateAreas: areas,
                    gridTemplateColumns: columns,
                    gridTemplateRows: rows,
                    gridAutoFlow: flow,
                    alignItems: align,
                    justifyContent: justify,
                    gap: String(gap) + "px",
                    ...style,
                    ...stylesFromProps,
                }}
                ref={forwardedRef}
            />
        );
    }
);
