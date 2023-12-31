import { Box, Heading , Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'
import { auth } from '@/firebase'
import Cards from '@/components/cards/cards'

const HomePage = () => {

    const router = useRouter()
    const [user , loading] = useAuthState(auth)

    useEffect(() => {
        if(!user) {
            router.push('/register')
        }
    } ,[user])

  return (
    <Box className='wrapper'  flexDirection={'column'} display={'flex'} justifyContent={'space-between'}>

        <Box  display={'flex'} flexDirection={{base: 'column' , md: 'row'}} mt={{base: '150px' , md: '100px'}} alignItems={'center'} justifyContent={'space-between'}>
            <Heading fontWeight={'bold'}>
                <span style={{color: 'red'}}>MO</span>devco
            </Heading>
            <Text fontSize={'20px'}>
                Asosiy sahifaga hush kelibsz
            </Text>
        </Box>

        <Box mt={'100px'}  display={'flex'} justifyContent={'space-between'} flexDirection={'column'} gap={'100px'}>
            <Box  display={'flex'} flexWrap={'wrap'} mt={{base: '100px' , md: '20px'}}  justifyContent={'space-between'}>
                <Cards />
                <Cards />
                <Cards />
            </Box>
            <Box  display={'flex'} flexWrap={'wrap'} mt={{base: '100px' , md: '20px'}}  justifyContent={'space-between'}>
                <Cards />
                <Cards />
                <Cards />
            </Box>
            <Box  display={'flex'} flexWrap={'wrap'} mt={{base: '100px' , md: '20px'}}  justifyContent={'space-between'}>
                <Cards />
                <Cards />
                <Cards />
            </Box>
            <Box  display={'flex'} flexWrap={'wrap'} mt={{base: '100px' , md: '20px'}}  justifyContent={'space-between'}>
                <Cards />
                <Cards />
                <Cards />
            </Box>
            <Box  display={'flex'} flexWrap={'wrap'} mt={{base: '100px' , md: '20px'}}  justifyContent={'space-between'}>
                <Cards />
                <Cards />
                <Cards />
            </Box>
            <Box  display={'flex'} flexWrap={'wrap'} mt={{base: '100px' , md: '20px'}}  justifyContent={'space-between'}>
                <Cards />
                <Cards />
                <Cards />
            </Box>
        </Box>

    </Box>
  )
}

export default HomePage