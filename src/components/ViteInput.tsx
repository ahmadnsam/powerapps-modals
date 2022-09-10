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
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
}
