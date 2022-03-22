import React from "react";
import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";

function Home({ providers }) {
  return (
    <div className='space-y-10 relative'>
      <Head>
        <title>LinkedIn</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='flex justify-around items-center py-4'>
        <div className='relative w-36 h-10'>
          <Image
            src='https://media-exp1.licdn.com/dms/image/C5612AQHvzL-_J1rRWg/article-cover_image-shrink_600_2000/0/1614895141102?e=1652918400&v=beta&t=OqN1hfB-zwVtpmdvRzqdl2ANXn_8PPM00ip3T-cn2Zo'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='flex items-center sm:divide-x divide-gray-300'>
          <div className='hidden sm:flex space-x-8 pr-4'>
            <HeaderLink Icon={ExploreIcon} text='Discover' />
            <HeaderLink Icon={GroupIcon} text='People' />
            <HeaderLink Icon={OndemandVideoSharpIcon} text='Learning' />
            <HeaderLink Icon={BusinessCenterIcon} text='Jobs' />
          </div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className='pl-4'>
                <button
                  className='text-blue-700 font-semibold rounded-full border border-1 border-blue-700 px-5 py-1.5 transition-all hover:border-2'
                  onClick={() => {
                    signIn(provider.id, { callbackUrl: "/" });
                  }}
                >
                  Sign in
                </button>
              </div>
            </div>
          ))}
        </div>
      </header>
      <main className='flex flex-col xl:flex-row items-center max-w-screen-xl mx-auto relative '>
        <div className='space-y-6 xl:space-y-10'>
          <h1 className='text-3xl md:text-5xl text-amber-800 max-w-xl !leading-snug pl-4 xl:pl-0'>
            Welcome to your profesional community
          </h1>
          <div className='space-y-4'>
            <div className='intent'>
              <h2 className='text-xl'>Search for a job</h2>
              <ArrowForwardIosRoundedIcon className='text-gray-700' />
            </div>
            <div className='intent'>
              <h2 className='text-xl'>Find a person you know</h2>
              <ArrowForwardIosRoundedIcon className='text-gray-700' />
            </div>
            <div className='intent'>
              <h2 className='text-xl'>Learn a new skill</h2>
              <ArrowForwardIosRoundedIcon className='text-gray-700' />
            </div>
          </div>
        </div>
        <div className='relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[300px] top-14 right-5 '>
          <Image
            src='https://us.123rf.com/450wm/ddraw/ddraw1010/ddraw101000008/7959268-reading-student-funny-cartoon-and-character-isolated-object.jpg?ver=6'
            layout='fill'
            priority
          />
        </div>
      </main>
    </div>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
