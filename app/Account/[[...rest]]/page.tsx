import {
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import Welcome from '@/components/Welcome';
function AccountPage() {
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="My Account" />

      <div className="flex flex-col items-center justify-center md:h-[905px] p-4">
        <div className="mb-[109px] w-full flex flex-col items-center justify-center bg-white p-6 shadow-md md:w-[544px]">
          {/* show this to user if is currently signed Out */}
          <SignedOut>
            <h2 className="mb-6 text-center text-[32px] font-bold">Login</h2>
            <p>You need to log in to access this page.</p>
            <SignIn path="/account" routing="path" />
          </SignedOut>
          {/* if user is signed in, show the UserButton */}
          <SignedIn>
            <Welcome />
            <p className="mb-6 text-center text-[16px] font-semibold">
              Welcome to your account! Here you can manage your Profile and settings.
            </p>
            {/* UserButton will show the user profile */}
            <UserButton />
          </SignedIn>
        </div>

        <Image
          src="/image.png"
          alt="Partners"
          width={1246}
          height={128}
          className="hidden h-[128px] w-[1246px] md:block"
        />
        <Image
          src="/image.png"
          alt="Partners"
          width={260}
          height={60}
          className="m-4 h-[60px] w-[260px] md:hidden"
        />
      </div>

      <Footer />
      <Mi />
    </div>
  );
}

export default AccountPage;
