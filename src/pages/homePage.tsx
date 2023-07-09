import { Box, Heading , Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'
import { auth } from '@/firebase'

const HomePage = () => {

    const router = useRouter()
    const [user , loading] = useAuthState(auth)

    useEffect(() => {
        if(!user) {
            router.push('/register')
        }
    } ,[user])

  return (
    <Box className='wrapper' display={'flex'} alignItems={'center'} justifyContent={'space-between'}>

        <Heading fontWeight={'bold'}>
            <span style={{color: 'red'}}>MO</span>devco
        </Heading>
        <Text fontSize={'20px'}>
            Asosiy sahifaga hush kelibsz
        </Text>

    </Box>
  )
}

export default HomePage