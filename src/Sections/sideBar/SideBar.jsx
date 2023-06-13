import React from "react";
import { useRecoilState } from "recoil";
import { atomCurrentUser, atomIsSideBarVisible } from "../../const data/data";
import  './SideBar.css'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function SideBar() {
  const [isSideBarVisible, setIsSideBarVisible] =
      useRecoilState(atomIsSideBarVisible);
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useRecoilState(atomCurrentUser)
    
      function logOut() {
          Swal.fire({
            title: 'Confirm Logout?',
            text: "You will be logged out of your account!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Done',
                'You have been logged out.',
                'success'
              )
              let temp = { ...currentUser };
              temp.isLoggedIn = false;
              setCurrentUser(temp);
              localStorage.setItem("currentUser", JSON.stringify(currentUser));
            }
          })
      }
  return (
      <div 
      className={`sidebar ${isSideBarVisible ? "visible" : ""}`}
      >
      <div className='menuDiv' onClick={()=>navigate('/yourdata')}>Your Data</div>
      <div className='menuDiv' >About Us</div>
          <div className='menuDiv'
              onClick={logOut}
          >Logout</div>
  
    </div>
  );
}
