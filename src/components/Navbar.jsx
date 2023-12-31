import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/outline";
import sim from "../assets/simm.jpg";

const navigation = [
  { name: "Accueil", href: "#Home", current: true },
  { name: "Projets", href: "#Project", current: false },
  { name: "Compétences", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-slate-100 z-50  ">
      {({ open }) => (
        <>
          <div className=" mx-auto max-w-8xl px-8  sm:px-6 lg:px-8">
            <div className="relative flex h-[15vh]">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3BottomLeftIcon
                      className="block h-8 w-8 text-black"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex mt-8  w-[80%] sm:items-stretch sm:justify-start">
                <div className="hidden sm:-ml-10 flex items-center sm:block">
                  <div className=" flex justify-between  text-[15px]  uppercase">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-gray-900 text-sm font-extrabold  flex   relative [clip-path:circle([clip-path:polygon(20%_0%,74%_0%,100%_24%,100%_24%,100%_100%,80%_100%,33%_100%,0%_79%,0_0)] before:content-['']   before:w-[130px] before:left-[35px] before:h-[100px] before:bg-gradient-to-b from-gray-800 to-transparent before:absolute before:top-0 before:[clip-path:polygon(20%_0%,74%_0%,100%_24%,100%_24%,100%_100%,80%_100%,33%_100%,0%_79%,0_0)] before:border-[2px] before:border-gray-500  opacity-0.5   "
                            : "text-gray-900 text-sm font-extrabold  flex relative [clip-path:circle([clip-path:polygon(20%_0%,74%_0%,100%_24%,100%_24%,100%_100%,80%_100%,33%_100%,0%_79%,0_0)] before:content-['']   before:w-[130px] before:left-[35px] before:h-[100px] before:bg-gradient-to-r from-gray-800 to-transparent before:absolute before:top-0 before:[clip-path:polygon(20%_0%,74%_0%,100%_24%,100%_24%,100%_100%,80%_100%,33%_100%,0%_79%,0_0)] before:border-[2px] before:border-gray-500  opacity-0.5  ",
                          " px-[55px] text-[13px] font-extrabold py-[39px] font-medium flex  hover:text-green-600"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:sticky top-0 sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="  translate-y-5 relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute" />
                      <h1 className="text-white p-5">Simon Audrain</h1>
                      <span className="sr-only">Open user menu</span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#Home"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Accueil
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#Project"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Mes Projets
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Compétences
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-900 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
