import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const Footer: React.FC = () => {
  return (
    <div className="flex bg-gray-200">
      {/* Left */}
      <div className="flex-1 p-8 space-y-6">
        <h1 className="text-xl font-bold">Krishna</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          dicta debitis odio soluta sunt quidem voluptates aliquam ullam quam,
          nulla eum ab assumenda ipsam quae amet facere, dolor blanditiis at!
        </p>
        <div className="flex space-x-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-700">
            <FacebookIcon style={{ color: "white" }} />
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-600">
            <InstagramIcon style={{ color: "white" }} />
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-400">
            <TwitterIcon style={{ color: "white" }} />
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-600">
            <PinterestIcon style={{ color: "white" }} />
          </div>
        </div>
      </div>

      {/* Center */}
      <div className="flex-1 p-8">
        <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
        <ul className="list-none p-0 flex flex-wrap">
          {[
            "Home",
            "Cart",
            "Man",
            "Woman",
            "Accessories",
            "My Account",
            "Wishlist",
            "Orders",
            "Terms",
          ].map((link, index) => (
            <li key={index} className="w-1/2 mb-2 cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Right */}
      <div className="flex-1 p-8">
        <h3 className="text-lg font-semibold mb-4">Contact</h3>
        <div className="mb-3 flex items-center space-x-2">
          <RoomIcon />
          <span>1187, Vyas Bhawan, BITS PILANI</span>
        </div>
        <div className="mb-3 flex items-center space-x-2">
          <PhoneIcon />
          <span>+919898989898</span>
        </div>
        <div className="mb-3 flex items-center space-x-2">
          <MailIcon />
          <span>bitspilani@pilani.ac.in</span>
        </div>
        <img
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="Payment methods"
          className="w-3/4"
        />
      </div>
    </div>
  );
};

export default Footer;
