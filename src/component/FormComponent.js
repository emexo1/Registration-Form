import {useState} from 'react';
// function FormComponent(){
//     const [inputValue, setInputValue] = useState('name');
//     const [selectValue, setSelectvalue] = useState('');
//     const [formData, setFormData] = useState('');
//     const handleSubmit = (e) =>{e.preventDefault();
//         alert('submitted:($FormData)');
//     }
//     return (
//     <div className='flex flex-col item-center justify-center h-screen'>
//         <lable for='name'>Enter your Name</lable>
//     <input type="text" id='name' value={inputValue} onChange={(e) =>setInputValue(e.target.value)} />;
//     <p>{inputValue}</p>
//     <br></br>
    
//     <lable for="cars">Choose Your Car</lable>
// <select name="cars" id="cars" value={inputValue} onChange={(e) =>setInputValue(e.target.value)}>
//     <option value="volvo">volvo</option>
//     <option value="mercedes">Mercedes</option>
//     <option value="spider">spider</option>
// </select>
    
//         </div>

//     );
// }

const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        languages: {
          javascript: '',
          python: '',
          java: '' ,
        },
        favoriteColor: '',
        feedback: '',
    });

    const handleSubmit = (e) => {
    e.preventDefault();
    alert('submitted: ${formData}');
};

const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});

};
// return (
//     <div>
//         <form>
//             <div>
//                 <label>Email:</label>
//                 <input type='email' name='email' value={formData.email} onChange={(e) => handleChange(e)}/>
//             </div>
//             <div>
//                 <lable>UserName:</lable>
//                 <input type='text' name='userName' value={formData.userName} onChange={(e) => handleChange(e)}/>
//             </div>




//             <button type='submit' onClick={handleSubmit}>submit</button>
//         </form>
//     </div>
// )

  return (
    <div className=" flex flex-col justify-center items-center bg-gray-50">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Registration Form</h1>
        <form onSubmit={handleSubmit}>
          {/* Text Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">Name:</label>
            <input type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required />
          </div>

            {/* Number Input */}
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 font-semibold">Age:</label>
            <input
              type="number"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Radio Buttons (Gender) */}
          <div className="mb-4">
            <span className="block text-gray-700 font-semibold">Gender:</span>
            <div className="mt-2">
              <label className="mr-6">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>

          {/* Checkbox (Programming Languages) */}
          <div className="mb-4">
            <span className="block text-gray-700 font-semibold">Programming Languages:</span>
            <div className="mt-2">
              <label className="mr-6">
                <input
                  type="checkbox"
                  name="javascript"
                  checked={formData.languages.javascript}
                  onChange={handleChange}
                  className="mr-2"
                />
                JavaScript
              </label>
              <label className="mr-6">
                <input
                  type="checkbox"
                  name="python"
                  checked={formData.languages.python}
                  onChange={handleChange}
                  className="mr-2"
                />
                Python
              </label>
              <label>
                <input
                  type="checkbox"
                  name="java"
                  checked={formData.languages.java}
                  onChange={handleChange}
                  className="mr-2"
                />
                Java
              </label>
            </div>
          </div>

          {/* Select Dropdown (Favorite Color) */}
          <div className="mb-4">
            <label htmlFor="favoriteColor" className="block text-gray-700 font-large">Favorite Color:</label>
            <select
              name="favoriteColor"
              id="favoriteColor"
              value={formData.favoriteColor}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
            </select>
          </div>

          {/* Textarea (Feedback) */}
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-gray-700 font-semibold">Feedback:</label>
            <textarea
              name="feedback"
              id="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
          <button
              type="submit"
              className="w-full p-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default FormComponent;