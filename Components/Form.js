import React from "react";

const Form = () => {
  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
      <form
        novalidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="firstname" className="text-sm">
                First name
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="First name"
                className="w-full rounded-md outline-none border border-solid border-blue-500 py-2 px-4"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="lastname" className="text-sm">
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="Last name"
                className="w-full rounded-md outline-none border border-solid border-blue-500 py-2 px-4"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-md outline-none border border-solid border-blue-500 py-2 px-4"
              />
            </div>
            <div className="col-span-full">
              <label for="address" className="text-sm">
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder=""
                className="w-full rounded-md outline-none border border-solid border-blue-500 py-2 px-4"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="city" className="text-sm">
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder=""
                className="w-full rounded-md outline-none border border-solid border-blue-500 py-2 px-4"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="state" className="text-sm">
                State / Province
              </label>
              <input
                id="state"
                type="text"
                placeholder=""
                className="w-full rounded-md outline-none border border-solid border-blue-500 py-2 px-4"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="zip" className="text-sm">
                ZIP / Postal
              </label>
              <input
                id="zip"
                type="text"
                placeholder=""
                className="w-full rounded-md outline-none border border-solid border-blue-500 py-2 px-4"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Form;
