import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Props =
  | ({ as: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as?: "a"; href: string } & AnchorHTMLAttributes<HTMLAnchorElement>);

export default function Button(props: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition";
  const filled = "bg-white text-black hover:bg-neutral-200";
  const outline = "border border-white/30 hover:bg-white hover:text-black";

  const className =
    (props.className || "") + " " + base + " " + (props["data-variant"] === "outline" ? outline : filled);

  if ("as" in props && props.as === "button") {
    const { as, ...rest } = props as any;
    return <button {...rest} className={className} />;
  }

  const { href, ...rest } = props as any;
  return <Link href={href} {...rest} className={className} />;
}
