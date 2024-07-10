// // /* eslint-disable react/prop-types */
// // import { useEffect, useState } from "react";
// // import { BASE_URL, token } from "../../config";
// // import uploadImageToCloudinary from "../../utils/uploadCloudinary";
// // import { AiOutlineDelete } from "react-icons/ai";
// // import { toast } from "react-toastify";

// // const Profile = ({ doctorData }) => {
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     gender: "",
// //     phone: "",
// //     photo: null,
// //     bio: "",
// //     about: "",
// //     ticketPrice: 0,
// //     qualifications: [],
// //     experiences: [],
// //     specialization: "",
// //     timeSlots: [],
// //     location: {
// //       latitude: "",
// //       longitude: "",
// //     },
// //   });

// //   useEffect(() => {
// //     setFormData({
// //       name: doctorData?.name,
// //       email: doctorData?.email,
// //       gender: doctorData?.gender,
// //       photo: doctorData?.photo,
// //       phone: doctorData?.phone,
// //       bio: doctorData?.bio,
// //       qualifications: doctorData?.qualifications,
// //       experiences: doctorData?.experiences,
// //       about: doctorData?.about,
// //       ticketPrice: doctorData?.ticketPrice,
// //       specialization: doctorData?.specialization,
// //       timeSlots: doctorData?.timeSlots,
// //       location: {
// //         latitude: doctorData?.location?.latitude || "",
// //         longitude: doctorData?.location?.longitude || "",
// //       },
// //     });
// //   }, [doctorData]);

// //   const handleInputChange = e => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleLocationChange = e => {
// //     setFormData({
// //       ...formData,
// //       location: {
// //         ...formData.location,
// //         [e.target.name]: e.target.value,
// //       },
// //     });
// //   };

// //   const handleFileInputChange = async event => {
// //     const file = event.target.files[0];
// //     const data = await uploadImageToCloudinary(file);

// //     setSelectedFile(data.url);
// //     setFormData({ ...formData, photo: data.url });
// //   };

// //   const getLocation = () => {
// //     if (navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition(
// //         position => {
// //           setFormData({
// //             ...formData,
// //             location: {
// //               latitude: position.coords.latitude,
// //               longitude: position.coords.longitude,
// //             },
// //           });
// //           toast.success("Location fetched successfully!");
// //         },
// //         error => {
// //           toast.error("Error fetching location: " + error.message);
// //         }
// //       );
// //     } else {
// //       toast.error("Geolocation is not supported by this browser.");
// //     }
// //   };

// //   const updateDoctorHandler = async e => {
// //     e.preventDefault();
// //     console.log(formData);
// //     try {
// //       const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
// //         method: "put",
// //         headers: {
// //           "content-type": "application/json",
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       const result = await res.json();
// //       if (!res.ok) {
// //         return toast.error(result.message);
// //       }

// //       toast.success("Profile updated successfully");
// //     } catch (err) {
// //       console.log(err);
// //       toast.error("Error updating profile");
// //     }
// //   };

// //   // Reusable function for adding items
// //   const addItem = (key, item) => {
// //     setFormData(prevFormData => ({
// //       ...prevFormData,
// //       [key]: [...prevFormData[key], item],
// //     }));
// //   };

// //   // Reusable function for handling changes
// //   const handleReuseableInputChangeFunc = (key, index, event) => {
// //     const { name, value } = event.target;
// //     setFormData(prevFormData => {
// //       const updatedItems = [...prevFormData[key]];
// //       updatedItems[index][name] = value;
// //       return {
// //         ...prevFormData,
// //         [key]: updatedItems,
// //       };
// //     });
// //   };

// //   // Reusable function for deleting items
// //   const deleteItem = (key, index) => {
// //     setFormData(prevFormData => ({
// //       ...prevFormData,
// //       [key]: prevFormData[key].filter((_, i) => i !== index),
// //     }));
// //   };

