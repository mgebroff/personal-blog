/***** IMPORT ***********************************************************************************/
import Link from "next/link";
import Image from "next/image";

/***** HEADER ***********************************************************************************/
const Header = () => {
  return (
    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Full Stack </span>{" "}
          <span className="block text-indigo-600 xl:inline">
            Analytics Blog
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          <br />
          <Image width={45} height={45} src="/avatar.png" alt="logo" /> Adobe
          Analytics Data Industry Technology and Research ...
        </p>

        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link href="/blogs">
              <span className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
                AEP & CJA Exploration
              </span>
            </Link>
          </div>

          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link href="https://www.mgebroff.io/#work">
              <span className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">
                Adobe Working Experience
              </span>
            </Link>
          </div>
        </div>
      </div>
      <br />
      Adobe Experience Platform is an industry-leading technology platform that{" "}
      <br />
      weaves all your critical customer data together in real time — not just
      CRM <br /> or other first party data - all of it, including behavioral,
      transactional, financial, operational and third-party data.
    </main>
  );
};

/***** EXPORT ***********************************************************************************/
export default Header;
