import React from 'react'

export const PhotoTile = (props) => {
  let {photos} = props
  return photos.map(photo => (
    <div style={{ border: "1px solid grey", padding: "15px" }} key={photo.id}>
      <a href={photo.urls.full}>
        <img src={photo.urls.thumb} alt="" />
      </a>
      <p>
        Name: {photo.user.first_name} {photo.user.last_name}
      </p>
      <p>{photo.location.name}</p>
    </div>
  ));
}
