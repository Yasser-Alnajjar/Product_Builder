import { memo } from "react";
import { HiChevronUpDown } from "react-icons/hi2";
import { IoMdCheckmark } from "react-icons/io";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CATEGORIES } from "../../../data";
import { TCategory } from "../../../types";

type TProps = {
  selected: TCategory;
  setSelected: (category: TCategory) => void;
};
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default memo(function Select({ selected, setSelected }: TProps) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block capitalize text-sm font-medium text-gray-700">
            Category
          </Listbox.Label>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white px-2.5 py-2.5 text-left text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-700 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <HiChevronUpDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-24 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {CATEGORIES.map((category) => (
                  <Listbox.Option
                    key={category.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={category}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {category.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <IoMdCheckmark
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
});
