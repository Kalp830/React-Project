import "./Gallery.css";
function Gallery(){
    let style = {backgroundColor:'Orange'};
    return(
    <div className="image-box" style={style}>
    <img 
    src="https://i.imgur.com/MK3eW3As.jpg"
    alt="katharin johan"
    />
    
    </div>
    );
}
export default Gallery;