import React from 'react';
import './App.css'; 
import raghunathtemp from './raghunath-temple.jpg';
import bahufort from './bahu-fort.jpg';
import baghebahu from './bagh-e-bahu.jpg';
import kistwarVideo from './kistwar.mp4';
import video2 from './video2.mp4';
import aboutk from './aboutk.jpg';
import gk1 from './gk1.jpg';
import gk2 from './gk2.jpg';
import gk3 from './gk3.jpg';
import gk6 from './gk6.jpg';
import gk10 from './gk10.jpg';
import newSlid1 from './new-slid1.jpg';
import newSlid4 from './new-slid4.jpg';

function HomePage() {
  return (
    <div>
      <div className="attractions-page">
        <h2>Attractions in Jammu</h2>
        <div className="attraction">
          <img src={raghunathtemp} alt="Raghunath Temple in Jammu" />
          <div className="attraction-details">
            <h3>Raghunath Temple</h3>
            <b><p>Raghunath Temple is one of the largest temple complexes of North India, located in the heart of Jammu city.
              Raghunath Temple, with seven shrines each with its own 'Shikhara' (a rising tower in Hindu temple architecture), 
              is one of the largest temple complexes of North India, located in Jammu city. Maharaja Gulab Singh and his son 
              Maharaj Ranbir Singh built the temple during the period of 1853-1860. The temple has many gods enshrined, but 
              the presiding deity is Lord Ram, an 'avatar' (incarnation) of Lord Vishnu. The temple came under public glare
              and intense scan when, on November 24, 2002, while the Hindus were performing puja in the complex, a 'fidayeen' 
              (suicide tactic used by militants) terrorist attack took place, resulting in at least 10 deaths and injuring
              several devotees.</p></b>

            <b><p>The gigantic Raghunath temple has seven lofty 'shikharas', where every shrine has its own shikhar. On the very entrance
              to the temple, a portrait of Maharana Ranbir Singh and an image of Lord Hanuman exaggerate the site. The central shrine 
              is dedicated to Lord Ram/Raghunath, who is the commanding deity. Apart from the main shrine, the other shrines encompass 
              various incarnations of Lord Vishnu. There is another remarkable shrine of Lord Surya (Sun God), which houses different 
              forms of the Lord. Inside the temple, there are other shrines that house colossal statues of the Hindu gods and goddesses.
              It is notable to mention here that gold sheets envelop the interior walls on three sides of the temple. It also has a 
              gallery where various 'lingams' (phallic form of Lord Shiva) and 'saligrams' are placed. Raghunath temple comprises 
              almost all the images of the Hindu Pantheon, an unusual embodiment in temple architecture. Sermons and rituals of the
              temple include both morning and evening aarti.</p></b>

            <b><p>Glimpses of Mughal masonry can be visualized in the architectural splendor of Raghunath Temple. The carvings and arches 
            are extraordinarily resplendent, grabbing everyone's attention. There is a library in the temple complex, housing rare Sanskrit 
            books and manuscripts. People visit this temple in large numbers to pay their homage to the deity and seek blessings from the Lord.</p></b>
          </div>
        </div>
        <div className="attraction">
          <img src={bahufort} alt="Bahu Fort in Jammu" />
          <div className="attraction-details">
            <h3>Bahu Fort</h3>
            <b><p>Bahu Fort is a historic fort located in Jammu, overlooking the Tawi River. It is a popular tourist attraction.
              Situated 5 km away from the city centre, Bahu Fort stands on a rock face on the left bank of the river Tawi. 
              Perhaps the oldest fort and edifice in the city, it was constructed originally by Raja Bahulochan over 3,000 years ago.
              The existing fort was more recently improved upon and extended by the Dogra rulers. Inside, there is a temple dedicated
              to the Hindu goddess Kali. An extensive terraced garden, known as Bagh-e-Bahu, has been developed around the fort.</p></b>

            <b><p>Bahu Temple is situated inside the Bahu Fort, popularly called Bave Wali Mata Mandir. The Bahu Fort is a fortress 
              representing the lavishness of the Dogra kings and the royal family that resided to rule the region. Pilgrims flock 
              to the temple on Tuesdays and Sundays, regarded as auspicious.</p></b>

            <b><p>The fort, along with the Bahu temple, commands a panoramic view of the Jammu city. On the bypass road, behind the Bahu fort,
              the city forest surrounds the ancient Maha Maya Temple overlooking the River Tawi. A small garden surrounded by acres of woods 
              furnishes a populated destination for tourists. Mahamaya is the local goddess of the Dogras, who lost her life 14 centuries 
              ago combating foreign invaders. The present Bave Wali Mata mandir was built shortly after the coronation of Maharaja Gulab 
              Singh in 1822. It is also known as the Mahakali Temple, the goddess considered second only to Mata Vaishno Devi in terms of 
              mystical power. The Bahu Temple is dedicated to Goddess Kali, the reigning deity of the region of Jammu & Kashmir.
            </p></b>
          </div>
        </div>
        <div className="attraction">
          <img src={baghebahu} alt="Bagh-e-Bahu garden in Jammu" />
          <div className="attraction-details">  
            <h3>Bagh-e-Bahu</h3>
            <b><p>Bagh-e-Bahu is a garden located near Bahu Fort in Jammu. It offers a beautiful view of the fort and the Tawi River.
            A garden known as Bagh-e-Bahu has been developed inside the fort complex to attract more visitors. The fort is a religious place,
             and within its precincts has a temple dedicated to the Hindu goddess Kali, the presiding deity of Jammu. The temple is known 
             locally as the "Bawe Wali Mata" temple. The Aquarium near Bahu Fort is a new edition to the garden. The fish-shaped aquarium
              is the largest underground aquarium in the country and hosts an impressive collection of fish. The aquarium is 22m in length 
              and exhibits around 400 species of fish. It also has a small museum attached to the end of the aquarium.
            </p></b>
          </div>
        </div>
      </div>
      <h3 style={{ textAlign: 'left', paddingLeft: 460, fontSize: 30, marginTop: -40, marginBottom: -75 }}><b>Videos</b></h3>
      <div className="container page-builder-ltr" style={{ textAlign: 'center' }}>
        <div className="row row-style row_a1">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col_a1c about-video">
            <video width="100%" height="580" controls>
              <source src={kistwarVideo} type="video/mp4" />
            </video>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col_a1c about-video">
            <video width="100%" height="580" controls>
              <source src={video2} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <h3><span></span></h3>

      <style>
        {`
        #p {
          padding-bottom: 5px;
        }
        `}
        
      </style>
      <h3><span></span></h3>
      <h3><span></span></h3>

      <h3 style={{ textAlign: 'left', paddingLeft: 460, fontSize: 30, marginTop: 60, marginBottom: 10 }}><b>Gallery</b></h3>
      
      <div className="image-gallery">
        <div className="image-row">
          <div className="image-item">
            <img src={aboutk} alt="About K" />
          </div>
          <div className="image-item">
            <img src={gk1} alt="GK1" />
          </div>
        </div>
        <div className="image-row">
          <div className="image-item">
            <img src={gk2} alt="GK2" />
          </div>
          <div className="image-item">
            <img src={gk3} alt="GK3" />
          </div>
        </div>
        <div className="image-row">
          <div className="image-item">
            <img src={gk6} alt="GK6" />
          </div>
          <div className="image-item">
            <img src={gk10} alt="GK10" />
          </div>
        </div>
        <div className="image-row">
          <div className="image-item">
            <img src={newSlid1} alt="New Slid1" />
          </div>
          <div className="image-item">
            <img src={newSlid4} alt="New Slid4" />
          </div>
        </div>
      </div>

      <style>
        {`
        .image-gallery {
          display: flex;
          flex-direction: column;
          margin-top: 70px;
          padding-left: 1%;
          padding-right: 1%;
        }

        .image-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 40px;
          padding-left: 2%;
          padding-right: 2%;
          gap: 60px;
        }

        .image-item {
          flex: 1;
          margin: 0 0 0 100px;
          height: 500px;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 20px;
          margin: 0 auto; 
          max-width: 45%;
        }

        .image-item img {
          width: auto;
          height: 100%;
          object-fit: cover;
          image-align: center;
          border-radius: 20px;
        }
        `}
      </style>
    </div>
  );
}

export default HomePage;
