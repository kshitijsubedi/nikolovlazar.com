import { Heading, SimpleGrid, GridItem, VStack } from '@chakra-ui/react';

import { Video } from '@/types/video';
import VideoCard from '../video-card';

type Props = {
  videos: Video[];
};

const VideosSection = ({ videos }: Props) => {
  return (
    <VStack w='full' alignItems='flex-start' spacing={4} as='section'>
      <Heading size='md'>Recent videos.</Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={6}
        w='full'
        columnGap={12}
        rowGap={8}
      >
        {videos.map((video) => (
          <GridItem key={video.url} as='article'>
            <VideoCard {...video} />
          </GridItem>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default VideosSection;
