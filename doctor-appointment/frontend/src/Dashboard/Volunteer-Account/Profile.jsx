// import { useState, useEffect } from 'react';
// import { BASE_URL, token } from '../../config';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { toast } from 'react-toastify';

// const Profile = ({ volunteerData }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: '',
//     phone: '',
//     photo: '',
//     address: '',
//     city: '',
//     state: '',
//     country: '',
//     pincode: '',
//     isMedicalProfessional: false,
//     qualifications: [],
//     profession: '',
//     medicalDegreeCertificationUrl: '',
//     hasCertification: false,
//     certificationUrl: '',
//     experiences: [],
//     availabilityStatus: '',
//     bio: '',
//     about: '',
//     isApproved: 'pending',
//     location: {
//       latitude: '',
//       longitude: '',
//     },
//   });

//   useEffect(() => {
//     if (volunteerData) {
//       setFormData({
//         email: volunteerData.email || '',
//         name: volunteerData.name || '',
//         phone: volunteerData.phone || '',
//         photo: volunteerData.photo || '',
//         address: volunteerData.address || '',
//         city: volunteerData.city || '',
//         state: volunteerData.state || '',
//         country: volunteerData.country || '',
//         pincode: volunteerData.pincode || '',
//         isMedicalProfessional: volunteerData.isMedicalProfessional || false,
//         qualifications: volunteerData.qualifications || [],
//         profession: volunteerData.profession || '',
//         medicalDegreeCertificationUrl: volunteerData.medicalDegreeCertificationUrl || '',
//         hasCertification: volunteerData.hasCertification || false,
//         certificationUrl: volunteerData.certificationUrl || '',
//         experiences: volunteerData.experiences || [],
//         availabilityStatus: volunteerData.availabilityStatus || '',
//         bio: volunteerData.bio || '',
//         about: volunteerData.about || '',
//         isApproved: volunteerData.isApproved || 'approved',
//         location: {
//           latitude: volunteerData.location?.latitude || '',
//           longitude: volunteerData.location?.longitude || '',
//         },
//       });
//     }
//   }, [volunteerData]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleLocationChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       location: {
//         ...formData.location,
//         [name]: value,
//       },
//     });
//   };

//   const updateVolunteerHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`${BASE_URL}/volunteers/${volunteerData._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await res.json();
//       if (!res.ok) {
//         toast.error(result.message);
//         return;
//       }

//       toast.success('Profile updated successfully');
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       toast.error('Error updating profile');
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">Profile Information</h2>
//       <form>
//         {/* Input fields for all relevant profile information */}
//         {/* Example: Email */}
//         <div className="mb-5">
//           <p className="form__label">Email*</p>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter Email"
//             className="form__input"
//             required
//           />
//         </div>

//         {/* Other input fields for password, name, phone, etc. */}
//         {/* Address details */}
//         <div className="mb-5">
//           <p className="form__label">Address*</p>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleInputChange}
//             placeholder="Enter Address"
//             className="form__input"
//           />
//         </div>
//         {/* City details */}
//         State country pincode About want
//         {/* City */}
//         <div className="mb-5">
//           <p className="form__label">City*</p>
//           <input
//             type="text"
//             name="city"
//             value={formData.city}
//             onChange={handleInputChange}
//             placeholder="Enter City"
//             className="form__input"
//           />
//         </div>

//         {/* State */}
//         <div className="mb-5">
//           <p className="form__label">State*</p>
//           <input
//             type="text"
//             name="state"
//             value={formData.state}
//             onChange={handleInputChange}
//             placeholder="Enter State"
//             className="form__input"
//           />
//         </div>

//         {/* Country */}
//         <div className="mb-5">
//           <p className="form__label">Country*</p>
//           <input
//             type="text"
//             name="country"
//             value={formData.country}
//             onChange={handleInputChange}
//             placeholder="Enter Country"
//             className="form__input"
//           />
//         </div>

//         {/* Pincode */}
//         <div className="mb-5">
//           <p className="form__label">Pincode*</p>
//           <input
//             type="text"
//             name="pincode"
//             value={formData.pincode}
//             onChange={handleInputChange}
//             placeholder="Enter Pincode"
//             className="form__input"
//           />
//         </div>

//         {/* Medical Professional Fields (conditional rendering based on isMedicalProfessional) */}
//         {formData.isMedicalProfessional && (
//           <div>
//             {/* Profession */}
//             <div className="mb-5">
//               <p className="form__label">Profession*</p>
//               <input
//                 type="text"
//                 name="profession"
//                 value={formData.profession}
//                 onChange={handleInputChange}
//                 placeholder="Enter Profession"
//                 className="form__input"
//               />
//             </div>

//             {/* Medical Degree Certification URL */}
//             <div className="mb-5">
//               <p className="form__label">Medical Degree Certification URL</p>
//               <input
//                 type="text"
//                 name="medicalDegreeCertificationUrl"
//                 value={formData.medicalDegreeCertificationUrl}
//                 onChange={handleInputChange}
//                 placeholder="Enter Certification URL"
//                 className="form__input"
//               />
//             </div>

