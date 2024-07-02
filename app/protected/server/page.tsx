import { currentUser } from '@clerk/nextjs/server'

const Server = async () => {
  const user = await currentUser();

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Protected server-side page</h1>
        <p className='mt-4'>Hello, {user?.firstName}</p>
        <p className='mt-4'>
          Your gmail address is: {user?.emailAddresses[0].emailAddress}
        </p>
      </div>
    </section>
  )
}

export default Server
