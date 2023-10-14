import React from "react";
import { NavLink } from "react-router-dom";

function StoriesPost() {
  return (
    <div className="  items-center  p-2 flex space-x-1 sm:space-x-2 rounded-[1rem]  ">
      <NavLink to="/stories">
        <div className="w-32  h-48 bg-white flex items-center justify-center  rounded ">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e72e332-c90f-40a6-a27c-bb706e357154/df1y455-ddf2455a-9834-442b-848e-70d7dc81aae0.png/v1/fill/w_1920,h_2716,q_80,strp/uchiha_madara_by_deriavis_df1y455-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjcxNiIsInBhdGgiOiJcL2ZcLzZlNzJlMzMyLWM5MGYtNDBhNi1hMjdjLWJiNzA2ZTM1NzE1NFwvZGYxeTQ1NS1kZGYyNDU1YS05ODM0LTQ0MmItODQ4ZS03MGQ3ZGM4MWFhZTAucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.w77uksQz0daqOVLVRqrf7D-xihDzwLBkBKitg0lKfTQ"
            className=" w-32  h-48 rounded "
            alt=""
          />
          <div className=" flex w-12 h-12 bg-gray-400 mt-28 items-center justify-center rounded-full absolute z-20  ">
            <img
              src="https://static.printler.com/cache/d/d/7/9/e/2/dd79e2bbfc7e803037a010951622f3d25545dae3.jpg"
              className=" w-12  h-12 border-red-100 border rounded-full "
              alt=""
            />
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default StoriesPost;
