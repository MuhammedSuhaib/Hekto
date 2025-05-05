'use client'
import { useUser } from '@clerk/nextjs'

export default function Welcome() {
    const { user } = useUser()
    return <div className='text-2xl font-semibold text-[#101750]'>Hi {user?.fullName || 'Guest'}!</div>
}
export function FirstName() {
    const { user } = useUser()
    return <div className='text-[14px] font-semibold '>{user?.firstName || 'Guest'}</div>
}