import { Product } from '@/assets'
import { Card, CardHeader, CardBody, CardFooter, Heading , Text , Stack, Divider, ButtonGroup, Button} from '@chakra-ui/react'
import Image  from 'next/image'
const Cards = () => {
    return (
        <>
            <Card maxW='sm' mt={{base: '30px' , md: '20px'}} >
                <CardBody>
                    <Image
                    src={Product}
                    alt='Green double couch with wooden legs'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        $450
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
}

export default Cards