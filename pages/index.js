import { useState, useEffect, useCallback } from "react";
import Head from "next/head";

const socmedList = [
  {
    name: "linkedin",
    img: "/icons/icon-linkedin.svg",
    href: "https://linkedin.com/in/pandurijal",
  },
  {
    name: "twitter",
    img: "/icons/icon-twitter.svg",
    href: "https://twitter.com/pandurijal",
  },
  {
    name: "instagram",
    img: "/icons/icon-instagram.svg",
    href: "https://instagram.com/pandurijal",
  },
  {
    name: "facebook",
    img: "/icons/icon-facebook.svg",
    href: "https://facebook.com/pandurijal",
  },
];

const portfolioList = [
  {
    id: "tokoflix",
    title: "99% Usahaku (Telkomsel)",
    desc: "Learning and marketplace platform for Small-Medium Enterprises.",
    url: {
      live: "https://m.99usahaku.telkomsel.com",
    },
  },
  {
    id: "bernas-id",
    title: "Bernas ID (Hebat Group)",
    desc:
      "Online news website that provide popular & reliable article for domestic update. ",
    url: {
      live: "https://bernas.id",
    },
  },
  {
    id: "tokoflix",
    title: "Tokoflix",
    desc: "A simple marketplace for movies, built with React.js",
    url: {
      live: "https://pandurijal.github.io/tokoflix",
      repo: "https://github.com/pandurijal/tokoflix",
    },
  },
  {
    id: "react-giphy",
    title: "React Giphy",
    desc:
      "A lightweight search engine for .gif images built with react. Based on Giphy API.",
    url: {
      live: "https://pandurijal.github.io/react-giphy",
      repo: "https://github.com/pandurijal/react-giphy",
    },
  },
  {
    id: "loremi",
    title: "Loremi",
    desc: "A simple lorem ipsum generator apps built with ReactJS.",
    url: {
      live: "https://pandurijal.github.io/loremi",
      repo: "https://github.com/pandurijal/loremi",
    },
  },
  {
    id: "react-quotes-mobile",
    title: "React Quotes Mobile",
    desc:
      "Generate a random quote with only one click. Built with React Native & Expo.",
    url: {
      live: "https://pandurijal.github.io/react-quotes-mobile",
      repo: "https://github.com/pandurijal/react-quotes-mobile",
    },
  },
  {
    id: "image-prediction",
    title: "Image Prediction",
    desc:
      "Predicting single image with machine learning dataset from Tensorflow.",
    url: {
      repo: "https://github.com/pandurijal/image-prediction",
    },
  },
  {
    id: "webcam-prediction",
    title: "Webcam Prediction",
    desc:
      "Predicting video from webcame with machine learning dataset from Tensorflow.",
    url: {
      repo: "https://github.com/pandurijal/webcam-prediction",
    },
  },
  {
    id: "",
    title: "Recipebook",
    desc:
      "Food recipes directory for who love to cook. Built with Bootstrap + ReactJS.",
    url: {
      repo: "https://github.com/pandurijal/recipebook",
    },
  },
  {
    id: "dashboard-socmed",
    title: "Dashboard Socmed",
    desc: "Dashboard for social media page",
    url: {
      repo: "https://github.com/pandurijal/dashboard-socmed",
    },
  },
  {
    id: "weather-app",
    title: "Weather App",
    desc: "Weather app condition checker available for any city in the world.",
    url: {
      repo: "https://github.com/pandurijal/weather-app",
    },
  },
  {
    id: "agendate",
    title: "Agendate",
    desc: "Event management based on calendar that saved locally.",
    url: {
      repo: "https://github.com/pandurijal/agendate",
    },
  },
  {
    id: "currency-rates",
    title: "Currency Rate",
    desc: "Event management based on calendar that saved locally.",
    url: {
      repo: "https://github.com/pandurijal/currency-rates",
    },
  },
  {
    id: "search-article",
    title: "Search Article",
    desc: "Simple search engine for article based on HackerNews API.",
    url: {
      repo: "https://github.com/pandurijal/search-article",
    },
  },
  // {
  //   id: "",
  //   title: "",
  //   desc: "",
  //   url: "",
  // },
];

export default function Home() {
  const [firstOpen, setFirstOpen] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setShowPortfolio(false);
    }
  }, []);

  useEffect(() => {
    console.log(
      "If you read this, I just wanna say thank you for visiting my personal space. Don't hesitate to contact me if you need something to discuss and I do hope you have a lovely day!"
    );
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const togglePortfolio = () => {
    setFirstOpen(true);
    setShowPortfolio(!showPortfolio);
  };

  return (
    <div>
      <Head>
        <title>Pandu Rijal Pasa | Frontend Engineer & Mobile Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen overflow-hidden relative">
        <div className="flex h-screen w-full">
          <main className="m-auto p-4">
            <section>
              <h1 className="mb-4 text-2xl sm:text-4xl font-bold">
                Hi, Pandu here! 👋
              </h1>
              <h2 className="mb-4 text-xl sm:text-2xl font-semibold">
                I craft products that your user will love.
              </h2>
            </section>
            <section>
              <div className="flex justify-center my-8">
                {socmedList.map((val) => (
                  <a
                    key={val.name}
                    href={val.href}
                    target="_blank"
                    className="mx-2"
                  >
                    <img
                      className="w-8 h-8"
                      src={val.img}
                      alt={`icon-${val.name}`}
                    />
                  </a>
                ))}
              </div>
            </section>
            <section className="portfolio">
              <button
                onClick={togglePortfolio}
                className="bg-gray-800 text-white text-sm py-3 px-4 sm:py-4 sm:px-6 rounded"
              >
                Here is what I have built
              </button>
            </section>
            <section>
              <div className="mt-4">
                <p>
                  I also write{" "}
                  <a
                    href="https://dev.to/pandurijal"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </section>
          </main>
        </div>

        <div
          className={`flex h-screen absolute bg-white w-full transform ease-in-out transition-all duration-300 z-30 overflow-y-scroll ${
            showPortfolio ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <main className="m-auto p-4">
            <section>
              <div className="bg-white my-6 sm:w-full md:w-3/4 mx-auto">
                <p
                  className="text-sm hover:cursor-pointer mb-4"
                  onClick={togglePortfolio}
                >
                  Back
                </p>
                <div className="mb-6">
                  <p className="text-2xl font-semibold">
                    Here is what I have built
                  </p>
                  <p className="text-sm">
                    Details are available on my{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/pandurijal"
                      className="font-bold"
                    >
                      github
                    </a>
                    .
                  </p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                  {portfolioList.map((val, i) => (
                    <div
                      key={i}
                      className="text-left flex flex-col justify-between border p-4 rounded"
                    >
                      <div>
                        <p className="font-semibold">{val.title}</p>
                        <p>{val.desc}</p>
                      </div>
                      <div className="flex mt-4">
                        {Object.keys(val.url).map((link, i) => (
                          <a
                            href={val.url[link]}
                            target="_blank"
                            rel="noreferrer"
                            key={i}
                          >
                            <div className="mt-2 mr-2 bg-gray-800 py-1 px-3 text-white rounded hover:cursor-pointer">
                              <p className="text-sm">{link}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
