import { StyleHelper } from "../helpers/style";
import useModalStore from "../store/modal";

export default function ViteInput(props: any) {
  const { inputs, set } = useModalStore();
  return (
    <div className="mt-2">
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-gray-700 text-left"
      >
        {props.label}
      </label>
      <div className="mt-1">
        <input
          value={inputs[props.id]}
          onChange={(event) => set(props.id, event.target.value)}
          id={props.id}
          name={props.id}
          /*type="email"*/
          required={props.required ?? undefined}
          className={StyleHelper.classNames(
            "block w-full appearance-none rounded-md border  px-3 py-2 placeholder-gray-400 shadow-sm  focus:outline-none  sm:text-sm",
            props.error
              ? "border-red-900 focus:border-red-900 focus:ring-red-900"
              : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          )}
        />
      </div>
      {props.error && (
        <p className=" text-left mt-2 text-sm text-red-800" id="email-error">
          {props.errorMessage ?? "This field is required!"}
        </p>
      )}
    </div>
  );
}
