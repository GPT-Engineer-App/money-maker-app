import React, { useState } from "react";
import { Box, Button, Container, Heading, Image, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { FaDonate } from "react-icons/fa";

const Index = () => {
  const [amount, setAmount] = useState("");
  const toast = useToast();

  const handleDonateClick = () => {
    // This is where you would integrate with a payment processor
    toast({
      title: "Donation Received!",
      description: `Thank you for your generous donation of $${amount}!`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setAmount("");
  };

  return (
    <Container maxW="container.md" py={10}>
      <Stack spacing={6} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGFyaXR5fGVufDB8fHx8MTcxMDI1MTQ4NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Charity Image" />
        <Heading as="h1" size="xl">
          Support Our Cause
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your donation can make a difference! Any amount you contribute helps us continue our work.
        </Text>
        <Box w="full">
          <Input placeholder="Enter donation amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} mb={4} />
          <Button leftIcon={<FaDonate />} colorScheme="green" w="full" isDisabled={!amount} onClick={handleDonateClick}>
            Donate Now
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default Index;