// //   const addQualification = e => {
// //     e.preventDefault();
// //     addItem("qualifications", {
// //       startingDate: null,
// //       endingDate: null,
// //       degree: "",
// //       university: "",
// //     });
// //   };

// //   const handleQualificationChange = (event, index) => {
// //     handleReuseableInputChangeFunc("qualifications", index, event);
// //   };

// //   const deleteQualification = (e, index) => {
// //     e.preventDefault();
// //     deleteItem("qualifications", index);
// //   };

// //   const addExperience = e => {
// //     e.preventDefault();
// //     addItem("experiences", {
// //       startingDate: null,
// //       endingDate: null,
// //       position: "",
// //       hospital: "",
// //     });
// //   };

// //   const handleExperienceChange = (event, index) => {
// //     handleReuseableInputChangeFunc("experiences", index, event);
// //   };

// //   const deleteExperience = (e, index) => {
// //     e.preventDefault();
// //     deleteItem("experiences", index);
// //   };

// //   const addTimeSlot = e => {
// //     e.preventDefault();
// //     addItem("timeSlots", { day: "", startingTime: null, endingTime: null });
// //   };

// //   const handleTimeSlotChange = (event, index) => {
// //     handleReuseableInputChangeFunc("timeSlots", index, event);
// //   };

// //   const deleteTimeSlot = (e, index) => {
// //     e.preventDefault();
// //     deleteItem("timeSlots", index);
// //   };

// //   return (
// //     <div>
// //       <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
// //         Profile Information
// //       </h2>
// //       <form>
// //         <div className="mb-5">
// //           <p className="form__label">Name*</p>
// //           <input
// //             type="text"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleInputChange}
// //             placeholder="Full Name"
// //             className="form__input"
// //           />
// //         </div>
// //         <div className="mb-5">
// //           <p className="form__label">Email*</p>
// //           <input
// //             type="email"
// //             readOnly
// //             value={formData.email}
// //             name="email"
// //             placeholder="Enter Your Email"
// //             className="form__input"
// //             aria-readonly
// //           />
// //         </div>

// //         <div className="mb-5">
// //           <p className="form__label">Phone*</p>
// //           <input
// //             type="number"
// //             value={formData.phone}
// //             onChange={handleInputChange}
// //             name="phone"
// //             placeholder="Phone Number"
// //             className="form__input"
// //           />
// //         </div>

// //         <div className="mb-5">
// //           <p className="form__label">Bio*</p>
// //           <input
// //             type="text"
// //             value={formData.bio}
// //             onChange={handleInputChange}
// //             name="bio"
// //             maxLength={100}
// //             placeholder="Bio"
// //             className="form__input"
// //           />
// //         </div>

// //         <div className="mb-5">
// //           <div className="grid grid-cols-3 gap-5 mb-[30px]">
// //             <div>
// //               <p className="form__label">Gender</p>
// //               <select
// //                 name="gender"
// //                 value={formData.gender}
// //                 onChange={handleInputChange}
// //                 className="form__input py-3.5"
// //               >
// //                 <option value="">Select</option>
// //                 <option value="male">Male</option>
// //                 <option value="female">Female</option>
// //                 <option value="other">Other</option>
// //               </select>
// //             </div>
// //             <div>
// //               <p className="form__label">Specialization*</p>
// //               <select
// //                 name="specialization"
// //                 value={formData.specialization}
// //                 onChange={handleInputChange}
// //                 className="form__input py-3.5"
// //               >
// //                 <option value="">Select</option>
// //                 <option value="surgeon">Surgeon</option>
// //                 <option value="neurologist">Neurologist</option>
// //                 <option value="dermatologist">Dermatologist</option>
// //               </select>
// //             </div>

