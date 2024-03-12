import { Box, Heading, Image, Text } from "@chakra-ui/react";

const PageTwo = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Page Two - Stories from the Street
      </Heading>
      <Image src="https://example.com/poverty-image-2.jpg" alt="Poverty Image 2" />
      <Text mt={4}>More descriptions and stories about the situation in the streets...</Text>
    </Box>
  );
};

export default PageTwo;
