import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "HEAR", href: "#", current: false },
  { name: "LATEST", href: "#", current: false },
  { name: "TOUR", href: "#", current: false },
  { name: "SEE", href: "#", current: false },
  { name: "SHOP", href: "#", current: false },
  { name: "WATCH", href: "#", current: false },
  { name: "PERSONAL", href: "#", current: false },
  { name: "AID", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className=" ">
            <div className="relative  flex h-auto items-end  p-4  ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden  ">
                {/* Mobile menu button*/}
                <Disclosure.Button className=" bg-gray-800 top-0 left-0 fixed inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6  w-screen bg-gray-800"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-end justify-end sm:items-stretch   text-[60px] ">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white  leading-[93%]"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white p-2 leading-[93%]",
                          "rounded-md  font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* small */}
          <Disclosure.Panel className="sm:hidden top-[2.55rem] left-0 fixed bg-gray-800 sm:width-auto sm:mt-2">
            <div className="space-y-1 px-2 pb-3 pt-2 w-screen">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
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
