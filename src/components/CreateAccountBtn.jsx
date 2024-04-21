import { Link } from "react-router-dom"


const CreateAccountBtn = () => {
  return (
    <button className="min-w-80 py-3 rounded-md bg-[#6C25FF] text-white font-semibold cursor-pointer">
      <Link to='/signup'>Create Account</Link>
    </button>
  )
}

export default CreateAccountBtn