// //             <div>
// //               <p className="form__label">Ticket Price*</p>
// //               <input
// //                 type="number"
// //                 name="ticketPrice"
// //                 value={formData.ticketPrice}
// //                 placeholder="100"
// //                 className="form__input"
// //                 onChange={handleInputChange}
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         <div className="mb-5">
// //           <p className="form__label">Qualifications*</p>
// //           {formData.qualifications?.map((item, index) => (
// //             <div key={index} className="grid grid-cols-4 gap-5 mb-[30px]">
// //               <div>
// //                 <input
// //                   type="date"
// //                   name="startingDate"
// //                   value={item.startingDate}
// //                   onChange={event => handleQualificationChange(event, index)}
// //                   placeholder="Start Date"
// //                   className="form__input"
// //                 />
// //               </div>
// //               <div>
// //                 <input
// //                   type="date"
// //                   name="endingDate"
// //                   value={item.endingDate}
// //                   onChange={event => handleQualificationChange(event, index)}
// //                   placeholder="End Date"
// //                   className="form__input"
// //                 />
// //               </div>
// //               <div>
// //                 <input
// //                   type="text"
// //                   name="degree"
// //                   value={item.degree}
// //                   onChange={event => handleQualificationChange(event, index)}
// //                   placeholder="Degree"
// //                   className="form__input"
// //                 />
// //               </div>
// //               <div className="flex items-center gap-4">
// //                 <input
// //                   type="text"
// //                   name="university"
// //                   value={item.university}
// //                   onChange={event => handleQualificationChange(event, index)}
// //                   placeholder="University"
// //                   className="form__input"
// //                 />
// //                 <button
// //                   className="bg-red-500 p-3 text-white text-[18px] rounded-md"
// //                   onClick={e => deleteQualification(e, index)}
// //                 >
// //                   <AiOutlineDelete />
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //           <button
// //             className="form__btn"
// //             type="button"
// //             onClick={addQualification}
// //           >
// //             Add Qualification
// //           </button>
// //         </div>

// //         <div className="mb-5">
// //           <p className="form__label">Experiences*</p>
// //           {formData.experiences?.map((item, index) => (
// //             <div key={index} className="grid grid-cols-4 gap-5 mb-[30px]">
// //               <div>
// //                 <input
// //                   type="date"
// //                   name="startingDate"
// //                   value={item.startingDate}
// //                   onChange={event => handleExperienceChange(event, index)}
// //                   placeholder="Start Date"
// //                   className="form__input"
// //                 />
// //               </div>
// //               <div>
// //                 <input
// //                   type="date"
// //                   name="endingDate"
// //                   value={item.endingDate}
// //                   onChange={event => handleExperienceChange(event, index)}
// //                   placeholder="End Date"
// //                   className="form__input"
// //                 />
// //               </div>
// //               <div>
// //                 <input
// //                   type="text"
// //                   name="position"
// //                   value={item.position}
// //                   onChange={event => handleExperienceChange(event, index)}
// //                   placeholder="Position"
// //                   className="form__input"
// //                 />
// //               </div>
// //               <div className="flex items-center gap-4">
// //                 <input
// //                   type="text"
// //                   name="hospital"
// //                   value={item.hospital}
// //                   onChange={event => handleExperienceChange(event, index)}
// //                   placeholder="Hospital"
// //                   className="form__input"
// //                 />
// //                 <button
// //                   className="bg-red-500 p-3 text-white text-[18px] rounded-md"
// //                   onClick={e => deleteExperience(e, index)}
// //                 >
// //                   <AiOutlineDelete />
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //           <button className="form__btn" type="button" onClick={addExperience}>
// //             Add Experience
// //           </button>
// //         </div>

