import { useEffect, useState } from 'react';

export const useInput = (initialValue, validations) => {
   const [value, setValue] = useState(initialValue);
   const [isDirty, setIsDirty] = useState(false);
   const valid = useValidations(value, validations);
   const onChange = (amount) => {
      setValue(amount);
   }

   const onBlur = (e) => {
      setIsDirty(true);
   }
   return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid
   }
}

const useValidations = (value, validations) => {
   const [isEmpty, setIsEmpty] = useState(true);
   const [maxLengthError, setMaxLengthError] = useState(false);
   const [inputValid, setInputValid] = useState(false);


   useEffect(() => {
      for (let validation in validations) {
         switch (validation) {
            case 'Empty':
               value ? setIsEmpty(false) : setIsEmpty(true)
               break;
            case 'maxLengthError':
               value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
               break;
         }
      }
   }, [value]);

   useEffect(() => {
      if (isEmpty || maxLengthError) {
         setInputValid(false)
      } else {
         setInputValid(true);
      }
   }, [isEmpty, maxLengthError])
   return {
      isEmpty,
      maxLengthError,
      inputValid
   }

}




