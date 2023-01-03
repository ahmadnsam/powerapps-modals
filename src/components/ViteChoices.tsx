import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { StyleHelper } from "../helpers/style";
import useModalStore from "../store/modal";

export default function ViteChoices(props: any) {
  const { inputs, set } = useModalStore();
  const [query, setQuery] = useState("");
  const { id, label, options, multi, error, required, errorMessage } = props;

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option: any) => {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <Combobox
      className="mt-2"
      as="div"
      multiple={multi}
      value={inputs[id] ?? []}
      onChange={(value: any) => {
        if (multi) set(id, value);
        else set(id, value.id);
      }}
    >
      <Combobox.Label className="text-left block text-sm font-medium text-gray-700">
        {label}
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className={StyleHelper.classNames(
            "w-full rounded-md border  bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1sm:text-sm",
            error
              ? "border-red-900 focus:border-red-900 focus:ring-red-900"
              : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          )}
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(option: any) => {
            if (multi) return option.map((x: any) => x.label).join(", ");
            else return options.filter((x: any) => x.id === option)[0]?.label;
          }}
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
                  StyleHelper.classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={StyleHelper.classNames(
                        "block truncate",
                        selected && "font-semibold"
                      )}
                    >
                      {option.label}
                    </span>

                    {selected && (
                      <span
                        className={StyleHelper.classNames(
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
      {error && (
        <p className=" text-left mt-2 text-sm text-red-900" id="email-error">
          {errorMessage ?? "This field is required!"}
        </p>
      )}
    </Combobox>
  );
}
