import useModalStore from "../store/modal";
import ViteButton from "./ViteButton";
import ViteH1 from "./text/ViteH1";
import ViteH2 from "./text/ViteH2";
import ViteInput from "./ViteInput";
import ViteIcon from "./ViteIcon";
import { ConvertHelper } from "../helpers/convert";
import { LabelTypes } from "../enums/LabelTypes";
import { Modal } from "../types/Modal";
import { InputTypes } from "../enums/InputTypes";
import ViteRadio from "./ViteRadio";
import { Input } from "../types/Input";
import ViteChoices from "./ViteChoices";

export default function ViteModal(props: { modal: Modal }) {
  const { inputs } = useModalStore();
  const getInput = (input: Input) => {
    switch (ConvertHelper.getInputType(input.type as string)) {
      case InputTypes.Radio:
        return (
          <ViteRadio
            id={input.id}
            label={input.label}
            options={input.options}
          />
        );
      case InputTypes.DropDown:
        return (
          <ViteChoices
            id={input.id}
            label={input.label}
            options={input.options}
            multi={input.multi}
          />
        );
      default:
        return <ViteInput id={input.id} label={input.label} />;
    }
  };
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
            <>
              {props.modal.labels.map(
                (label: { text: string; type: string }) => {
                  const _type = ConvertHelper.getLabelType(label.type);
                  if (_type === LabelTypes.H1)
                    return <ViteH1 text={label.text} />;
                  return <ViteH2 text={label.text} />;
                }
              )}

              {props.modal.inputs?.map((input: Input) => getInput(input))}
            </>
          </div>
        </div>
        <div className="mt-6 grid grid-flow-row-dense grid-cols-2 gap-3">
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
