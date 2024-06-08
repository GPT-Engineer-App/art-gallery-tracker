import React, { useState } from "react";
import { Container, VStack, Text, Checkbox, Box, Heading, IconButton, HStack } from "@chakra-ui/react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const galleries = [
  { id: 1, name: "Tate Modern", hasOpeningSoon: true },
  { id: 2, name: "National Gallery", hasOpeningSoon: false },
  { id: 3, name: "Saatchi Gallery", hasOpeningSoon: true },
  { id: 4, name: "Whitechapel Gallery", hasOpeningSoon: false },
  { id: 5, name: "Serpentine Galleries", hasOpeningSoon: true },
];

const Index = () => {
  const [markedGalleries, setMarkedGalleries] = useState([]);

  const toggleMarkGallery = (id) => {
    setMarkedGalleries((prev) => (prev.includes(id) ? prev.filter((galleryId) => galleryId !== id) : [...prev, id]));
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>
          London Galleries
        </Heading>
        {galleries.map((gallery) => (
          <Box key={gallery.id} p={4} borderWidth="1px" borderRadius="lg" width="100%">
            <HStack justifyContent="space-between">
              <Text fontSize="lg">{gallery.name}</Text>
              <HStack>
                {gallery.hasOpeningSoon && <Text color="green.500">Opening Soon</Text>}
                <IconButton aria-label="Mark Gallery" icon={markedGalleries.includes(gallery.id) ? <FaCheckCircle /> : <FaTimesCircle />} onClick={() => toggleMarkGallery(gallery.id)} colorScheme={markedGalleries.includes(gallery.id) ? "green" : "red"} />
              </HStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
