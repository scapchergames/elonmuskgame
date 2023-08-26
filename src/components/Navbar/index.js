import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

function Navbar() {
    return (
        <Box alignItems='center' mb={5}>
            <Image src='/elon-musk-logo.png' m='auto' height={150} borderRadius='full' />
            <Text fontSize={40} mt={2} mb={2} fontWeight={700}>Spend Elon Musk' Money</Text>
        </Box>
       
    );
}

export default Navbar;
