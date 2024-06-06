import { Container, Text, VStack } from "@chakra-ui/react";

const Private = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">This is a protected page</Text>
        <Text>You must be logged in to view this content.</Text>
      </VStack>
    </Container>
  );
};

export default Private;