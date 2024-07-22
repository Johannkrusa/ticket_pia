import { ErrorMessage } from 'formik';
import React from 'react';

const CustomErrorMessage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  if (typeof children === 'object' && children !== null) {
    const values = Object.values(children);
    children = values.join(' | ');
  }
  return <div className="custom-error-message">{children}</div>;
};

interface InputErrorProps {
  name: string;
}

const CustomErrorMessageComponent: React.FC<InputErrorProps> = ({ name }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative mt-2 flex justify-center w-full">
        <ErrorMessage
          name={name}
          component={({ children }: any) => (
            <CustomErrorMessage>{children}</CustomErrorMessage>
          )}
        />
      </div>
    </div>
  );
};

export default CustomErrorMessageComponent;
