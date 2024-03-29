import React from "react";
import { Carousel } from "antd";
import userStore from "../../store/users";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
const contentStyle = {
  margin: 0,
  padding: 25,
  height: "300px",
  width: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "transparent",
  borderRadius: 20,
  paddingBottom: 20,
  border: "1px solid gray",
};
const AuthUserPhotoCarousel = observer(() => {
  const authUser = userStore.getAuthorizedUser();
  const user = toJS(userStore.users.find((item) => item.id === authUser.id));


  return (
    <>
      <Carousel
        style={{ borderRadius: 20 }}
        >
        {user.photoGallery.map((photo, index) => (
          <div key={index}>
            <img
              key={photo.id}
              src={photo}
              alt="photo_gallery"
              style={contentStyle}
            />
          </div>
        ))}
      </Carousel>
      {user.photoGallery.length === 0 ? (
        <div
          style={{
            width: "100%",
            height: "80%",
            textAlign: "center",
            justifyItems: "center",
            color: "#bdbdbd",
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            border: "1px solid gray",
          }}>
          <p>No photo</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
});
export default AuthUserPhotoCarousel;
