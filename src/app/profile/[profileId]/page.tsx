import React from "react";

const Profile = ({ params }: any) => {
  console.log(params);

  return (
    <div>
      Profile<span>{params.profileId}</span>
    </div>
  );
};

export default Profile;
