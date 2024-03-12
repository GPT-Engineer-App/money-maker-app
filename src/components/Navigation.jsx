import { Link, Box } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box as="nav" bg="teal.500" p={4}>
      <Link to="/" color="white" mr={4}>
        Home
      </Link>
      <Link to="/page-one" color="white" mr={4}>
        Page One
      </Link>
      <Link to="/page-two" color="white">
        Page Two
      </Link>
    </Box>
  );
};

export default Navigation;
