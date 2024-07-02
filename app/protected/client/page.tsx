'use client'

import { useAuth, useUser } from '@clerk/nextjs'

const Client = () => {
  const { isLoaded, isSignedIn, user } = useUser()
  const { userId, sessionId, getToken } = useAuth()

  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Protected client-side page</h1>
        <div className='mt-4 flex flex-col gap-6'>
          <p>Hello, {user?.firstName}</p>
          <p>Your userId is: {userId}</p>
          <p>and sessionId is: {sessionId}</p>
        </div>
      </div>
    </section>
  )
}

export default Client
