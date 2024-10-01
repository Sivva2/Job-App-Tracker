import { useDisclosure } from "@mantine/hooks";
import { Button, Menu } from "@mantine/core";
import { Link } from "react-router-dom";
//import { useToggle } from "@mantine/hooks";
import { useState } from "react";

import { Autocomplete, Group, Burger, rem } from "@mantine/core";

import { IconSearch } from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "../styles/HeaderSearch.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/joblist", label: "Joblist" },
  //  { link: "/learn", label: "Learn" },
  // { link: "/community", label: "Community" },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <MantineLogo size={28} />
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
}

/* const Navbar = () => {
     const [opened, { toggle }] = useDisclosure();
  const [value, { toggleColor }] = useToggle([
    "blue",
    "orange",
    "cyan",
    "teal",
  ]);

  const MyMenu = () => {
    const [color, setColor] = useState("teal");
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleBtnColor = (newColor) => {
      setColor(newColor);
    };

    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };

  return (
    <>
          <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
      {opened && (
        <ul>
          <li>
            <Link to="/"> Home</Link> |<Link to="/joblist"> Job List</Link> |
          </li>
        </ul>
      )} }

      <Menu opened={dropdownVisible} onChange={setDropdownVisible}>
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item component={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item component={Link} to="/joblist">
            Job List
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

       <Button
        component={Link}
        to="/joblist"
        color={"cyan"}
        onClick={() => toggleColor("orange")}
      >
        Job List {toggleColor}
      </Button> 

      <Link to="/joblist"> Job List</Link>
    </>
  );
}; */

export default Navbar;
