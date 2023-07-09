import Layout from '@/components/layout/layout'
import { auth } from '@/firebase'
import { Box , Text , Button , Avatar, Menu } from '@chakra-ui/react'
import { signInWithPopup , GoogleAuthProvider } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'
import { useToast } from '@chakra-ui/react'

const Register = () => {
    const router = useRouter()
    const [user , loading] = useAuthState(auth)
    const googleProvider = new GoogleAuthProvider
    const toast = useToast()

    const signHandler = async () => {
        try {
            const res = await signInWithPopup(auth , googleProvider );
            router.push('/')
            toast({
                title: 'Muofaqiyatlik amalga oshirildi',
                description: "",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
            
        }catch {
            console.log('error')
        }
    }

    useEffect(() => {
        if(user) {
            router.push('/')
        }
        if(!user) {
            router.push('/register')
        }
    } ,[user])

  return (
    <Layout>
        <Box className='wrapper' display={'flex'} justifyContent={'center'}  alignItems={'center'} minHeight={'100vh'}>
            <Box className='shadow' display={'flex'} flexDirection={'column'} justifyContent={'space-between'} p={'20px'} width={{base: '100%' , md: '400px'}} height={'300px'} rounded={'10px'}>
                <Box>
                    <Text fontWeight={'bold'} fontSize={'30px'}>Google yordamida kirish</Text>
                </Box>
                <Box>
                    <Button onClick={signHandler} p={'30px'} display={'flex'} width={{base: '100%'}} gap={'20px'} _hover={{bg: '#111'}} color={'white'} bg={'#333'}>
                        <Avatar display={{base: 'none' , md: 'block'}} />
                        Faqat Google orqalik kirish
                    </Button>
                </Box>
            </Box>
        </Box>
    </Layout>
  )
}

export default Register