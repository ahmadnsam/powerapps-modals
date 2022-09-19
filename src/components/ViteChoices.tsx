import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import useModalStore from "../store/modal";

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}
export default function ViteChoices(props: any) {
  const { inputs, set } = useModalStore();
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? props.options
      : props.options.filter((option: any) => {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <Combobox
      className="mt-2"
      as="div"
      value={inputs[props.id]}
      onChange={(value: any) => set(props.id, value.id)}
    >
      <Combobox.Label className="text-left block text-sm font-medium text-gray-700">
        {props.label}
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(option: any) =>
            props.options.filter((x: any) => x.id === option)[0]?.label
          }
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredOptions.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredOptions.map((option: any) => (
              <Combobox.Option
                key={option.id}
                value={option}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected && "font-semibold"
                      )}
                    >
                      {option.label}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-indigo-600"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
