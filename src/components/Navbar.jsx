import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
      {opened && (
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
