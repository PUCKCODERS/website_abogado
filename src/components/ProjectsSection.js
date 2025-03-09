import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "./SectionTitle";
import projects from "../assets/data/projects";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";

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
`;

export default function ProjectsSection() {
    return (
        <ProjectSectionStyle>
            <div className="container">
                <SectionTitle heading="AREAS LEGALES" subheading="EXPERTOS EN SOLUCIONES LEGALES"/>
                <div className="projects__allItems">
                    <Swiper spaceBetween={30} slidesPerView={2} navigation >
                        {projects.map((project, index) => {
                            if (index >= 5) return;
                            return (
                                
                                    <ProjectItem/>
                                
                                
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </ProjectSectionStyle>
    )
}