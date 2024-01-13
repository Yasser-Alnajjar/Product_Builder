import {
  FormHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";

/* ------- From ------- */
type TFromProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
};
export default function Form({ children, ...rest }: TFromProps) {
  return <form {...rest}>{children}</form>;
}

/* ------- Input ------- */
type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  type: string;
  name: string;
};
Form.Input = function ({ type, name, id, ...rest }: TInputProps) {
  return (
    <input
      {...rest}
      id={id}
      type={type}
      name={name}
      className="border w-full rounded-md p-2 text-black outline-indigo-700 shadow-md"
    />
  );
};

/* ------- Label ------- */
type TLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  id: string;
  children: ReactNode;
};
Form.Label = function ({ id, children, ...rest }: TLabelProps) {
  return (
    <label
      htmlFor={id}
      className="capitalize text-sm font-medium text-gray-700"
      {...rest}
    >
      {children}
    </label>
  );
};

/* ------- Group ------- */

Form.Group = function ({
  className = "mb-2",
  children,
  ...rest
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};
