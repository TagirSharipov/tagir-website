'use server'
import { cookies } from 'next/headers';

export async function create(data: string | undefined) {
  console.log('data', data)
  const cookieStore = cookies();

  if (data)
    cookieStore.set({
      name: 'access',
      value: data,
      path: '/',
    });
}
