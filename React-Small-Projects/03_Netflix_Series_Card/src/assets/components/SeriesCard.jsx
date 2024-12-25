import React from 'react'
import styled from "styled-components";


const SeriesCard = (props) => {
  const { id, img_url, name, genre, rating, cast, watch_url, description } = props.curEle
  
  // const WatchButton = styled.button({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--btn-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  // });

  const WatchButton = styled.button`
    padding: 0.75rem 1.75rem;
    border: none;
    font-size: 0.85rem;
    background-color: ${(props)=> props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: #000;
    font-weight: bold;
    cursor: pointer;
    border-radius:100px;
    margin-bottom:20px;
  `;

  const NameTitle = styled.h2`
   color: green;
   font-size: 1.5rem;
   background-color: #eee;
   padding:10px 0
  `;

  const Rating = styled.h3`
    border-radius:100px;
    padding:1rem;
    font-size: 1rem;
    color: magenta

  `;

  return (
    <>
      <li key={id}>
      <img
       src={img_url}
       alt={name}
       width="100%"
       height="auto"
      ></img>
      <NameTitle> {name}</NameTitle>
      <Rating>Rating: <span className={rating > 8.5 ? "super_hit" : "average"}> {rating}</span></Rating>
      <p>Description: {description}</p>
      <p>Genre: {genre}</p>
      <p>Cast: {cast}</p>
      <a href={watch_url}>
        <WatchButton rating={rating}>Watch Now</WatchButton>
              </a>
      </li> 
      </> 
    )
    
}

export default SeriesCard;
