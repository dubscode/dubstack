import { auth, currentUser } from '@clerk/nextjs/server';

export default async function HubPage() {
  const { userId } = await auth();
  const user = await currentUser();

  return (
    <div className='container mx-auto py-8 px-4'>
      <h1 className='text-4xl font-bold mb-4'>Hub</h1>
      <p className='text-lg'>Welcome, {user?.firstName}!</p>
      <p className='text-muted-foreground mt-2'>User ID: {userId}</p>
    </div>
  );
}
