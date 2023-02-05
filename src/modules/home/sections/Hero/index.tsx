import Image from 'next/image';

export const Hero = () => {
    return <section className="text-gray-600 body-font">
        <div className="container flex flex-row gap-24 mx-auto px-5 py-24 md:flex-col md:p-0 sm:p-0 sm:flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-start justify-start">
                <h1 className="font-bold">
                    Protect your data with identity tokens
                </h1>
                <p className="mb-8 leading-relaxed pt-3 text-lg text-gray-500">
                    Create an identity token to securely identify yourself, protect important documents, and keep them organized and accessible.
                </p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Create my token</button>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image
                    alt="hero"
                    src={'/assets/illustrations/hero.png'}
                    width={540}
                    height={540}
                />
            </div>
        </div>
    </section>
}