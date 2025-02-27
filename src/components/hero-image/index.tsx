import { Box, AspectRatio, Text, HStack, Flex } from '@chakra-ui/react';

import StatusIndicator from '../status-indicator';

const HeroImage = () => {
  return (
    <Flex position='relative' pb={4} justifyContent='center'>
      <AspectRatio flexShrink={0} ratio={1} w={56} h={56} as='figure'>
        <Box rounded='full' overflow='hidden'>
          <video autoPlay loop muted playsInline>
            <source
              src='/assets/videos/lazar-croissant.webm'
              type='video/webm'
            />
            <source src='/assets/videos/lazar-croissant.mp4' type='video/mp4' />
          </video>
        </Box>
      </AspectRatio>
      <StatusIndicator />
    </Flex>
  );
};

export default HeroImage;
