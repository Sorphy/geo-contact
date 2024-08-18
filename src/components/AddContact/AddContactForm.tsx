import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import {
  TAddContactSchema,
  addContactSchema,
} from "../../schema/addContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "react-toastify";
import InputField from "../FormField/InputField";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddContactForm = () => {
  const [isFileCreated, setIsFileCreated] = useState(false);

  const methods = useForm<TAddContactSchema>({
    resolver: zodResolver(addContactSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      addresses: [{ value: "" }],
      longitude: 0,
      latitude: 0,
    },
  });

  const { control } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses" as never,
  });
  const onSubmit = (data: TAddContactSchema) => {
    try {
      let contacts: TAddContactSchema[] = JSON.parse(
        localStorage.getItem("contacts") || "[]"
      );
      // const newData = {
      //   ...data,
      // };
      contacts.push(data);
      localStorage.setItem("contacts", JSON.stringify(contacts));

      setIsFileCreated(true);
      console.log("Submitted Data:", data);
      toast.success("Contacts added successfully");
      // Reset the form
      methods.reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to add contact");
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="px-8 pt-8 pb-8 mx-auto max-w-lg"
      >
        <h2 className="text-2xl font-bold text-indigo-400 mb-6 text-center">
          Add New Contact
        </h2>
        <InputField
          type="text"
          name="name"
          label="Name"
          placeholder="Enter your name"
        />
        <InputField
          type="tel"
          name="phoneNumber"
          label="Phone Number"
          placeholder="Enter your phone number"
        />
        <InputField
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
        />
        <div className="space-y-2">
          {/* Map over all address fields */}
          {fields.map((field, index) => (
            <div key={field.id} className="">
              <InputField
                type="text"
                name={`addresses[${index}].value`}
                label={index === 0 ? "Addresses" : undefined}
                placeholder="Enter address"
              />
              {/* If you want to stop the first address field from deleting, comment out the code below */}
              {/* {index > 0 && ( */}
              <button
                type="button"
                onClick={() => remove(index)}
                className="items-center space-x-1 px-2 py-1 bg-indigo-200 text-red-500 rounded"
              >
                <RiDeleteBin6Line />
              </button>
              {/* )} */}
            </div>
          ))}

          {fields.length < 5 && (
            <button
              type="button"
              onClick={() => append({ value: "" })}
              className="flex items-center space-x-1 px-2 py-1 bg-indigo-200 text-indigo-900 rounded"
            >
              <FaPlus />
            </button>
          )}
        </div>
        <InputField
          type="number"
          name="latitude"
          label="Latitude"
          placeholder="Enter latitude"
        />
        <InputField
          type="number"
          name="longitude"
          label="Longitude"
          placeholder="Enter longitude"
        />
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="px-4 py-2 mt-8 bg-indigo-400 text-indigo-900 rounded-md cursor-pointer transition duration-300 ease-in-out font-medium focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={isFileCreated}
          >
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddContactForm;
