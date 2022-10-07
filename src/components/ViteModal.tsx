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
  const { modal, inputs, setError } = useModalStore();
  const getInput = (input: Input) => {
    switch (ConvertHelper.getInputType(input.type as string)) {
      case InputTypes.Radio:
        return (
          <ViteRadio
            id={input.id}
            label={input.label}
            options={input.options}
            error={input.error}
            errorMessage={input.errorMessage}
            required={input.required}
          />
        );
      case InputTypes.DropDown:
        return (
          <ViteChoices
            id={input.id}
            label={input.label}
            options={input.options}
            multi={input.multi}
            error={input.error}
            required={input.required}
            errorMessage={input.errorMessage}
          />
        );
      default:
        return (
          <ViteInput
            id={input.id}
            label={input.label}
            error={input.error}
            required={input.required}
            errorMessage={input.errorMessage}
          />
        );
    }
  };
  const onClick = (clickedButton: string, isCancel: boolean) => {
    if (isCancel) window.close();
    //@ts-ignore
    window.returnValue = {
      inputs: inputs,
      clickedButton: clickedButton,
    };
    if (modal.inputs) {
      let requiredInputs = modal.inputs.filter((x) => x.required);
      let err = false;
      for (let i = 0; i < requiredInputs?.length; i++) {
        let _input = requiredInputs[i];
        if (!inputs[_input.id]) {
          err = true;
          setError(_input.id, true);
        } else {
          setError(_input.id, false);
        }
      }
      if (err) {
        return;
      }
    }
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
            (button: {
              id: string;
              label: string;
              type: string;
              cancel: boolean;
            }) => (
              <ViteButton
                id={button.id}
                label={button.label}
                type={button.type}
                onClick={onClick}
                isCancel={button.cancel}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
