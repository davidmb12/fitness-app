import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import LogoutButton from '../Buttons/LogoutButton';
import ThemeToogle from '../Buttons/ThemeToogle';

const Header = async () => {
  const session = await getServerSession(authOptions)

  return (
    <header className='px-4 py-8'>
      <Navbar isBordered>
        <NavbarContent>
          <NavbarBrand>
            <Link href='/dashboard'>
              FITNESS TRACKER
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className='justify-end'>
          <NavbarItem className='flex items-center '>
            <ThemeToogle></ThemeToogle>
          </NavbarItem>
        </NavbarContent>
        {
          session && (
            <>
              <Link href='/dashboard/new'>
                Post Exercise
              </Link>
              <LogoutButton></LogoutButton>
            </>
          )
        }
        {
          !session && (
            <>
              <Link href='/login'>LogIn</Link>
              <Link href='/login'>SignUp</Link>
            </>
          )
        }
      </Navbar>
    </header>
  )
}

export default Header