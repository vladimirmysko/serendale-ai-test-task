import { cn } from "@/lib/utils";

export function Logo({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "font-montserrat text-2xl font-medium uppercase",
        className,
      )}
      {...props}
    >
      Serendale AI
    </span>
  );
}
