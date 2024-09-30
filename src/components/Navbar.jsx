import { useDisclosure } from "@mantine/hooks";
import { Button, Burger, Menu } from "@mantine/core";
import { Link } from "react-router-dom";
import { useToggle } from "@mantine/hooks";

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();
  const [value, { toggleColor }] = useToggle([
    "blue",
    "orange",
    "cyan",
    "teal",
  ]);

  const MyMenu = () => {
  const [color, setColor] = useState('teal');
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
      )}

      <Menu>
        <Button
          component={Link}
          to="/"
          color={color}
          onClick={() => { toggleBtnColor("orange"); 
            toggleDropdown();}} >
          Home {toggleColor}
        
        </Button>


        {dropdownVisible && (
        <Menu.Dropdown>
 <Menu.Item component={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item component={Link} to="/joblist">
            Job List
          </Menu.Item>
</Menu.Dropdown>)}
</Menu>

        <Button
          component={Link}
          to="/joblist"
          color={"cyan"}
          onClick={() => toggleColor("orange")}
        
          Job List {toggleColor}
        </Button>

        <Menu.Target>
          <Link to="/joblist"> Job List</Link>
        </Menu.Target>

      
    </>
  );
};

export default Navbar;
