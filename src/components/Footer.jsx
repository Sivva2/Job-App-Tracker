import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "../styles/Footerlinks.module.css";

const links = [
  { link: "#", label: "Contact" },
  { link: "/", label: "Github" },
  // { link: "#", label: "Blog" },
  //{ link: "#", label: "Store" },
  //  { link: "#", label: "Careers" },
];
export function FooterCentered() {
  const items = links.map((link) =>
    React.createElement(
      Anchor,
      {
        c: "dimmed",
        key: link.label,
        href: link.link,
        lh: 1,
        onClick: (event) => event.preventDefault(),
        size: "sm",
      },
      link.label
    )
  );
  return React.createElement(
    "div",
    { className: classes.footer },
    React.createElement(
      "div",
      { className: classes.inner },
      React.createElement(MantineLogo, { size: 28 }),
      React.createElement(Group, { className: classes.links }, items),
      React.createElement(
        Group,
        { gap: "xs", justify: "flex-end", wrap: "nowrap" },
        React.createElement(
          ActionIcon,
          { size: "lg", variant: "default", radius: "xl" },
          React.createElement(IconBrandTwitter, {
            style: { width: rem(18), height: rem(18) },
            stroke: 1.5,
          })
        ),
        React.createElement(
          ActionIcon,
          { size: "lg", variant: "default", radius: "xl" },
          React.createElement(IconBrandYoutube, {
            style: { width: rem(18), height: rem(18) },
            stroke: 1.5,
          })
        ),
        React.createElement(
          ActionIcon,
          { size: "lg", variant: "default", radius: "xl" },
          React.createElement(IconBrandInstagram, {
            style: { width: rem(18), height: rem(18) },
            stroke: 1.5,
          })
        )
      )
    )
  );
}
