
import { Box } from '@chakra-ui/react'
import Navbar from '../navbar/navbar'
import { LayoutProps } from './layout.props'

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <Box>
            <Box>
                <Navbar />
            </Box>

            <Box>
                {children}
            </Box>
        </Box>

    )
}

export default Layout