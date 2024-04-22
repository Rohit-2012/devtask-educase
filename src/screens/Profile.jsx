import { Avatar, Badge } from "@mui/material";
import profilePicture from "../assets/img/Ellipse114@2x.png";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Profile = () => {
  return (
    <section>
      <div className="bg-white p-4 shadow-sm">
        <h2 className="text-xl">Account Settings</h2>
      </div>
      <div className="px-4 py-8 border-b-2 border-dashed border-gray-200">
        <div className="flex gap-4 justify-start">
          <Badge
            badgeContent={<CameraAltIcon sx={{fontSize: 10}}/>}
            color="secondary"
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar
              alt="profile picture"
              src={profilePicture}
              sx={{ width: 76, height: 76 }}
            />
          </Badge>
          <div>
            <h3 className="text-xl font-semibold">Marry Doe</h3>
            <p>Marry@gmail.com</p>
          </div>
        </div>
        <p className="text-[#1D2226] text-sm mt-10">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
      </div>
    </section>
  );
};

export default Profile;
