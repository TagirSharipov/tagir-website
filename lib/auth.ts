import 'server-only'
 
import { cookies } from 'next/headers'/* 
import { decrypt } from '@/app/lib/session' */
import { cache } from 'react'
 
export const verifiedSession = cache(async () => {
  const cookie = (cookies()).get('access')?.value;

 
  if (!cookie) return false;
  return true;
})