// //         <div className="mb-5">
// //           <p className="form__label">Time Slots*</p>
// //           {formData.timeSlots?.map((item, index) => (
// //             <div key={index} className="grid grid-cols-4 gap-5 mb-[30px]">
// //               <div>
// //                 <select
// //                   name="day"
// //                   value={item.day}
// //                   onChange={event => handleTimeSlotChange(event, index)}
// //                   className="form__input py-3.5"
// //                 >
// //                   <option value="">Select</option>
// //                   <option value="Monday">Monday</option>
// //                   <option value="Tuesday">Tuesday</option>
// //                   <option value="Wednesday">Wednesday</option>
// //                   <option value="Thursday">Thursday</option>
// //                   <option value="Friday">Friday</option>
// //                   <option value="Saturday">Saturday</option>
// //                   <option value="Sunday">Sunday</option>
// //                 </select>
// //               </div>
// //               <div>
// //                 <input
// //                   type="time"
// //                   name="startingTime"
// //                   value={item.startingTime}
// //                   onChange={event => handleTimeSlotChange(event, index)}
// //                   placeholder="Starting Time"
// //                   className="form__input"
// //                 />
// //               </div>
// //               <div>
// //                 <input
// //                   type="time"
// //                   name="endingTime"
// //                   value={item.endingTime}
// //                   onChange={event => handleTimeSlotChange(event, index)}
// //                   placeholder="Ending Time"
// //                   className="form__input"
// //                 />
// //               </div>
// //               <div className="flex items-center gap-4">
// //                 <button
// //                   className="bg-red-500 p-3 text-white text-[18px] rounded-md"
// //                   onClick={e => deleteTimeSlot(e, index)}
// //                 >
// //                   <AiOutlineDelete />
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //           <button className="form__btn" type="button" onClick={addTimeSlot}>
// //             Add Time Slot
// //           </button>
// //         </div>

// //         <div className="mb-5">
// //           <p className="form__label">Location*</p>
// //           <div className="grid grid-cols-2 gap-5">
// //             <div>
// //               <input
// //                 type="text"
// //                 name="latitude"
// //                 value={formData.location.latitude}
// //                 onChange={handleLocationChange}
// //                 placeholder="Latitude"
// //                 className="form__input"
// //               />
// //             </div>
// //             <div>
// //               <input
// //                 type="text"
// //                 name="longitude"
// //                 value={formData.location.longitude}
// //                 onChange={handleLocationChange}
// //                 placeholder="Longitude"
// //                 className="form__input"
// //               />
// //             </div>
// //           </div>
// //           <button
// //             className="form__btn mt-4"
// //             type="button"
// //             onClick={getLocation}
// //           >
// //             Get Location
// //           </button>
// //         </div>

// //         <div className="mb-5">
// //           <p className="form__label">About</p>
// //           <textarea
// //             name="about"
// //             value={formData.about}
// //             onChange={handleInputChange}
// //             placeholder="About Yourself"
// //             rows="4"
// //             className="form__input"
// //           />
// //         </div>

// //         <div className="mb-5">
// //           <p className="form__label">Profile Photo</p>
// //           <input
// //             type="file"
// //             name="photo"
// //             onChange={handleFileInputChange}
// //             className="form__input"
// //           />
// //           {formData.photo && (
// //             <div className="mt-4">
// //               <img
// //                 src={formData.photo}
// //                 alt="Profile"
// //                 className="w-32 h-32 object-cover rounded-full"
// //               />
// //             </div>
// //           )}
// //         </div>

// //         <button className="form__btn mt-4" onClick={updateDoctorHandler}>
// //           Update Profile
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Profile;
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { BASE_URL, token } from "../../config";

