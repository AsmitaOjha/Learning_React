import profilePic from './assets/200 pixel.jpg'

function Card(){

    return(
        <div className="card">
           <img className="card-image" src={profilePic} alt="My photo" />
           <h2 className="card-title">Asmita Ojha</h2>
           <p className="card-text">CSIT Student. I am learning React.</p>

        </div>
    );
}
export default Card;