import { Box , Button, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { Avatar } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase'
import { useToast } from '@chakra-ui/react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

const Navbar = () => {
    const router = useRouter()
    const [user , loading] = useAuthState(auth)
    const toast = useToast()


    const singOut = () => {
        auth.signOut()
        toast({
            title: 'Siz profilingizdan chiqtingiz',
            description: "",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
    }

    

    return (

        <Box className='shadow' width={'100%'} height={{base: '14vh' , md: '7vh'}} position={'fixed'} zIndex={2}  bg={'white'}>
            <Box className='wrapper' display={'flex'} flexDirection={{base: 'column' , md: 'row'}} p={'10px'} justifyContent={'space-between'} alignItems={'center'} >
                <Box fontWeight={'bold'} fontSize={'30px'}>
                    <span style={{color: 'red'}}>MO</span>devco
                </Box>
              { !user && <Box display={'flex'} gap={3}>
                    <Link href={'/register'}>
                        <Button bg={'transparent'} border={'2px'} borderColor={'blue.300'}>Ro'yhatdan o'tish</Button>
                    </Link>
                </Box>}

             {user && 
                <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} alignItems={'center'}>
                    <Button bg={'transparent'} _hover={{bg: 'transparent'}}>
                        <Menu>
                            <MenuButton>
                                <Avatar src={`${user.photoURL}`} />
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={singOut}  display={'flex'} gap={'10px'}>
                                    <CloseIcon />
                                    Sozlamalardan chiqish
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Button>
                    <Text display={{base: 'none' , md: 'block'}}>
                        {user.displayName}    
                    </Text>                    
                </Box>
            }
            </Box>
        </Box>

    )
}

export default Navbar