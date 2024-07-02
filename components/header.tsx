import React from 'react'
import { ThemeToggle } from './theme-toggle'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='m-4 flex items-center justify-between'>
      <div>
        <ul className='flex flex-row gap-6'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/protected/server'>Server</Link>
          </li>
          <li>
            <Link href='/protected/client'>Client</Link>
          </li>
          <li>
            <Link href='/api/me'>Who am I?</Link>
          </li>
        </ul>
      </div>
      <div className='flex gap-6'>
        <ThemeToggle />
        <SignedOut>
          <SignInButton>
            <Button>Sign in</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default Header