// const Profile = ({ doctorData }) => {
//   const [step, setStep] = useState(1); // State to track current step
//   const [formData, setFormData] = useState({
//     name: doctorData?.name || "",
//     email: doctorData?.email || "",
//     gender: doctorData?.gender || "",
//     phone: doctorData?.phone || "",
//     photo: doctorData?.photo || "",
//     bio: doctorData?.bio || "",
//     about: doctorData?.about || "",
//     ticketPrice: doctorData?.ticketPrice || 0,
//     qualifications: doctorData?.qualifications || [],
//     experiences: doctorData?.experiences || [],
//     specialization: doctorData?.specialization || "",
//     timeSlots: doctorData?.timeSlots || [],
//     location: {
//       latitude: doctorData?.location?.latitude || "",
//       longitude: doctorData?.location?.longitude || "",
//     },
//     isApproved: "approved", // Default to approved on submit
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLocationChange = (e) => {
//     setFormData({
//       ...formData,
//       location: {
//         ...formData.location,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   const updateDoctorHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
//         method: "put",
//         headers: {
//           "content-type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await res.json();
//       if (!res.ok) {
//         return toast.error(result.message);
//       }

//       toast.success("Profile updated successfully");
//     } catch (err) {
//       console.log(err);
//       toast.error("Error updating profile");
//     }
//   };

//   const handleNext = () => {
//     setStep(step + 1);
//   };

//   const handlePrevious = () => {
//     setStep(step - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     updateDoctorHandler(e);
//   };

//   // Render different sections based on current step
//   const renderFormSection = () => {
//     switch (step) {
//       case 1:
//         return (
//           <div>
//             {/* Personal Information Section */}
//             {/* Example: Name, Email, Phone, Bio, Gender */}
//           </div>
//         );
//       case 2:
//         return (
//           <div>
//             {/* Qualifications Section */}
//             {/* Example: Qualifications, Experiences */}
//           </div>
//         );
//       case 3:
//         return (
//           <div>
//             {/* Time Slots Section */}
//             {/* Example: Time Slots */}
//           </div>
//         );
//       case 4:
//         return (
//           <div>
//             {/* Location Section */}
//             {/* Example: Latitude, Longitude */}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h2>Profile Information</h2>
//       <form onSubmit={handleSubmit}>
//         {renderFormSection()}
//         <div>
//           {/* Navigation buttons based on current step */}
//           {step > 1 && (
//             <button type="button" onClick={handlePrevious}>
//               Previous
//             </button>
//           )}
//           {step < 4 && (
//             <button type="button" onClick={handleNext}>
//               Next
//             </button>
//           )}
//           {step === 4 && (
//             <button type="submit">
//               Submit
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Profile;

/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BASE_URL, token } from "../../config";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { AiOutlineDelete } from "react-icons/ai";

import { toast } from "react-toastify";

