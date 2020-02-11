import React from 'react'

export const PhotoTile = (props) => {
  let {photos} = props
  return photos.map(photo => (
    <div
      style={{
        border: "1px solid grey",
        padding: "15px",
        boxShadow: "8px 5px 5px grey",
        borderRadius: '8px',
        overflow: 'hidden'
      }}
      key={photo.id}
    >
      <a href={photo.urls.full}>
        <img src={photo.urls.thumb} alt="" style={{maxHeight:'250px',}}/>
      </a>
      <p>
        Artist: {photo.user.first_name} {photo.user.last_name}
      </p>
      <p>Photo location {photo.location.name}</p>
    </div>
  ));
}
