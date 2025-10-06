import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const progressVariants = cva(
  "relative h-2 w-full overflow-hidden rounded-full transition-all",
  {
    variants: {
      variant: {
        default: "bg-secondary dark:bg-secondary/50",
        primary: "bg-primary/20 dark:bg-primary/30",
        success: "bg-green-100 dark:bg-green-900/30",
        warning: "bg-yellow-100 dark:bg-yellow-900/30",
        destructive: "bg-destructive/20 dark:bg-destructive/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const progressIndicatorVariants = cva(
  "h-full w-full flex-1 transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-foreground dark:bg-foreground/90",
        primary: "bg-primary dark:bg-primary/80",
        success: "bg-green-500 dark:bg-green-400",
        warning: "bg-yellow-500 dark:bg-yellow-400",
        destructive: "bg-destructive dark:bg-destructive/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  indicatorClassName?: string;
  showValue?: boolean;
  formatValue?: (value: number) => string;
  backgroundColor?: string;
  indicatorColor?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    {
      className,
      variant,
      indicatorClassName,
      value = 0,
      max = 100,
      showValue = false,
      formatValue = (v) => `${v}%`,
      backgroundColor,
      indicatorColor,
      ...props
    },
    ref
  ) => {
    const currentValue = value ?? 0;
    const percentage = max ? Math.min((currentValue / max) * 100, 100) : 0;

    return (
      <div className="w-full">
        <ProgressPrimitive.Root
          ref={ref}
          className={cn(
            progressVariants({ variant, className }),
            !variant && backgroundColor && "bg-transparent"
          )}
          style={backgroundColor ? { backgroundColor } : undefined}
          value={currentValue}
          max={max}
          {...props}
        >
          <ProgressPrimitive.Indicator
            className={cn(
              progressIndicatorVariants({ variant }),
              indicatorClassName,
              !variant && indicatorColor && "bg-transparent"
            )}
            style={{
              transform: `translateX(-${100 - percentage}%)`,
              ...(indicatorColor ? { backgroundColor: indicatorColor } : {}),
            }}
          />
        </ProgressPrimitive.Root>
        {showValue && (
          <div className="mt-1.5 text-xs text-muted-foreground text-right">
            {formatValue(currentValue)}
          </div>
        )}
      </div>
    );
  }
);

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress, progressVariants };
