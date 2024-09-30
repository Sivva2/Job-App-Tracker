<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Navbar } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Burger
      lineSize={4}
      size="xl"
      opened={opened}
      onClick={toggle}
      aria-label="Toggle navigation"
    />
  );
}

function Header() {
  return (
    <Navbar className="Navbar" width={{ base: 300 }} height="100vh">
      <Container>
        <Navbar.Section>Section 1</Navbar.Section>

        <Navbar.Brand>
          <Link to="/"> Job-App-Tracker</Link>
        </Navbar.Brand>

        <Navbar.Section>Section 2</Navbar.Section>
      </Container>
    </Navbar>
  );
}
export default Header;
=======
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
>>>>>>> 19673aa3ccdb7f0640a4a897e776662e9cdc3d2c
