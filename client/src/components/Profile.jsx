import React from "react";

const Profile = ({ profile }) => {
  return <>{profile?.name ? <h2>Hej {profile.name}!</h2> : ""}</>;
};

export default Profile;
