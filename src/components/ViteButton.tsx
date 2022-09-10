import { ConvertHelper } from "../helpers/convert";
import { StyleHelper } from "../helpers/style";

export default function ViteButton(props: any) {
  return (
    <button
      type="button"
      className={`mt-1 inline-flex w-full justify-center rounded-md border px-4 py-2 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm ${StyleHelper.getButtonClasses(
        ConvertHelper.getButtonType(props.type)
      )}`}
      onClick={() => props.onClick(props.id)}
    >
      {props.label}
    </button>
  ); //"
  //
}