const Profile = ({ doctorData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    photo: null,
    bio: "",
    about: "",
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    specialization: "",
    timeSlots: [],
  });

  useEffect(() => {
    setFormData({
      name: doctorData?.name,
      email: doctorData?.email,
      gender: doctorData?.gender,
      photo: doctorData?.photo,
      phone: doctorData?.phone,
      bio: doctorData?.bio,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      about: doctorData?.about,
      ticketPrice: doctorData?.ticketPrice,
      specialization: doctorData?.specialization,
      timeSlots: doctorData?.timeSlots,
    });
  }, [doctorData]);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async event => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);

    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const updateDoctorHandler = async e => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        return toast.error(result.message);
      }

      toast.success("successfully update");
    } catch (err) {
      console.log(err);
    }
  };

  // Reusable function for adding items
  const addItem = (key, item) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  // Reusable function for handling changes
  const handleReuseableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => {
      const updatedItems = [...prevFormData[key]];
      updatedItems[index][name] = value;
      return {
        ...prevFormData,
        [key]: updatedItems,
      };
    });
  };

  // Reusable function for deleting items
  const deleteItem = (key, index) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }));
  };

  const addQualification = e => {
    e.preventDefault();
    addItem("qualifications", {
      startingDate: null,
      endingDate: null,
      degree: "",
      university: "",
    });
  };

  const handleQualificationChange = (event, index) => {
    handleReuseableInputChangeFunc("qualifications", index, event);
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  const addExperience = e => {
    e.preventDefault();
    addItem("experiences", {
      startingDate: null,
      endingDate: null,
      position: "",
      hospital: "",
    });
  };

  const handleExperienceChange = (event, index) => {
    handleReuseableInputChangeFunc("experiences", index, event);
  };

  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", index);
  };

  const addTimeSlot = e => {
    e.preventDefault();
    addItem("timeSlots", { day: "", startingTime: null, endingTime: null });
  };

  const handleTimeSlotChange = (event, index) => {
    handleReuseableInputChangeFunc("timeSlots", index, event);
  };

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>
      <form>
        <div className="mb-5">
          <p className="form__label">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Email*</p>
          <input
            type="email"
            readOnly
            value={formData.email}
            name="email"
            placeholder="Enter Your Email"
            className="form__input"
            aria-readonly
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Phone*</p>
          <input
            type="number"
            value={formData.phone}
            onChange={handleInputChange}
            name="phone"
            placeholder="Phone Number"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Bio*</p>
          <input
            type="text"
            value={formData.bio}
            onChange={handleInputChange}
            name="bio"
            maxLength={100}
            placeholder="Bio"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form__label">Gender</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="form__label">Specialization*</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>

            <div>
              <p className="form__label">Ticket Price*</p>
              <input
                type="number"
                name="ticketPrice"
                value={formData.ticketPrice}
                placeholder="100"
                className="form__input"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <p className="form__label">Qualifications*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__input"
                      onChange={e => handleQualificationChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__input"
                      onChange={e => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form__label">Degree*</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form__input"
                      placeholder="Degree"
                      onChange={e => handleQualificationChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">University*</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className="form__input"
                      placeholder="University"
                      onChange={e => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]"
                  onClick={e => deleteQualification(e, index)}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addQualification}
            className="bg-[#000] py-2 px-5 rounded text-white"
          >
            Add Qualification
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">Experiences*</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__input"
                      onChange={e => handleExperienceChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__input"
                      onChange={e => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form__label">Position*</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      className="form__input"
                      placeholder="Position"
                      onChange={e => handleExperienceChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">University*</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      className="form__input"
                      placeholder="Hospital"
                      onChange={e => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]"
                  onClick={e => deleteExperience(e, index)}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addExperience}
            className="bg-[#000] py-2 px-5 rounded text-white"
          >
            Add Experience
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">Time Slots*</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-[30px]">
                <div>
                  <p className="form__label">Day*</p>
                  <select
                    onChange={e => handleTimeSlotChange(e, index)}
                    name="day"
                    value={item.day}
                    className="form__input py-3.5"
                  >
                    <option value="">Select</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                  </select>
                </div>
                <div>
                  <p className="form__label">Starting Time*</p>
                  <input
                    type="time"
                    name="startingTime"
                    value={item.startingTime}
                    className="form__input"
                    onChange={e => handleTimeSlotChange(e, index)}
                  />
                </div>

                <div>
                  <p className="form__label">Ending Time*</p>
                  <input
                    type="time"
                    name="endingTime"
                    value={item.endingTime}
                    className="form__input"
                    onChange={e => handleTimeSlotChange(e, index)}
                  />
                </div>

                <div className="flex items-center">
                  <button
                    className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-6"
                    onClick={e => deleteTimeSlot(e, index)}
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addTimeSlot}
            className="bg-[#000] py-2 px-5 rounded text-white "
          >
            Add TimeSlot
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">About*</p>
          <textarea
            type="text"
            rows={5}
            value={formData.about}
            onChange={handleInputChange}
            name="about"
            placeholder="Write about you"
            className="form__input"
          />
        </div>

        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-[#0067FF] flex items-center justify-center">
              <img
                src={formData.photo}
                alt="Preview"
                className="w-full rounded-full"
              />
            </figure>
          )}
          <div className="relative inline-block w-[130px] h-[50px]">
            <input
              className="custom-file-input absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              id="customFile"
              name="photo"
              type="file"
              accept=".jpg,.png"
              placeholder="Upload Profile"
              onChange={handleFileInputChange}
            />

            <label
              className="custom-file-label absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
              htmlFor="customFile"
            >
              {selectedFile ? selectedFile.name : "Upload Photo"}
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            type="submit"
            onClick={updateDoctorHandler}
            className="w-full bg-[#0067FF] text-white py-3 px-4 rounded-lg text-[18px] leading-[30px]"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
