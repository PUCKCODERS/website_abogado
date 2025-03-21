import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Importación correcta
import SectionTitle from "./SectionTitle";
import projects from "../assets/data/projects";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";
import 'swiper/css'; // Importa los estilos básicos de Swiper
import 'swiper/css/navigation'; // Importa los estilos para la navegación



const ProjectSectionStyle = styled.div`
    padding: 10rem 0;
    .projects__allItems {
        display: flex;
        gap: 3rem;
        margin-top: 5rem;
    }
    .swiper-container {
        padding-top: 8rem;
        max-width: 100%;
    }
    .swiper-button-prev,
    .swiper-button-next {
        position: absolute;
        height: 50px;
        width: 50px;
        background-color: var(--deep-dark);
        z-index: 10;
        right: auto;
        left: auto;
        top: 30%;
        transform: translateY(50%);
        color: white;
        border-radius: 8px;
        border: 3px solid #000;
    }
    .swiper-button-next {
        right: 0;
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
        font-size: 2rem;
        
    }
    @media only screen and (max-width: 768px) {
        .projects__allItems {
            max-width: 400px;
            margin: 0 auto;
            margin-top: 7rem;
            gap: 5rem;
        }.projectItem__img{
            width: 100%;
        }
    }

 
`;

export default function ProjectsSection() {
    return (
        <ProjectSectionStyle>
            <div className="container">
                <SectionTitle heading="AREAS LEGALES" subheading="EXPERTOS EN SOLUCIONES LEGALES"/>
                <div className="projects__allItems">
                    <Swiper spaceBetween={30} slidesPerView={1} navigation modules={[Navigation]} 
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }}
                    >
                        {projects.map((project, index) => {
                            if (index >= 10) return null;
                            return (
                                <SwiperSlide key={project.id}>
                                    <ProjectItem
                                    navLink={project.navLink}
                                    title={project.name}
                                    img={project.img}
                                    desc={project.desc}
                                    
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </ProjectSectionStyle>
    );
}