//             {/* Has Certification */}
//             <div className="mb-5">
//               <p className="form__label">Has Certification</p>
//               <input
//                 type="checkbox"
//                 name="hasCertification"
//                 checked={formData.hasCertification}
//                 onChange={handleInputChange}
//                 className="form__input-checkbox"
//               />
//             </div>

//             {/* Certification URL */}
//             {formData.hasCertification && (
//               <div className="mb-5">
//                 <p className="form__label">Certification URL</p>
//                 <input
//                   type="text"
//                   name="certificationUrl"
//                   value={formData.certificationUrl}
//                   onChange={handleInputChange}
//                   placeholder="Enter Certification URL"
//                   className="form__input"
//                 />
//               </div>
//             )}

//             {/* Qualifications (Array field, can add multiple) */}
//             <div className="mb-5">
//               <p className="form__label">Qualifications</p>
//               <input
//                 type="text"
//                 name="qualifications"
//                 value={formData.qualifications}
//                 onChange={handleInputChange}
//                 placeholder="Enter Qualifications"
//                 className="form__input"
//               />
//             </div>
//           </div>
//         )}

//         {/* Bio */}
//         <div className="mb-5">
//           <p className="form__label">Bio</p>
//           <textarea
//             name="bio"
//             value={formData.bio}
//             onChange={handleInputChange}
//             placeholder="Write a short bio..."
//             className="form__textarea"
//             maxLength="50"
//           />
//         </div>

//         {/* About */}
//         <div className="mb-5">
//           <p className="form__label">About</p>
//           <textarea
//             name="about"
//             value={formData.about}
//             onChange={handleInputChange}
//             placeholder="Tell us more about yourself..."
//             className="form__textarea"
//           />
//         </div>

//         {/* Availability Status */}
//         <div className="mb-5">
//           <p className="form__label">Availability Status*</p>
//           <select
//             name="availabilityStatus"
//             value={formData.availabilityStatus}
//             onChange={handleInputChange}
//             className="form__select"
//           >
//             <option value="">Select Availability</option>
//             <option value="Available">Available</option>
//             <option value="Not Available">Not Available</option>
//           </select>
//         </div>

