import { ExperienceCard } from "./ExperienceCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Experience = () =>{
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive:[
        {
            breakpoint:769,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
    ]
  };
    const experiences =[
        {
            title:"GenAI intern at Banque centrale Populaire",
            date:"Feb. ‑ Jul. 2024",
            description:["hello world"]

        },
        {
            title:"Software engineering intern at Valhko Ltd",
            date:"Jul. ‑ Sep. 2023",
            description:["hello world"]

        },
        {
            title:"Software engineering intern at ministry of Industry and Commerce",
            date:"Jun. ‑ Jul. 2022",
            description:["Contributed to the design and development of 'Task‑Force,' a project by the Ministry aimed at supporting project holders through various phases of project development"]

        }
    ]

    return(
    <section className="experience-container">
        <h2>Experience</h2>
        <div className="experience-content">
            <Slider {...settings}>
            {experiences.map((experience,index)=>
            <ExperienceCard key={index} details={experience}/>
            )}
            </Slider>
        </div>
    </section>   
    )
}