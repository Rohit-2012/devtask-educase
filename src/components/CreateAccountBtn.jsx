import { Link } from "react-router-dom"
import { Button } from "@mui/material"


const CreateAccountBtn = ({path}) => {
  return (
    <Button variant="contained" sx={{padding: 1.5, backgroundColor: '#6C25FF'}} component={Link} to={`/${path}`}>
      Create Account
    </Button>
  )
}

export default CreateAccountBtn
