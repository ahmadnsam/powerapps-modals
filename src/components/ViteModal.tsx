import useModalStore from "../store/modal";
import ViteButton from "./ViteButton";
import ViteH1 from "./text/ViteH1";
import ViteH2 from "./text/ViteH2";
import ViteInput from "./ViteInput";
import ViteIcon from "./ViteIcon";
import { ConvertHelper } from "../helpers/convert";
import { LabelTypes } from "../enums/LabelTypes";
import { Modal } from "../types/Modal";

export default function ViteModal(props: { modal: Modal }) {
  const { inputs } = useModalStore();
  const onClick = (clickedButton: string) => {
    //@ts-ignore
    window.returnValue = {
      inputs: inputs,
      clickedButton: clickedButton,
    };

    window.close();
  };
  return (
    <div className="w-screen h-screen absoulte bg-white text-left">
      <div className="p-4">
        <div>
          <ViteIcon type={ConvertHelper.getIconType(props.modal.icon)} />
          <div className="mt-3 text-center sm:mt-5">
            {props.modal.labels.map((label: { text: string; type: string }) => {
              const _type = ConvertHelper.getLabelType(label.type);
              if (_type === LabelTypes.H1) return <ViteH1 text={label.text} />;
              return <ViteH2 text={label.text} />;
            })}

            {props.modal.inputs.map((input: { id: string; label: string }) => (
              <ViteInput id={input.id} label={input.label} />
            ))}
          </div>
        </div>
        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
          {props.modal.buttons.map(
            (button: { id: string; label: string; type: string }) => (
              <ViteButton
                id={button.id}
                label={button.label}
                type={button.type}
                onClick={onClick}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
