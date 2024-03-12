import { Box, Heading, Image, Text } from "@chakra-ui/react";

const PageOne = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Page One - The Impact of Poverty
      </Heading>
      <Image src="https://example.com/poverty-image-1.jpg" alt="Poverty Image 1" />
      <Text mt={4}>Description for image and story of poverty...</Text>
    </Box>
  );
};

export default PageOne;