//         {/* Location (latitude and longitude) */}
//         <div className="mb-5">
//           <p className="form__label">Latitude</p>
//           <input
//             type="text"
//             name="latitude"
//             value={formData.location.latitude}
//             onChange={handleLocationChange}
//             placeholder="Enter Latitude"
//             className="form__input"
//           />
//         </div>
//         <div className="mb-5">
//           <p className="form__label">Longitude</p>
//           <input
//             type="text"
//             name="longitude"
//             value={formData.location.longitude}
//             onChange={handleLocationChange}
//             placeholder="Enter Longitude"
//             className="form__input"
//           />
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="btn btn-primary" onClick={updateVolunteerHandler}>
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Profile;
import { useState, useEffect } from 'react';
import { BASE_URL, token } from '../../config';
import { AiOutlineDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';

const Profile = ({ volunteerData }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    photo: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    isMedicalProfessional: false,
    qualifications: [],
    profession: '',
    medicalDegreeCertificationUrl: '',
    hasCertification: false,
    certificationUrl: '',
    experiences: [],
    availabilityStatus: '',
    bio: '',
    about: '',
    isApproved: 'pending',
    location: {
      latitude: '',
      longitude: '',
    },
  });

  useEffect(() => {
    if (volunteerData) {
      setFormData({
        email: volunteerData.email || '',
        name: volunteerData.name || '',
        phone: volunteerData.phone || '',
        photo: volunteerData.photo || '',
        address: volunteerData.address || '',
        city: volunteerData.city || '',
        state: volunteerData.state || '',
        country: volunteerData.country || '',
        pincode: volunteerData.pincode || '',
        isMedicalProfessional: volunteerData.isMedicalProfessional || false,
        qualifications: volunteerData.qualifications || [],
        profession: volunteerData.profession || '',
        medicalDegreeCertificationUrl: volunteerData.medicalDegreeCertificationUrl || '',
        hasCertification: volunteerData.hasCertification || false,
        certificationUrl: volunteerData.certificationUrl || '',
        experiences: volunteerData.experiences || [],
        availabilityStatus: volunteerData.availabilityStatus || '',
        bio: volunteerData.bio || '',
        about: volunteerData.about || '',
        isApproved: volunteerData.isApproved || 'approved',
        location: {
          latitude: volunteerData.location?.latitude || '',
          longitude: volunteerData.location?.longitude || '',
        },
      });
    }
  }, [volunteerData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      location: {
        ...formData.location,
        [name]: value,
      },
    });
  };

  // Function to fetch user's current geolocation
  const fetchGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData({
          ...formData,
          location: {
            latitude: latitude.toString(),
            longitude: longitude.toString(),
          },
        });
      },
      (error) => {
        console.error('Error getting geolocation:', error);
        toast.error('Error fetching geolocation');
      }
    );
  };

  const updateVolunteerHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/volunteers/${volunteerData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        toast.error(result.message);
        return;
      }

      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Error updating profile');
    }
  };

  // Function to handle account deletion
  const deleteAccount = async () => {
    try {
      const res = await fetch(`${BASE_URL}/volunteers/${volunteerData._id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const result = await res.json();
        toast.error(result.message);
        return;
      }

      toast.success('Account deleted successfully');
      // Optionally: Redirect or perform additional actions after deletion
    } catch (error) {
      console.error('Error deleting account:', error);
      toast.error('Error deleting account');
    }
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">Profile Information</h2>
      <form>
        {/* Input fields for all relevant profile information */}
        {/* Example: Email */}
        <div className="mb-5">
          <p className="form__label">Email*</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter Email"
            className="form__input"
            required
          />
        </div>

        {/* Other input fields for password, name, phone, etc. */}
        {/* Address details */}
        <div className="mb-5">
          <p className="form__label">Address*</p>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter Address"
            className="form__input"
          />
        </div>
        {/* City details */}
        State country pincode About want
        {/* City */}
        <div className="mb-5">
          <p className="form__label">City*</p>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="Enter City"
            className="form__input"
          />
        </div>

        {/* State */}
        <div className="mb-5">
          <p className="form__label">State*</p>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            placeholder="Enter State"
            className="form__input"
          />
        </div>

        {/* Country */}
        <div className="mb-5">
          <p className="form__label">Country*</p>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            placeholder="Enter Country"
            className="form__input"
          />
        </div>

        {/* Pincode */}
        <div className="mb-5">
          <p className="form__label">Pincode*</p>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            placeholder="Enter Pincode"
            className="form__input"
          />
        </div>

        {/* Medical Professional Fields (conditional rendering based on isMedicalProfessional) */}
        {formData.isMedicalProfessional && (
          <div>
            {/* Profession */}
            <div className="mb-5">
              <p className="form__label">Profession*</p>
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                placeholder="Enter Profession"
                className="form__input"
              />
            </div>

            {/* Medical Degree Certification URL */}
            <div className="mb-5">
              <p className="form__label">Medical Degree Certification URL</p>
              <input
                type="text"
                name="medicalDegreeCertificationUrl"
                value={formData.medicalDegreeCertificationUrl}
                onChange={handleInputChange}
                placeholder="Enter Certification URL"
                className="form__input"
              />
            </div>

            {/* Has Certification */}
            <div className="mb-5">
              <p className="form__label">Has Certification</p>
              <input
                type="checkbox"
                name="hasCertification"
                checked={formData.hasCertification}
                onChange={handleInputChange}
                className="form__input-checkbox"
              />
            </div>

            {/* Certification URL */}
            {formData.hasCertification && (
              <div className="mb-5">
                <p className="form__label">Certification URL</p>
                <input
                  type="text"
                  name="certificationUrl"
                  value={formData.certificationUrl}
                  onChange={handleInputChange}
                  placeholder="Enter Certification URL"
                  className="form__input"
                />
              </div>
            )}

            {/* Qualifications (Array field, can add multiple) */}
            <div className="mb-5">
              <p className="form__label">Qualifications</p>
              <input
                type="text"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleInputChange}
                placeholder="Enter Qualifications"
                className="form__input"
              />
            </div>
          </div>
        )}

        {/* Bio */}
        <div className="mb-5">
          <p className="form__label">Bio</p>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Write a short bio..."
            className="form__textarea"
            maxLength="50"
          />
        </div>

        {/* About */}
        <div className="mb-5">
          <p className="form__label">About</p>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            placeholder="Tell us more about yourself..."
            className="form__textarea"
          />
        </div>

        {/* Availability Status */}
        <div className="mb-5">
          <p className="form__label">Availability Status*</p>
          <select
            name="availabilityStatus"
            value={formData.availabilityStatus}
            onChange={handleInputChange}
            className="form__select"
          >
            <option value="">Select Availability</option>
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
        </div>

        {/* Location (latitude and longitude) */}
        <div className="mb-5">
          <p className="form__label">Latitude</p>
          <input
            type="text"
            name="latitude"
            value={formData.location.latitude}
            onChange={handleLocationChange}
            placeholder="Enter Latitude"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Longitude</p>
          <input
            type="text"
            name="longitude"
            value={formData.location.longitude}
            onChange={handleLocationChange}
            placeholder="Enter Longitude"
            className="form__input"
          />
        </div>

        {/* Button to fetch current geolocation */}
        <div className="mb-5">
          <button type="button" className="btn btn-secondary" onClick={fetchGeolocation}>
            Fetch Current Location
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary" onClick={updateVolunteerHandler}>
          Update Profile
        </button>

        {/* Button to delete account */}
        <button type="button" className="btn btn-danger" onClick={deleteAccount}>
          Delete Account <AiOutlineDelete className="inline-block ml-2" />
        </button>
      </form>
    </div>
  );
};

export default Profile;
