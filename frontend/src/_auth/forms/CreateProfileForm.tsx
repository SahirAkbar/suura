import TimezoneSelect from "react-timezone-select";
import {
  CreateProfileSchema,
  createProfileType,
} from "../../Schema/CreateProfileSchema";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import { signUp } from "../../utils/https";
import { data } from "currency-codes";
import { State, City } from "country-state-city";
import React, { ChangeEvent } from "react";
const intialValues: createProfileType = {
  first_name: "",
  last_name: "",
  email: "",
  BusinessName: "",
  username: "",
  location: "Sallar",
  time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  currency: "",
};

const CreateProfileForm = () => {
  const NetherLandStates = State.getStatesOfCountry("NL");
  const [selectedStateCode, setSelectedStateCode] = React.useState<string>("");
  const filterdCities = City.getCitiesOfState("NL", selectedStateCode);
  const { mutate } = useMutation(signUp);
  const { errors, handleSubmit, handleChange, handleBlur, values, touched } =
    useFormik({
      initialValues: intialValues,
      validationSchema: CreateProfileSchema,
      onSubmit: (values) => {
        console.log(values);
        mutate(values);
        // action.resetForm();
      },
    });
  console.log(errors);
  const stateChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedStateCode(e.target.value);
  };
  return (
    <>
      <h2 className="text-3xl mb-4">Welcome to Suura Web Platform!</h2>
      <p className="mb-4">
        Let's start with the basics. This is what you future dream clients will
        see.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5 ">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-400 py-1 px-2 rounded-lg h-10"
            onChange={handleChange("first_name")}
            onBlur={handleBlur("first_name")}
            value={values.first_name}
          />
          {errors.first_name && touched.first_name ? (
            <p className="form-error">{errors.first_name}</p>
          ) : null}
          <input
            type="text"
            placeholder="Surname"
            className="border border-gray-400 py-1 px-2 rounded-lg  h-10"
            onChange={handleChange("last_name")}
            onBlur={handleBlur("last_name")}
            value={values.last_name}
          />
          {errors.last_name && touched.last_name ? (
            <p className="form-error">{errors.last_name}</p>
          ) : null}
        </div>
        <div className="mt-5">
          <input
            type="text"
            placeholder="Email"
            className="border border-gray-400 py-1 px-2 w-full rounded-lg  h-10"
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>
        <div className="mt-5">
          <input
            type="text"
            placeholder="Business Name"
            className="border border-gray-400 py-1 px-2 w-full rounded-lg  h-10"
            onChange={handleChange("BusinessName")}
            onBlur={handleBlur("BusinessName")}
            value={values.BusinessName}
          />
          {errors.BusinessName && touched.BusinessName ? (
            <p className="form-error">{errors.BusinessName}</p>
          ) : null}
        </div>
        <div className="mt-5">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-400 py-1 px-2 w-full rounded-lg  h-10"
            onChange={handleChange("username")}
            onBlur={handleBlur("username")}
            value={values.username}
          />
          {errors.username && touched.username ? (
            <p className="form-error">{errors.username}</p>
          ) : null}
        </div>
        {/* <div className="mt-5">
                <input type="text" placeholder='location' className='border border-gray-400 py-1 px-2 w-full rounded-lg  h-10' onChange={handleChange('location')}
                  onBlur={handleBlur('location')}
                  value={values.location}
                />
                {errors.location && touched.location ? <p className="form-error">{errors.location}</p> : null}
              </div> */}
        <div className="grid grid-cols-2 gap-5 mt-2 ">
          <select
            name=""
            id=""
            className="border border-gray-400 py-1 px-2 rounded-lg  h-10"
            onChange={stateChanged}
          >
            {NetherLandStates.map((state) => (
              <option value={state.isoCode} key={state.isoCode}>
                {" "}
                {`${state.name}`}
              </option>
            ))}
          </select>
          {/* {errors.firstName && touched.firstName ? <p className="form-error">{errors.firstName}</p> : null} */}
          <select
            name=""
            id=""
            className="border border-gray-400 py-1 px-2 rounded-lg  h-10"
            onChange={stateChanged}
          >
            {filterdCities.map((city) => (
              <option value={city.name} key={city.name}>
                {" "}
                {`${city.name}`}
              </option>
            ))}
          </select>
          {/* {errors.surName && touched.surName ? <p className="form-error">{errors.surName}</p> : null} */}
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5 ">
          <TimezoneSelect
            value={values.time_zone}
            // onChange={(e)};
          />
          {/* <input type="text" placeholder='Time Zone' className='border border-gray-400 py-1 px-2 rounded-lg 
                h-10' /> */}
          <select
            name=""
            id=""
            className="border border-gray-400 py-1 px-2 rounded-lg  h-10"
            onChange={handleChange("currency")}
          >
            {data.map((item) => (
              <option value={item.code} key={item.code}>
                {" "}
                {`${item.currency} | ${item.code}`}
              </option>
            ))}
          </select>
          {errors.currency && touched.currency ? (
            <p className="form-error">{errors.currency}</p>
          ) : null}

          {/* <input type="text" placeholder='Currency'  onChange={handleChange('currency')}
                  onBlur={handleBlur('currency')}
                  value={values.currency}
                />
                {errors.currency && touched.currency ? <p className="form-error">{errors.currency}</p> : null} */}
        </div>

        <div className="mt-5">
          <button className="w-full bg-[#C7987A]  py-3 text-center rounded-lg text-white">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateProfileForm;
