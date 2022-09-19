import { CheckIcon } from "@heroicons/react/24/outline";
import {
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { IconTypes } from "../enums/IconTypes";
export default function ViteIcon(props: any) {
  const icon = (type: IconTypes) => {
    switch (type) {
      case IconTypes.Success:
        return (
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
        );
      case IconTypes.Error:
        return (
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <ExclamationCircleIcon
              className="h-6 w-6 text-red-600"
              aria-hidden="true"
            />
          </div>
        );
      case IconTypes.Warning:
        return (
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
            <ExclamationTriangleIcon
              className="h-6 w-6 text-yellow-600"
              aria-hidden="true"
            />
          </div>
        );
    }
  };
  return icon(props.type);
}

/*
<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
*/
