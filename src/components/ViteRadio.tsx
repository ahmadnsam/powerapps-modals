import useModalStore from "../store/modal";

export default function ViteRadio(props: any) {
  const { inputs, set } = useModalStore();

  return (
    <div className="mt-2">
      <div className={props.error ? "rounded-md border  border-red-700" : ""}>
        <label className="block text-sm font-medium text-gray-700 text-left">
          {props.label}
        </label>
        <fieldset className="mt-2">
          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
            {props.options.map((option: any) => (
              <div key={option.id} className="flex items-center">
                <input
                  id={option.id}
                  name={option.id}
                  type="radio"
                  checked={inputs[props.id] === option.id}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  onChange={(event) => set(props.id, event.target.id)}
                />
                <label
                  htmlFor={option.id}
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
      {props.error && (
        <p className=" text-left mt-2 text-sm text-red-800" id="email-error">
          {props.errorMessage ?? "This field is required!"}
        </p>
      )}
    </div>
  );
}
